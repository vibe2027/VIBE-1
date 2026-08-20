import { useState } from 'react'
import { LANGS, translateText } from '../lib/translate'

/**
 * Démo chat : j’écris en ma langue, l’autre lit dans la sienne.
 */
export default function LiveChatTranslate() {
  const [myLang, setMyLang] = useState('fr')
  const [theirLang, setTheirLang] = useState('ru')
  const [input, setInput] = useState('')
  const [thread, setThread] = useState([
    {
      id: 1,
      from: 'them',
      original: 'Привет, как дела?',
      originalLang: 'ru',
      shown: 'Salut, ça va ?',
      shownLang: 'fr',
    },
  ])
  const [busy, setBusy] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    if (!input.trim() || busy) return
    setBusy(true)
    const original = input.trim()
    const shown = await translateText(original, myLang, theirLang)
    setThread((t) => [
      ...t,
      {
        id: Date.now(),
        from: 'me',
        original,
        originalLang: myLang,
        shown,
        shownLang: theirLang,
      },
    ])
    setInput('')
    setBusy(false)
  }

  return (
    <section style={{ padding: '24px 16px', maxWidth: 520, margin: '0 auto' }}>
      <p style={{ fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(201,162,39,0.45)', textTransform: 'uppercase' }}>
        // Traduction temps réel
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#C9A227', fontSize: '1.4rem', margin: '8px 0 12px' }}>
        Ta langue → la leur
      </h2>
      <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: 20 }}>
        Tu écris en français, iel reçoit en russe — et inversement. Même principe pour toutes les langues supportées.
      </p>

      <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
        <label style={lab}>
          Ma langue
          <select value={myLang} onChange={(e) => setMyLang(e.target.value)} style={sel}>
            {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </label>
        <label style={lab}>
          Sa langue
          <select value={theirLang} onChange={(e) => setTheirLang(e.target.value)} style={sel}>
            {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </label>
      </div>

      <div style={{
        border: '0.5px solid rgba(201,162,39,0.2)', minHeight: 220, padding: 14,
        background: 'rgba(255,255,255,0.02)', marginBottom: 12,
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {thread.map((m) => (
          <div key={m.id} style={{ alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
            <div style={{
              padding: '10px 14px',
              background: m.from === 'me' ? 'rgba(201,162,39,0.12)' : 'rgba(255,255,255,0.05)',
              border: '0.5px solid rgba(201,162,39,0.2)',
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5,
            }}>
              {m.from === 'me' ? (
                <>
                  <div>{m.original}</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(201,162,39,0.55)', marginTop: 6 }}>
                    iel voit : {m.shown}
                  </div>
                </>
              ) : (
                <>
                  <div>{m.shown}</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>
                    original ({m.originalLang}) : {m.original}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={send} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={myLang === 'fr' ? 'Écris en français…' : 'Write…'}
          style={{
            flex: 1, background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(201,162,39,0.25)',
            color: 'rgba(255,255,255,0.8)', padding: '12px', fontSize: '0.75rem', fontFamily: 'inherit',
          }}
        />
        <button type="submit" disabled={busy} style={{
          background: 'transparent', border: '1px solid rgba(201,162,39,0.5)', color: '#C9A227',
          padding: '0 16px', fontSize: '0.6rem', letterSpacing: 2, textTransform: 'uppercase',
          cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Envoyer
        </button>
      </form>
    </section>
  )
}

const lab = { fontSize: '0.5rem', letterSpacing: 2, color: 'rgba(201,162,39,0.45)', textTransform: 'uppercase', display: 'flex', flexDirection: 'column', gap: 6 }
const sel = { background: '#111', color: 'rgba(255,255,255,0.7)', border: '0.5px solid rgba(201,162,39,0.25)', padding: '8px', fontFamily: 'inherit', fontSize: '0.7rem' }
