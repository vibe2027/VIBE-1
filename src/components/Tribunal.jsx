import { useState } from 'react'

const DEMO_CASES = [
  {
    id: 'c1', accused: 'Membre · MTL', charge: 'Harcèlement dans le Salon Flottant',
    summary: 'Messages répétés après demande d’arrêt.', status: 'open',
    votesGuilty: 0, votesInnocent: 0, verdict: null,
  },
  {
    id: 'c2', accused: 'Membre · QC', charge: 'Usurpation d’identité',
    summary: 'Profil utilisant le nom d’un autre membre.', status: 'closed',
    votesGuilty: 8, votesInnocent: 4, verdict: 'guilty',
  },
  {
    id: 'c3', accused: 'Membre · OTT', charge: 'Signalement abusif',
    summary: 'Signalements infondés répétés.', status: 'closed',
    votesGuilty: 3, votesInnocent: 9, verdict: 'innocent',
  },
]

export default function Tribunal({ onStatus, onPardon }) {
  const [cases, setCases] = useState(DEMO_CASES)
  const [selected, setSelected] = useState(null)
  const [report, setReport] = useState({ target: '', reason: '' })

  const vote = (caseId, side) => {
    setCases((prev) =>
      prev.map((c) => {
        if (c.id !== caseId || c.status !== 'open') return c
        const next = {
          ...c,
          votesGuilty: c.votesGuilty + (side === 'guilty' ? 1 : 0),
          votesInnocent: c.votesInnocent + (side === 'innocent' ? 1 : 0),
        }
        const total = next.votesGuilty + next.votesInnocent
        if (total >= 5) {
          next.status = 'closed'
          next.verdict = next.votesGuilty > next.votesInnocent ? 'guilty' : 'innocent'
          onStatus?.(
            next.verdict === 'guilty'
              ? 'Verdict : COUPABLE — braise. Pardon 25 $ possible.'
              : 'Verdict : NON COUPABLE — ailes.'
          )
        }
        return next
      })
    )
  }

  const pardon = (caseId) => {
    setCases((prev) =>
      prev.map((c) => (c.id === caseId && c.verdict === 'guilty' ? { ...c, verdict: 'pardoned' } : c))
    )
    onPardon?.()
    onStatus?.('Redirection Stripe — Pardon 25 $.')
  }

  const submitReport = (e) => {
    e.preventDefault()
    if (!report.target || !report.reason) {
      onStatus?.('Indique la cible et le motif.')
      return
    }
    const id = 'c' + Date.now()
    setCases((prev) => [{
      id, accused: report.target, charge: report.reason.slice(0, 80),
      summary: report.reason, status: 'open', votesGuilty: 0, votesInnocent: 0, verdict: null,
    }, ...prev])
    setReport({ target: '', reason: '' })
    onStatus?.('Signalement soumis au Tribunal.')
  }

  return (
    <section style={{ padding: '24px 16px', maxWidth: 720, margin: '0 auto' }}>
      <p style={s.label}>// Tribunal communautaire</p>
      <h2 style={s.title}>Justice par la communauté</h2>
      <p style={s.sub}>Non coupable = ailes · Coupable = braise · Pardon 25 $ (Stripe)</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className="verdict-badge wings">🪽 Non coupable</div>
        <div className="verdict-badge braise">Coupable — braise</div>
        <div className="verdict-badge pardon">Pardon — 25 $</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cases.map((c) => (
          <article
            key={c.id}
            className={'tribunal-card' + (c.verdict === 'guilty' ? ' status-braise' : '') + (c.verdict === 'innocent' ? ' status-wings' : '') + (c.verdict === 'pardoned' ? ' status-pardon' : '')}
            onClick={() => setSelected(selected === c.id ? null : c.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#D4AF37' }}>
                  {c.verdict === 'innocent' && <span className="wings-icon">🪽 </span>}{c.accused}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{c.charge}</div>
              </div>
              <Tag verdict={c.verdict} status={c.status} />
            </div>
            {selected === c.id && (
              <div style={{ marginTop: 16, borderTop: '0.5px solid rgba(212,175,55,0.15)', paddingTop: 14 }}>
                <p style={{ fontSize: '0.68rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.4)' }}>{c.summary}</p>
                <p style={{ fontSize: '0.55rem', marginTop: 10, color: 'rgba(212,175,55,0.4)' }}>
                  Votes — Coupable {c.votesGuilty} · Non coupable {c.votesInnocent}
                </p>
                {c.status === 'open' && (
                  <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                    <button type="button" style={s.btnG} onClick={(e) => { e.stopPropagation(); vote(c.id, 'guilty') }}>Coupable</button>
                    <button type="button" style={s.btnI} onClick={(e) => { e.stopPropagation(); vote(c.id, 'innocent') }}>Non coupable</button>
                  </div>
                )}
                {c.verdict === 'guilty' && (
                  <button type="button" style={s.btnP} onClick={(e) => { e.stopPropagation(); pardon(c.id) }}>
                    Pardon — 25 $ (Stripe)
                  </button>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
      <form onSubmit={submitReport} style={{ marginTop: 40 }}>
        <p style={{ ...s.label, marginBottom: 16 }}>// Signalement anonyme</p>
        <input placeholder="Pseudonyme signalé" value={report.target} onChange={(e) => setReport({ ...report, target: e.target.value })} style={s.input} />
        <textarea placeholder="Motif" value={report.reason} onChange={(e) => setReport({ ...report, reason: e.target.value })} rows={3} style={{ ...s.input, marginTop: 10 }} />
        <button type="submit" style={{ ...s.btn, width: '100%', marginTop: 14 }}>Envoyer au Tribunal</button>
      </form>
    </section>
  )
}

function Tag({ verdict, status }) {
  if (status === 'open') return <span style={s.tOpen}>En audience</span>
  if (verdict === 'innocent') return <span style={s.tW}>🪽 Non coupable</span>
  if (verdict === 'guilty') return <span style={s.tB}>Braise</span>
  if (verdict === 'pardoned') return <span style={s.tP}>Pardonné</span>
  return null
}

const s = {
  label: { fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', marginBottom: 8 },
  title: { fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.6rem', marginBottom: 8 },
  sub: { fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: 24 },
  btn: { background: 'transparent', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.6)', padding: '14px 20px', fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' },
  btnG: { flex: 1, background: 'transparent', border: '1px solid rgba(255,100,50,0.5)', color: 'rgba(255,140,80,0.9)', padding: '12px', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'inherit' },
  btnI: { flex: 1, background: 'transparent', border: '1px solid rgba(150,200,255,0.45)', color: 'rgba(180,220,255,0.9)', padding: '12px', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'inherit' },
  btnP: { width: '100%', marginTop: 12, background: 'transparent', border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', padding: '12px', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'inherit' },
  input: { width: '100%', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.7)', padding: '12px 14px', fontSize: '0.75rem', fontFamily: 'inherit', boxSizing: 'border-box' },
  tOpen: { fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(212,175,55,0.6)', border: '0.5px solid rgba(212,175,55,0.3)', padding: '4px 10px' },
  tW: { fontSize: '0.5rem', color: 'rgba(180,220,255,0.95)', border: '0.5px solid rgba(150,200,255,0.4)', padding: '4px 10px', background: 'rgba(100,160,255,0.08)' },
  tB: { fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,140,60,0.95)', border: '0.5px solid rgba(255,100,40,0.45)', padding: '4px 10px', background: 'rgba(80,20,0,0.5)' },
  tP: { fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase', color: '#D4AF37', border: '0.5px solid rgba(212,175,55,0.4)', padding: '4px 10px' },
}
