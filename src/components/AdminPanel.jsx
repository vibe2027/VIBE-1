import { useState } from 'react'
import {
  canGrantLifetime,
  canGrantDuration,
  GRANT_OPTIONS_ADMIN,
  GRANT_OPTIONS_ASSOCIATE,
} from '../lib/roles'

/**
 * Admin : voit tout + billets à vie / an / mois / semaine
 * Associé : billets gratuits 1 mois ou 1 an seulement
 */
export default function AdminPanel({ role, email, grants, onGrant, activity }) {
  const [target, setTarget] = useState('')
  const [duration, setDuration] = useState(role === 'admin' ? 'month' : 'month')
  const [note, setNote] = useState('')

  const options = role === 'admin' ? GRANT_OPTIONS_ADMIN : GRANT_OPTIONS_ASSOCIATE

  const submit = (e) => {
    e.preventDefault()
    if (!target.trim()) return
    if (!canGrantDuration(role, duration) && duration !== 'lifetime') {
      if (role === 'associate' && (duration === 'lifetime' || duration === 'week')) return
    }
    if (duration === 'lifetime' && !canGrantLifetime(role)) return
    onGrant({
      email: target.trim().toLowerCase(),
      duration,
      note,
      by: email,
      at: Date.now(),
    })
    setTarget('')
    setNote('')
  }

  return (
    <section style={{ padding: '24px 16px', maxWidth: 720, margin: '0 auto' }}>
      <p style={label}>// {role === 'admin' ? 'Administration' : 'Espace associé'}</p>
      <h2 style={title}>{role === 'admin' ? 'Panneau Admin' : 'Associé — Gratuités'}</h2>
      <p style={sub}>
        Connecté : {email}
        {role === 'admin'
          ? ' · Accès total · Billets à vie / an / mois / semaine'
          : ' · Peut offrir 1 mois ou 1 an gratuit'}
      </p>

      <form onSubmit={submit} style={{ marginBottom: 36 }}>
        <label style={lbl}>Courriel du membre</label>
        <input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="membre@courriel.ca" style={input} />
        <label style={lbl}>Type de billet</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} style={input}>
          {options.map((o) => (
            <option key={o.id} value={o.id}>{o.label}</option>
          ))}
        </select>
        <label style={lbl}>Note (optionnel)</label>
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Raison / promo" style={input} />
        <button type="submit" style={btn}>Accorder le billet</button>
      </form>

      <p style={label}>// Billets accordés</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {(grants || []).length === 0 && (
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>Aucun billet encore.</p>
        )}
        {(grants || []).map((g, i) => (
          <div key={i} style={row}>
            <span>{g.email}</span>
            <span style={{ color: '#D4AF37' }}>{g.duration}</span>
            <span style={{ opacity: 0.4 }}>{new Date(g.at).toLocaleString('fr-CA')}</span>
          </div>
        ))}
      </div>

      {role === 'admin' && (
        <>
          <p style={{ ...label, marginTop: 36 }}>// Activité récente (aperçu)</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {(activity || []).slice(0, 20).map((a, i) => (
              <div key={i} style={{ ...row, fontSize: '0.55rem' }}>{a}</div>
            ))}
            {(!activity || activity.length === 0) && (
              <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>En attente d’événements live…</p>
            )}
          </div>
        </>
      )}
    </section>
  )
}

const label = { fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', marginBottom: 8 }
const title = { fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.5rem', marginBottom: 8 }
const sub = { fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginBottom: 24, lineHeight: 1.6 }
const lbl = { display: 'block', fontSize: '0.5rem', letterSpacing: 2, color: 'rgba(212,175,55,0.4)', margin: '12px 0 6px', textTransform: 'uppercase' }
const input = { width: '100%', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.75)', padding: '12px', fontSize: '0.75rem', fontFamily: 'inherit', boxSizing: 'border-box' }
const btn = { width: '100%', marginTop: 16, background: 'transparent', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.6)', padding: '14px', fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }
const row = { display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', padding: '10px 12px', border: '0.5px solid rgba(212,175,55,0.12)', fontSize: '0.6rem' }
