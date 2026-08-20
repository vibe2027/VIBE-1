import { useMemo } from 'react'
import GhostProfile from './GhostProfile'

const DEMO = [
  { id: 'p1', name: 'Alex', city: 'Québec', intent: 'Jaser librement', ghost: true },
  { id: 'p2', name: 'Jordan', city: 'Montréal', intent: 'Musique ce soir', ghost: false },
  { id: 'p3', name: 'Sam', city: 'Ottawa', intent: 'Nouveau en ville', ghost: true },
  { id: 'p4', name: 'Riley', city: 'Toronto', intent: 'Café demain', ghost: true },
]

export default function SalonFlottant({
  myId = 'me',
  revealed = {},
  onClickProfile,
  onRevealSelf,
}) {
  const cards = useMemo(() => DEMO, [])

  return (
    <section style={{ padding: '24px 16px', maxWidth: 900, margin: '0 auto' }}>
      <p style={{ fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>
        // Salon Flottant
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.6rem', marginBottom: 8 }}>
        Profils qui flottent
      </h2>
      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginBottom: 28, lineHeight: 1.8 }}>
        Approche-toi. Clique. Si vous cliquez l’un sur l’autre en même temps — flash partout.
        Les autres ne sauront pas où le match a eu lieu.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
        {cards.map((p) => (
          <GhostProfile
            key={p.id}
            profile={p}
            isOwn={false}
            revealedToMe={!p.ghost || revealed[p.id]}
            onClickProfile={onClickProfile}
          />
        ))}
        <GhostProfile
          profile={{ id: myId, name: 'Toi', city: 'Ici', intent: 'Mode Fantôme actif', ghost: true }}
          isOwn
          revealedToMe={revealed[myId]}
          onReveal={() => onRevealSelf?.(myId)}
          onClickProfile={() => {}}
        />
      </div>
    </section>
  )
}
