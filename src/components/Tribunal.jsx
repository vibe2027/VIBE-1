import { useState } from 'react'

/**
 * Tribunal communautaire VIBE
 * - Panel de jurés (démo locale)
 * - Non coupable → profil avec ailes
 * - Coupable → fond braise + option pardon 25 $
 * - 3 coupables = ban (affiché)
 */

const DEMO_CASES = [
  {
    id: 'c1',
    accused: 'Membre · MTL',
    accusedId: 'demo-mtl',
    charge: 'Harcèlement dans le Salon Flottant',
    summary: 'Messages répétés après demande d’arrêt. Preuves soumises au panel.',
    status: 'open', // open | closed
    votesGuilty: 0,
    votesInnocent: 0,
    verdict: null, // guilty | innocent | pardoned
  },
  {
    id: 'c2',
    accused: 'Membre · QC',
    accusedId: 'demo-qc',
    charge: 'Usurpation d’identité',
    summary: 'Profil utilisant le nom d’un autre membre sans consentement.',
    status: 'closed',
    votesGuilty: 8,
    votesInnocent: 4,
    verdict: 'guilty',
  },
  {
    id: 'c3',
    accused: 'Membre · OTT',
    accusedId: 'demo-ott',
    charge: 'Signalement abusif',
    summary: 'Plusieurs signalements infondés visant le même membre.',
    status: 'closed',
    votesGuilty: 3,
    votesInnocent: 9,
    verdict: 'innocent',
  },
]

