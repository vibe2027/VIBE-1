export default function SalonVoix() {
  return (
    <section style={{ padding: '24px 16px', maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(212,175,55,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>
        // Salon de la Voix
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#D4AF37', fontSize: '1.6rem', marginBottom: 12 }}>
        Écouter avant de voir
      </h2>
      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.9, marginBottom: 32 }}>
        Pas de photo. Pas de bio. Juste des voix. Branche Supabase + bucket « voix » pour activer l’upload et l’écoute live.
      </p>
      <div style={{
        border: '0.5px solid rgba(212,175,55,0.2)',
        padding: '48px 24px',
        background: 'rgba(212,175,55,0.02)',
      }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(212,175,55,0.6)', letterSpacing: 3 }}>— Silence —</p>
        <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', marginTop: 12 }}>Le salon attend les premières voix</p>
      </div>
    </section>
  )
}
