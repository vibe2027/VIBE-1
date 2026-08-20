/**
 * Canal privé propriétaire :
 * même si l’admin est « dénoncé » au Tribunal, ce canal reste accessible.
 */
export default function PrivateChannel({ email }) {
  return (
    <section style={{ padding: '24px 16px', maxWidth: 560, margin: '0 auto' }}>
      <p style={{ fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase' }}>
        // Canal privé
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.4rem', margin: '8px 0 16px' }}>
        Accès réservé
      </h2>
      <p style={{ fontSize: '0.7rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.4)' }}>
        Connecté en tant que <strong style={{ color: '#D4AF37' }}>{email}</strong>.
        Ce canal reste ouvert même en cas de signalement ou de verdict au Tribunal.
        Communication interne, logs sensibles et contrôles d’urgence.
      </p>
      <div style={{
        marginTop: 24, padding: 20,
        border: '0.5px solid rgba(212,175,55,0.25)',
        background: 'rgba(212,175,55,0.04)',
      }}>
        <p style={{ fontSize: '0.6rem', color: 'rgba(212,175,55,0.6)', letterSpacing: 2 }}>
          STATUT · PROTÉGÉ · NON RÉVOCABLE PAR LE TRIBUNAL
        </p>
      </div>
    </section>
  )
}
