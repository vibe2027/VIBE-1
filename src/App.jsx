import { useCallback, useEffect, useState } from 'react'
import { supabase, supabaseConfigured } from './supabaseClient'
import { recordClick, MATCH_CHANNEL } from './lib/matchEngine'
import { resolveRole } from './lib/roles'
import MatchFlash from './components/MatchFlash'
import Landing from './components/Landing'
import SalonFlottant from './components/SalonFlottant'
import SalonVoix from './components/SalonVoix'
import Tribunal from './components/Tribunal'
import AdminPanel from './components/AdminPanel'
import PrivateChannel from './components/PrivateChannel'
import GlobeLive from './components/GlobeLive'
import LiveChatTranslate from './components/LiveChatTranslate'
import { openCheckout, EXTRAS } from './lib/pricing'
import './index.css'

const MY_ID = 'me-' + (typeof crypto !== 'undefined' && crypto.randomUUID
  ? crypto.randomUUID().slice(0, 8)
  : String(Date.now()).slice(-6))

function loadUser() {
  try {
    const raw = localStorage.getItem('vibe_user')
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export default function App() {
  const [user, setUser] = useState(loadUser)
  const [view, setView] = useState('landing')
  const [flashKey, setFlashKey] = useState(0)
  const [myMatch, setMyMatch] = useState(null)
  const [revealed, setRevealed] = useState({})
  const [status, setStatus] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [grants, setGrants] = useState(() => {
    try { return JSON.parse(localStorage.getItem('vibe_grants') || '[]') } catch { return [] }
  })
  const [activity, setActivity] = useState([])

  const role = user ? resolveRole(user.email) : 'guest'
  const isStaff = role === 'admin' || role === 'associate'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paid = params.get('paid')
    if (paid) {
      setStatus(`Paiement reçu (${paid}). Merci.`)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  useEffect(() => {
    if (!supabaseConfigured) return
    const channel = supabase.channel(MATCH_CHANNEL)
    channel
      .on('broadcast', { event: 'flash' }, (payload) => {
        setFlashKey((k) => k + 1)
        const pair = payload?.payload?.pair
        if (pair && pair.includes(MY_ID)) {
          setMyMatch({ pair, at: payload.payload.at })
          const other = pair.find((id) => id !== MY_ID)
          if (other) setRevealed((r) => ({ ...r, [other]: true, [MY_ID]: true }))
        }
      })
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [])

  const broadcastFlash = useCallback(async (pair, at) => {
    setFlashKey((k) => k + 1)
    if (!supabaseConfigured) return
    await supabase.channel(MATCH_CHANNEL).send({ type: 'broadcast', event: 'flash', payload: { pair, at } })
  }, [])

  const onClickProfile = useCallback((targetId) => {
    if (targetId === MY_ID) return
    const result = recordClick(MY_ID, targetId)
    if (result.matched) {
      setMyMatch({ pair: result.pair, at: result.at })
      setRevealed((r) => ({ ...r, [result.pair[0]]: true, [result.pair[1]]: true }))
      broadcastFlash(result.pair, result.at)
      setStatus('Match ! Flash global — seuls vous deux savez.')
      setActivity((a) => [`Match ${result.pair.join('×')}`, ...a])
    } else {
      setStatus('Clic enregistré… 3 s pour un match mutuel.')
    }
  }, [broadcastFlash])

  const login = (e) => {
    e?.preventDefault?.()
    const email = (loginEmail || '').trim().toLowerCase()
    if (!email || !email.includes('@')) {
      setStatus('Courriel valide requis.')
      return
    }
    const u = { email, at: Date.now() }
    localStorage.setItem('vibe_user', JSON.stringify(u))
    setUser(u)
    const r = resolveRole(email)
    setStatus(r === 'admin' ? 'Admin' : r === 'associate' ? 'Associé' : 'Connecté')
    setView(r === 'admin' || r === 'associate' ? 'admin' : 'home')
  }

  const logout = () => {
    localStorage.removeItem('vibe_user')
    setUser(null)
    setView('landing')
  }

  const onGrant = (g) => {
    const next = [g, ...grants]
    setGrants(next)
    localStorage.setItem('vibe_grants', JSON.stringify(next))
    setStatus(`Billet ${g.duration} → ${g.email}`)
    setActivity((a) => [`Grant ${g.duration} → ${g.email}`, ...a])
  }

  if (view === 'landing') {
    return (
      <>
        <Landing onEnter={() => setView(user ? 'home' : 'login')} onLogin={() => setView('login')} />
        {status && <Toast msg={status} />}
      </>
    )
  }

  if (view === 'login') {
    return (
      <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <form onSubmit={login} style={{ width: '100%', maxWidth: 380 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37', textAlign: 'center', letterSpacing: 6 }}>VIBE</h1>
          <p style={{ fontSize: '0.55rem', letterSpacing: 3, color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: '8px 0 28px' }}>CONNEXION</p>
          <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="ton@courriel.ca" style={inputStyle} autoFocus />
          <button type="submit" style={{ ...btnPrimary, width: '100%', marginTop: 16 }}>Entrer</button>
          <button type="button" style={{ ...btnGhost, width: '100%', marginTop: 10 }} onClick={() => setView('landing')}>Retour</button>
        </form>
        {status && <Toast msg={status} />}
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <MatchFlash trigger={flashKey} />

      <nav style={navStyle}>
        <button type="button" onClick={() => setView('home')} style={navBrand}>VIBE</button>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <NavBtn active={view === 'home'} onClick={() => setView('home')}>Accueil</NavBtn>
          <NavBtn active={view === 'flottant'} onClick={() => setView('flottant')}>Flottant</NavBtn>
          <NavBtn active={view === 'voix'} onClick={() => setView('voix')}>Voix</NavBtn>
          <NavBtn active={view === 'globe'} onClick={() => setView('globe')}>Globe</NavBtn>
          <NavBtn active={view === 'traduire'} onClick={() => setView('traduire')}>Traduction</NavBtn>
          <NavBtn active={view === 'tribunal'} onClick={() => setView('tribunal')}>Tribunal</NavBtn>
          <NavBtn active={view === 'tarifs'} onClick={() => setView('tarifs')}>Tarifs</NavBtn>
          {isStaff && <NavBtn active={view === 'admin'} onClick={() => setView('admin')}>{role === 'admin' ? 'Admin' : 'Associé'}</NavBtn>}
          {isStaff && <NavBtn active={view === 'private'} onClick={() => setView('private')}>Privé</NavBtn>}
          {user ? (
            <button type="button" onClick={logout} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: '0.5rem', cursor: 'pointer', fontFamily: 'inherit' }}>Sortir</button>
          ) : (
            <NavBtn active={false} onClick={() => setView('login')}>Connexion</NavBtn>
          )}
        </div>
      </nav>

      {view === 'home' && (
        <header style={{ textAlign: 'center', padding: '60px 24px 40px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem,10vw,4.5rem)', color: '#D4AF37', letterSpacing: 6 }}>VIBE</h1>
          <p style={{ fontSize: '0.6rem', letterSpacing: 4, color: 'rgba(212,175,55,0.45)', marginTop: 8 }}>Réseau LGBTQ+ · Québec 2026</p>
          {user && <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', marginTop: 12 }}>{user.email} · {role}</p>}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <button type="button" style={btnPrimary} onClick={() => setView('flottant')}>Salon Flottant</button>
            <button type="button" style={btnGhost} onClick={() => setView('globe')}>Globe</button>
            <button type="button" style={btnGhost} onClick={() => setView('traduire')}>Traduction</button>
            <button type="button" style={btnGhost} onClick={() => setView('tribunal')}>Tribunal</button>
          </div>
        </header>
      )}

      {view === 'flottant' && (
        <SalonFlottant
          myId={MY_ID}
          revealed={revealed}
          onClickProfile={onClickProfile}
          onRevealSelf={(id) => { setRevealed((r) => ({ ...r, [id]: true })); setStatus('Fumée dissipée.') }}
        />
      )}
      {view === 'voix' && <SalonVoix />}
      {view === 'globe' && <GlobeLive onSelect={(p) => setStatus(`${p.label} · ${p.city}`)} />}
      {view === 'traduire' && <LiveChatTranslate />}
      {view === 'tribunal' && (
        <Tribunal onStatus={setStatus} onPardon={() => openCheckout(EXTRAS.find((x) => x.id === 'pardon_25')?.url)} />
      )}
      {view === 'admin' && isStaff && (
        <AdminPanel role={role} email={user.email} grants={grants} onGrant={onGrant} activity={activity} />
      )}
      {view === 'private' && isStaff && <PrivateChannel email={user.email} />}
      {view === 'tarifs' && <Landing onEnter={() => {}} onLogin={() => setView('login')} />}

      {status && <Toast msg={status} />}
      {myMatch && (
        <p style={{ textAlign: 'center', fontSize: '0.5rem', color: 'rgba(212,175,55,0.3)', padding: 12 }}>
          Match privé : {myMatch.pair.join(' × ')}
        </p>
      )}
    </div>
  )
}

function Toast({ msg }) {
  return (
    <p style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      maxWidth: '90%', background: 'rgba(0,0,0,0.92)', border: '0.5px solid rgba(212,175,55,0.4)',
      padding: '12px 20px', fontSize: '0.65rem', color: '#D4AF37', textAlign: 'center', zIndex: 200,
    }}>{msg}</p>
  )
}

function NavBtn({ children, active, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{
      background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
      fontSize: '0.48rem', letterSpacing: 1.2, textTransform: 'uppercase',
      color: active ? '#D4AF37' : 'rgba(212,175,55,0.35)',
    }}>{children}</button>
  )
}

const navStyle = {
  position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', padding: '10px 14px', background: 'rgba(0,0,0,0.92)',
  borderBottom: '0.5px solid rgba(212,175,55,0.2)', gap: 8, flexWrap: 'wrap',
}
const navBrand = { background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: 6, color: '#D4AF37', fontWeight: 700, fontFamily: 'inherit' }
const btnPrimary = { background: 'transparent', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.6)', padding: '12px 22px', fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }
const btnGhost = { ...btnPrimary, border: '0.5px solid rgba(212,175,55,0.25)', color: 'rgba(212,175,55,0.5)' }
const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.75)', padding: '14px', fontSize: '0.8rem', fontFamily: 'inherit', boxSizing: 'border-box' }