export default function Tribunal({ onStatus }) {
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
        // Démo : fermeture après 5 votes
        if (total >= 5) {
          next.status = 'closed'
          next.verdict = next.votesGuilty > next.votesInnocent ? 'guilty' : 'innocent'
          onStatus?.(
            next.verdict === 'guilty'
              ? 'Verdict : COUPABLE — fond braise. Pardon possible pour 25 $.'
              : 'Verdict : NON COUPABLE — le membre apparaît avec des ailes.'
          )
        }
        return next
      })
    )
  }

  const pardon = (caseId) => {
    setCases((prev) =>
      prev.map((c) =>
        c.id === caseId && c.verdict === 'guilty'
          ? { ...c, verdict: 'pardoned' }
          : c
      )
    )
    onStatus?.('Pardon accordé (25 $) — statut blanchi. Brancher Stripe pour encaisser.')
  }

  const submitReport = (e) => {
    e.preventDefault()
    if (!report.target || !report.reason) {
      onStatus?.('Indique la cible et le motif.')
      return
    }
    const id = 'c' + Date.now()
    setCases((prev) => [
      {
        id,
        accused: report.target,
        accusedId: 'new-' + id,
        charge: report.reason.slice(0, 80),
        summary: report.reason,
        status: 'open',
        votesGuilty: 0,
        votesInnocent: 0,
        verdict: null,
      },
      ...prev,
    ])
    setReport({ target: '', reason: '' })
    onStatus?.('Signalement soumis au Tribunal. Panel de 12 jurés (démo).')
  }

  return (
    <section style={{ padding: '24px 16px', maxWidth: 720, margin: '0 auto' }}>
      <p style={label}>// Tribunal communautaire</p>
      <h2 style={title}>Justice par la communauté</h2>
      <p style={sub}>
        Panel tournant · vote secret · non coupable = ailes · coupable = braise ·
        pardon 25 $ · 3 verdicts coupables = exclusion.
      </p>

      {/* Légende visuelle */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className="verdict-badge wings">
          <span className="wings-icon">🪽</span> Non coupable — ailes
        </div>
        <div className="verdict-badge braise">
          Coupable — braise
        </div>
        <div className="verdict-badge pardon">
          Pardon — 25 $
        </div>
      </div>

      {/* Liste des dossiers */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cases.map((c) => (
          <article
            key={c.id}
            className={
              'tribunal-card' +
              (c.verdict === 'guilty' ? ' status-braise' : '') +
              (c.verdict === 'innocent' ? ' status-wings' : '') +
              (c.verdict === 'pardoned' ? ' status-pardon' : '')
            }
            onClick={() => setSelected(selected === c.id ? null : c.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#D4AF37', letterSpacing: 1 }}>
                  {c.verdict === 'innocent' && <span className="wings-icon">🪽 </span>}
                  {c.accused}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>
                  {c.charge}
                </div>
              </div>
              <VerdictTag verdict={c.verdict} status={c.status} />
            </div>

            {selected === c.id && (
              <div style={{ marginTop: 16, borderTop: '0.5px solid rgba(212,175,55,0.15)', paddingTop: 14 }}>
                <p style={{ fontSize: '0.68rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.4)' }}>
                  {c.summary}
                </p>
                <p style={{ fontSize: '0.55rem', marginTop: 10, color: 'rgba(212,175,55,0.4)' }}>
                  Votes — Coupable {c.votesGuilty} · Non coupable {c.votesInnocent}
                </p>

                {c.status === 'open' && (
                  <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                    <button type="button" style={btnVote} onClick={(e) => { e.stopPropagation(); vote(c.id, 'guilty') }}>
                      Coupable
                    </button>
                    <button type="button" style={btnVoteInnocent} onClick={(e) => { e.stopPropagation(); vote(c.id, 'innocent') }}>
                      Non coupable
                    </button>
                  </div>
                )}

                {c.verdict === 'guilty' && (
                  <button
                    type="button"
                    style={btnPardon}
                    onClick={(e) => { e.stopPropagation(); pardon(c.id) }}
                  >
                    Demander le pardon — 25 $ CAD
                  </button>
                )}

                {c.verdict === 'innocent' && (
                  <p style={{ marginTop: 12, fontSize: '0.6rem', color: 'rgba(180,220,255,0.7)' }}>
                    🪽 Ce membre apparaît avec des ailes — blanchi par la communauté.
                  </p>
                )}

                {c.verdict === 'guilty' && (
                  <p style={{ marginTop: 12, fontSize: '0.6rem', color: 'rgba(255,120,60,0.75)' }}>
                    Fond braise actif. Lecture seule 7 jours, ou pardon 25 $.
                  </p>
                )}

                {c.verdict === 'pardoned' && (
                  <p style={{ marginTop: 12, fontSize: '0.6rem', color: 'rgba(212,175,55,0.7)' }}>
                    Pardon accepté. Statut restauré (paiement 25 $ à brancher Stripe).
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Nouveau signalement */}
      <form onSubmit={submitReport} style={{ marginTop: 40 }}>
        <p style={{ ...label, marginBottom: 16 }}>// Soumettre un signalement anonyme</p>
        <input
          placeholder="Pseudonyme ou identifiant signalé"
          value={report.target}
          onChange={(e) => setReport({ ...report, target: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Motif et faits (anonyme)"
          value={report.reason}
          onChange={(e) => setReport({ ...report, reason: e.target.value })}
          rows={3}
          style={{ ...inputStyle, marginTop: 10, resize: 'vertical' }}
        />
        <button type="submit" style={{ ...btnPrimary, width: '100%', marginTop: 14 }}>
          Envoyer au Tribunal
        </button>
      </form>
    </section>
  )
}

function VerdictTag({ verdict, status }) {
  if (status === 'open') {
    return <span style={tagOpen}>En audience</span>
  }
  if (verdict === 'innocent') {
    return <span style={tagWings}>🪽 Non coupable</span>
  }
  if (verdict === 'guilty') {
    return <span style={tagBraise}>Braise</span>
  }
  if (verdict === 'pardoned') {
    return <span style={tagPardon}>Pardonné</span>
  }
  return <span style={tagOpen}>Clos</span>
}

const label = {
  fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', marginBottom: 8,
}
const title = {
  fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.6rem', marginBottom: 8,
}
const sub = {
  fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: 24,
}
const btnPrimary = {
  background: 'transparent', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.6)',
  padding: '14px 20px', fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase',
  cursor: 'pointer', fontFamily: 'inherit',
}
const btnVote = {
  ...btnPrimary, borderColor: 'rgba(255,100,50,0.5)', color: 'rgba(255,140,80,0.9)', flex: 1,
}
const btnVoteInnocent = {
  ...btnPrimary, borderColor: 'rgba(150,200,255,0.45)', color: 'rgba(180,220,255,0.9)', flex: 1,
}
const btnPardon = {
  ...btnPrimary, width: '100%', marginTop: 12, borderColor: 'rgba(212,175,55,0.5)',
}
const inputStyle = {
  width: '100%', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(212,175,55,0.2)',
  color: 'rgba(255,255,255,0.7)', padding: '12px 14px', fontSize: '0.75rem',
  fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
}
const tagOpen = {
  fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase',
  color: 'rgba(212,175,55,0.6)', border: '0.5px solid rgba(212,175,55,0.3)', padding: '4px 10px',
}
const tagWings = {
  fontSize: '0.5rem', letterSpacing: 1, color: 'rgba(180,220,255,0.95)',
  border: '0.5px solid rgba(150,200,255,0.4)', padding: '4px 10px',
  background: 'rgba(100,160,255,0.08)',
}
const tagBraise = {
  fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase',
  color: 'rgba(255,140,60,0.95)', border: '0.5px solid rgba(255,100,40,0.45)', padding: '4px 10px',
  background: 'rgba(80,20,0,0.5)',
}
const tagPardon = {
  fontSize: '0.5rem', letterSpacing: 2, textTransform: 'uppercase',
  color: '#D4AF37', border: '0.5px solid rgba(212,175,55,0.4)', padding: '4px 10px',
}
