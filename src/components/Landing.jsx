import { PRICING, EXTRAS, openCheckout } from '../lib/pricing'

/** Design marketing d’origine VIBE — Playfair + Space Mono + or #D4AF37 */
export default function Landing({ onEnter, onLogin }) {
  const pioneer = PRICING.pioneer
  const regular = [PRICING.week, PRICING.month, PRICING.year]

  return (
    <div className="landing">
      <canvas className="universe-canvas" ref={(el) => el && initStars(el)} />

      <nav className="hud">
        <div className="hud-brand">VIBE</div>
        <div className="hud-mid">
          <a href="#accueil">Accueil</a>
          <a href="#pionnier">Pionnier</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#extras">Extras</a>
          <a href="#ange">Mode Ange</a>
        </div>
        <div className="hud-right">
          <button type="button" className="btn-ghost-sm" onClick={onLogin}>Se connecter</button>
          <div className="pulse-dot" />
        </div>
      </nav>

      <section id="accueil" className="hero">
        <div className="dna-container">
          <div className="orbit orbit1" />
          <div className="orbit orbit2" />
          <div className="vibe-logo"><span className="vibe-logo-text">V</span></div>
        </div>
        <h1 className="vibe-title">
          <span className="vt-v">V</span><span className="vt-ibe">IBE</span>
        </h1>
        <p className="hero-sub">Réseau LGBTQ+ Canadien</p>
        <p className="hero-origin">Né à Québec · 2026</p>
        <div className="pride-spectrum">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className={`ps ps${i}`} />
          ))}
        </div>
        <p className="hero-lead">
          Salons immersifs. Mode Fantôme. Matchs secrets.
          Tribunal communautaire. Sécurité Mode Ange.
        </p>
        <div className="hero-btns">
          <button type="button" className="btn-primary" onClick={onEnter}><span>Entrer</span></button>
          <a href="#pionnier" className="btn-ghost">Devenir Pionnier</a>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat-cell"><span className="stat-n">500</span><span className="stat-l">Places Pionnier</span></div>
        <div className="stat-cell"><span className="stat-n">99$</span><span className="stat-l">1 versement</span></div>
        <div className="stat-cell"><span className="stat-n">5</span><span className="stat-l">Villes Actives</span></div>
        <div className="stat-cell"><span className="stat-n">0</span><span className="stat-l">Données vendues</span></div>
      </div>

      <div className="ticker">
        <span className="ticker-inner">
          VIBE · LGBTQ+ · QUÉBEC · MONTRÉAL · TORONTO · VANCOUVER · OTTAWA · CALGARY · MODE ANGE · SALON FLOTTANT · TRIBUNAL · 500 PIONNIERS · 99$ UNIQUE ·&nbsp;
          VIBE · LGBTQ+ · QUÉBEC · MONTRÉAL · TORONTO · VANCOUVER · OTTAWA · CALGARY · MODE ANGE · SALON FLOTTANT · TRIBUNAL · 500 PIONNIERS · 99$ UNIQUE ·&nbsp;
        </span>
      </div>

      <section id="pionnier" className="section">
        <p className="section-label">// Édition limitée</p>
        <h2 className="form-title" style={{ textAlign: 'center', marginBottom: 8 }}>Pass Pionnier</h2>
        <p className="form-sub" style={{ textAlign: 'center', marginBottom: 28 }}>
          500 billets · 99 $ · un seul versement · pas de mois ni d’abonnement
        </p>
        <div className="founder-block">
          <div className="price-name">Accès 12 mois</div>
          <div className="price-amount" style={{ fontSize: '2.8rem' }}>
            99 $ <span>CAD · 1 versement</span>
          </div>
          <div className="price-desc" style={{ maxWidth: 400, margin: '12px auto 20px' }}>
            <strong style={{ color: 'rgba(212,175,55,0.85)' }}>Un seul paiement.</strong>{' '}
            Pas de mensualité, pas de forfait « par mois / an » sur ce pass.
            Tu paies 99 $ une fois → actif 1 an. Après 500 places : ce prix ne revient jamais.
          </div>
          <div className="progress-wrap">
            <div className="progress-bar"><div className="progress-fill" /></div>
            <div className="progress-label"><span>~4 / 500</span><span>~496 restantes</span></div>
          </div>
          <button type="button" className="btn-primary full" onClick={() => openCheckout(pioneer.url)}>
            <span>Réserver — 99 $ (1 versement)</span>
          </button>
        </div>
      </section>

      <section id="tarifs" className="section" style={{ paddingTop: 0 }}>
        <p className="section-label">// Après les 500</p>
        <h2 className="form-title" style={{ textAlign: 'center', marginBottom: 8 }}>Tarifs réguliers</h2>
        <p className="form-sub" style={{ textAlign: 'center', marginBottom: 28 }}>
          Stripe · CAD · Conforme Loi 25
        </p>
        <div className="price-grid">
          {regular.map((p) => (
            <div key={p.id} className="price-card">
              <div className="price-name">{p.name}</div>
              <div className="price-amount">{p.price} $<span>{p.unit}</span></div>
              <div className="price-desc">{p.desc}</div>
              <button type="button" className="btn-ghost full" onClick={() => openCheckout(p.url)}>
                Choisir
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="extras" className="section" style={{ paddingTop: 0 }}>
        <p className="section-label">// Extras · Achat unique</p>
        <div className="extras-grid">
          {EXTRAS.map((x) => (
            <div key={x.id} className="extra-card">
              <div className="price-name">{x.name}</div>
              <div className="price-amount small">{x.price} $</div>
              <div className="price-desc">{x.desc}</div>
              <button type="button" className="btn-ghost full" onClick={() => openCheckout(x.url)}>Acheter</button>
            </div>
          ))}
        </div>
      </section>

      <section id="ange" className="section ange-section">
        <p className="section-label">// Protection</p>
        <p className="ange-tagline">Mode Ange — Triple Tap SOS</p>
        <div className="triple-tap-box">
          <div className="ttb-head">⚠ Protocole d&apos;urgence</div>
          <div className="ttb-body">
            <strong>3 taps rapides</strong> activent le Mode Ange.<br />
            GPS + enregistrement audio envoyés à ton contact de confiance.<br />
            Silencieux. Invisible. <strong>Toujours actif.</strong>
          </div>
        </div>
        <div className="ange-grid">
          <div className="acard"><span className="acard-icon">📍</span><div className="acard-title">GPS Instantané</div><div className="acard-text">Position en temps réel.</div></div>
          <div className="acard"><span className="acard-icon">🎙</span><div className="acard-title">Audio Ambiant</div><div className="acard-text">30 secondes d&apos;enregistrement.</div></div>
          <div className="acard"><span className="acard-icon">👻</span><div className="acard-title">Mode Fantôme</div><div className="acard-text">Profil dans la fumée dense.</div></div>
          <div className="acard"><span className="acard-icon">🛡</span><div className="acard-title">Tribunal VIBE</div><div className="acard-text">Ailes / braise / pardon 25 $.</div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">VIBE 2026</div>
        <div className="footer-copy">© 2026 VIBE · Québec, Canada · Conforme Loi 25 · Stripe sécurisé</div>
      </footer>
    </div>
  )
}

function initStars(canvas) {
  if (canvas._starsInit) return
  canvas._starsInit = true
  const ctx = canvas.getContext('2d')
  let stars = []
  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      a: Math.random(),
      speed: 0.0003 + Math.random() * 0.0005,
    }))
  }
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    stars.forEach((s) => {
      s.a += s.speed
      const opacity = 0.1 + Math.abs(Math.sin(s.a)) * 0.5
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(212,175,55,${opacity})`
      ctx.fill()
    })
    requestAnimationFrame(draw)
  }
  window.addEventListener('resize', resize)
  resize()
  draw()
}
