import { useCallback, useEffect, useState } from 'react'
import { supabase, supabaseConfigured } from './supabaseClient'
import { recordClick, MATCH_CHANNEL } from './lib/matchEngine'
import MatchFlash from './components/MatchFlash'
import SalonFlottant from './components/SalonFlottant'
import SalonVoix from './components/SalonVoix'
import './index.css'

const MY_ID = 'me-' + (typeof crypto !== 'undefined' && crypto.randomUUID
  ? crypto.randomUUID().slice(0, 8)
  : String(Date.now()).slice(-6))

export default function App() {
  const [view, setView] = useState('home') // home | flottant | voix | inscription
  const [flashKey, setFlashKey] = useState(0)
  const [myMatch, setMyMatch] = useState(null) // { pair, at } — privé
  const [revealed, setRevealed] = useState({})
  const [status, setStatus] = useState('')
  const [form, setForm] = useState({ prenom: '', email: '', ville: '' })

  // Écoute des flashs globaux (Realtime si configuré, sinon local)
  useEffect(() => {
    if (!supabaseConfigured) return
    const channel = supabase.channel(MATCH_CHANNEL)
    channel
      .on('broadcast', { event: 'flash' }, (payload) => {
        setFlashKey((k) => k + 1)
        // Si je fais partie du pair, j'enregistre le match privé
        const pair = payload?.payload?.pair
        if (pair && pair.includes(MY_ID)) {
          setMyMatch({ pair, at: payload.payload.at })
          const other = pair.find((id) => id !== MY_ID)
          if (other) setRevealed((r) => ({ ...r, [other]: true, [MY_ID]: true }))
        }
      })
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const broadcastFlash = useCallback(async (pair, at) => {
    setFlashKey((k) => k + 1)
    if (!supabaseConfigured) return
    await supabase.channel(MATCH_CHANNEL).send({
      type: 'broadcast',
      event: 'flash',
      payload: { pair, at },
    })
  }, [])

  const onClickProfile = useCallback(
    (targetId) => {
      if (targetId === MY_ID) return
      const result = recordClick(MY_ID, targetId)
      if (result.matched) {
        setMyMatch({ pair: result.pair, at: result.at })
        setRevealed((r) => ({
          ...r,
          [result.pair[0]]: true,
          [result.pair[1]]: true,
        }))
        broadcastFlash(result.pair, result.at)
        setStatus('Match ! Un flash a illuminé tous les écrans. Seuls vous deux savez.')
      } else {
        setStatus('Clic enregistré… Si l’autre clique sur toi dans les 3 secondes → match.')
      }
    },
    [broadcastFlash]
  )

  const onRevealSelf = (id) => {
    setRevealed((r) => ({ ...r, [id]: true }))
    setStatus('Fumée dissipée. Tu t’es dévoilé.')
  }

  const handleInscription = (e) => {
    e.preventDefault()
    if (!form.prenom || !form.email || !form.ville) {
      setStatus('Remplis tous les champs.')
      return
    }
    setStatus(
      supabaseConfigured
        ? 'Inscription reçue. Active Auth + Stripe pour finaliser le paiement 99 $.'
        : 'Formulaire OK. Configure VITE_SUPABASE_ANON_KEY pour brancher la base.'
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <MatchFlash trigger={flashKey} />

      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '12px 20px', background: 'rgba(0,0,0,0.92)',
        borderBottom: '0.5px solid rgba(212,175,55,0.2)',
      }}>
        <button type="button" onClick={() => setView('home')} style={navBrand}>
          VIBE
        </button>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <NavBtn active={view === 'flottant'} onClick={() => setView('flottant')}>Salon Flottant</NavBtn>
          <NavBtn active={view === 'voix'} onClick={() => setView('voix')}>Salon Voix</NavBtn>
          <NavBtn active={view === 'inscription'} onClick={() => setView('inscription')}>Rejoindre</NavBtn>
        </div>
      </nav>

      {view === 'home' && (
        <header style={{ textAlign: 'center', padding: '80px 24px 48px' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 12vw, 5.5rem)',
            color: '#D4AF37', letterSpacing: 6, marginBottom: 12,
          }}>
            VIBE
          </h1>
          <p style={{ fontSize: '0.65rem', letterSpacing: 5, color: 'rgba(212,175,55,0.45)', textTransform: 'uppercase' }}>
            Réseau LGBTQ+ Canadien · Québec 2026
          </p>
          <p style={{ maxWidth: 420, margin: '28px auto', fontSize: '0.72rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.4)' }}>
            Salon Flottant · Salon de la Voix · Mode Fantôme (fumée dense).
            Match simultané : flash sur tous les écrans, secret pour les autres.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <button type="button" style={btnPrimary} onClick={() => setView('flottant')}>Entrer au Salon Flottant</button>
            <button type="button" style={btnGhost} onClick={() => setView('voix')}>Salon de la Voix</button>
          </div>
          {!supabaseConfigured && (
            <p style={{ marginTop: 40, fontSize: '0.55rem', color: 'rgba(255,100,100,0.6)', letterSpacing: 1 }}>
              ⚠ Supabase non configuré — mode démo local (matchs locaux OK, pas de sync multi-appareils)
            </p>
          )}
        </header>
      )}

      {view === 'flottant' && (
        <SalonFlottant
          myId={MY_ID}
          revealed={revealed}
          onClickProfile={onClickProfile}
          onRevealSelf={onRevealSelf}
        />
      )}

      {view === 'voix' && <SalonVoix />}

      {view === 'inscription' && (
        <section style={{ maxWidth: 400, margin: '40px auto', padding: '0 20px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37', textAlign: 'center', marginBottom: 8 }}>Rejoindre VIBE</h2>
          <p style={{ fontSize: '0.55rem', letterSpacing: 3, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginBottom: 28 }}>Pass Fondateur · 99 $ CAD / an</p>
          <form onSubmit={handleInscription}>
            <Label>Prénom</Label>
            <Input name="prenom" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} />
            <Label>Courriel</Label>
            <Input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Label>Ville</Label>
            <select
              name="ville"
              value={form.ville}
              onChange={(e) => setForm({ ...form, ville: e.target.value })}
              style={inputStyle}
            >
              <option value="">Sélectionner</option>
              {['Québec', 'Montréal', 'Toronto', 'Vancouver', 'Ottawa', 'Calgary', 'Autre'].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <button type="submit" style={{ ...btnPrimary, width: '100%', marginTop: 24 }}>Réserver — 99 $</button>
          </form>
        </section>
      )}

      {status && (
        <p style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          maxWidth: '90%', background: 'rgba(0,0,0,0.9)', border: '0.5px solid rgba(212,175,55,0.4)',
          padding: '12px 20px', fontSize: '0.65rem', color: '#D4AF37', textAlign: 'center', zIndex: 200,
        }}>
          {status}
        </p>
      )}

      {myMatch && (
        <p style={{ textAlign: 'center', fontSize: '0.5rem', color: 'rgba(212,175,55,0.35)', padding: 16 }}>
          Dernier match privé : {myMatch.pair.join(' × ')} — les autres n’ont vu que le flash.
        </p>
      )}
    </div>
  )
}

function NavBtn({ children, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: '0.52rem', letterSpacing: 2, textTransform: 'uppercase',
        color: active ? '#D4AF37' : 'rgba(212,175,55,0.35)',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </button>
  )
}

function Label({ children }) {
  return <label style={{ display: 'block', fontSize: '0.5rem', letterSpacing: 3, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', margin: '14px 0 6px' }}>{children}</label>
}
function Input(props) {
  return <input {...props} style={inputStyle} />
}

const navBrand = {
  background: 'none', border: 'none', cursor: 'pointer',
  fontSize: '0.75rem', letterSpacing: 6, color: '#D4AF37', fontWeight: 700, fontFamily: 'inherit',
}
const btnPrimary = {
  background: 'transparent', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.6)',
  padding: '14px 28px', fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase',
  cursor: 'pointer', fontFamily: 'inherit',
}
const btnGhost = {
  ...btnPrimary, border: '0.5px solid rgba(212,175,55,0.25)', color: 'rgba(212,175,55,0.5)',
}
const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(212,175,55,0.2)',
  color: 'rgba(255,255,255,0.7)', padding: '12px 14px', fontSize: '0.75rem',
  fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
}
