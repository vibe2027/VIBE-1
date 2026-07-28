import { useState } from 'react'

/**
 * Mode profil « Salle des Fantômes » :
 * fumée très dense ; si la personne se dévoile, la fumée se dissipe.
 */
export default function GhostProfile({
  profile,
  isOwn = false,
  revealedToMe = false,
  onReveal,
  onClickProfile,
}) {
  const [dissipating, setDissipating] = useState(false)
  const showClear = revealedToMe || isOwn

  const handleReveal = (e) => {
    e.stopPropagation()
    if (!isOwn || showClear) return
    setDissipating(true)
    setTimeout(() => onReveal?.(profile.id), 1100)
  }

  return (
    <div
      className={`profile-card${revealedToMe ? ' matched' : ''}`}
      onClick={() => onClickProfile?.(profile.id)}
      role="button"
      tabIndex={0}
    >
      <div style={{ position: 'relative', minHeight: 120 }}>
        {!showClear && (
          <div
            className={`smoke-veil${dissipating ? ' dissipating' : ''}`}
            aria-hidden="true"
          />
        )}
        <div style={{ position: 'relative', zIndex: 1, opacity: showClear ? 1 : 0.15 }}>
          <div style={{ fontSize: '0.85rem', color: '#D4AF37', letterSpacing: 2, marginBottom: 8 }}>
            {showClear ? (profile.name || 'Anonyme') : '···'}
          </div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>
            {showClear ? (profile.city || '—') : 'Fumée dense'}
          </div>
          {showClear && profile.intent && (
            <div style={{ fontSize: '0.6rem', marginTop: 10, color: 'rgba(212,175,55,0.5)' }}>
              {profile.intent}
            </div>
          )}
        </div>
      </div>
      {isOwn && !showClear && (
        <button
          type="button"
          onClick={handleReveal}
          style={{
            marginTop: 12,
            width: '100%',
            background: 'transparent',
            border: '0.5px solid rgba(212,175,55,0.4)',
            color: '#D4AF37',
            padding: '10px',
            fontSize: '0.55rem',
            letterSpacing: 3,
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Dissiper la fumée — me dévoiler
        </button>
      )}
      {!isOwn && !showClear && (
        <p style={{ marginTop: 10, fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)', letterSpacing: 2 }}>
          Clique pour tenter un match
        </p>
      )}
    </div>
  )
}
