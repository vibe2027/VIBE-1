import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ prenom: '', email: '', ville: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.prenom || !form.email || !form.ville) {
      setStatus('Remplis tous les champs.')
      return
    }
    // TODO: brancher Supabase Auth + Stripe Checkout ici
    setStatus('Inscription reçue. Confirmation par courriel sous 24 h.')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: 'rgba(255,255,255,0.75)',
      fontFamily: "'Space Mono', monospace",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(3rem, 10vw, 5rem)',
        color: '#D4AF37',
        letterSpacing: '6px',
        marginBottom: '8px'
      }}>
        VIBE
      </h1>
      <p style={{ fontSize: '0.7rem', letterSpacing: '4px', color: 'rgba(212,175,55,0.5)', textTransform: 'uppercase', marginBottom: '40px' }}>
        Réseau LGBTQ+ Canadien · Québec 2026
      </p>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
        <label style={styles.label}>Prénom</label>
        <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Ton prénom" style={styles.input} />

        <label style={styles.label}>Courriel</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="ton@courriel.ca" style={styles.input} />

        <label style={styles.label}>Ville</label>
        <select name="ville" value={form.ville} onChange={handleChange} style={styles.input}>
          <option value="">Sélectionner</option>
          <option>Québec</option>
          <option>Montréal</option>
          <option>Toronto</option>
          <option>Vancouver</option>
          <option>Ottawa</option>
          <option>Calgary</option>
          <option>Autre</option>
        </select>

        <button type="submit" style={styles.btn}>
          Réserver ma place — 99 $
        </button>

        {status && (
          <p style={{ marginTop: '16px', fontSize: '0.7rem', color: '#D4AF37', textAlign: 'center' }}>
            {status}
          </p>
        )}
      </form>

      <p style={{ marginTop: '48px', fontSize: '0.5rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.15)' }}>
        © 2026 VIBE · Québec, Canada · Conforme Loi 25
      </p>
    </div>
  )
}

const styles = {
  label: {
    display: 'block',
    fontSize: '0.55rem',
    letterSpacing: '3px',
    color: 'rgba(212,175,55,0.4)',
    textTransform: 'uppercase',
    marginBottom: '6px',
    marginTop: '14px'
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '0.5px solid rgba(212,175,55,0.2)',
    color: 'rgba(255,255,255,0.7)',
    padding: '12px 14px',
    fontSize: '0.75rem',
    fontFamily: "'Space Mono', monospace",
    outline: 'none',
    boxSizing: 'border-box'
  },
  btn: {
    width: '100%',
    marginTop: '24px',
    background: 'transparent',
    color: '#D4AF37',
    border: '1px solid rgba(212,175,55,0.6)',
    padding: '16px',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: "'Space Mono', monospace'
  }
}
