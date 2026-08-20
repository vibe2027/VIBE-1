<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="VIBE — L'application LGBTQ+ de nouvelle génération, née à Québec. Rencontres, communauté, sécurité.">
<title>VIBE 2026 — Réseau LGBTQ+ Canadien</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Space+Mono:wght@400;700&display=swap');
  :root {
    --gold: #D4AF37;
    --gold2: rgba(212,175,55,0.15);
    --purple: #b44fff;
    --cyan: #00eeff;
    --bg: #000;
    --text: rgba(255,255,255,0.75);
    --dim: rgba(255,255,255,0.2);
    --red: #ff5050;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: 'Space Mono', monospace; overflow-x: hidden; cursor: crosshair; }

  /* HUD */
  .hud { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; justify-content:space-between; align-items:center; padding:10px 20px; background:rgba(0,0,0,0.92); border-bottom:0.5px solid rgba(212,175,55,0.2); backdrop-filter:blur(10px); }
  .hud-brand { font-size:0.75rem; letter-spacing:6px; color:var(--gold); font-weight:700; }
  .hud-mid { display:flex; gap:24px; }
  .hud-mid a { font-size:0.52rem; letter-spacing:3px; color:rgba(212,175,55,0.4); text-decoration:none; text-transform:uppercase; transition:color 0.3s; }
  .hud-mid a:hover { color:var(--gold); }
  .hud-right { display:flex; align-items:center; gap:12px; }
  .pulse-dot { width:6px; height:6px; border-radius:50%; background:var(--gold); animation:blink 1.3s ease-in-out infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.15} }
  .hud-time { font-size:0.52rem; letter-spacing:3px; color:rgba(212,175,55,0.4); }
  .btn-ghost { display:inline-block; background:transparent; color:rgba(212,175,55,0.45); border:0.5px solid rgba(212,175,55,0.2); padding:8px 18px; font-size:0.52rem; letter-spacing:3px; text-transform:uppercase; text-decoration:none; font-family:'Space Mono',monospace; cursor:pointer; transition:all 0.3s; }
  .btn-ghost:hover { color:var(--gold); border-color:rgba(212,175,55,0.5); }

  /* CANVAS */
  #universe { position:fixed; top:0; left:0; width:100%; height:100%; z-index:0; pointer-events:none; }

  /* HERO */
  #accueil { position:relative; z-index:10; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:100px 24px 60px; }
  .dna-container { position:relative; width:180px; height:180px; margin:0 auto 36px; }
  .orbit { position:absolute; border-radius:50%; border:0.5px solid; }
  .orbit1 { top:-12px; left:-12px; width:204px; height:204px; border-color:rgba(212,175,55,0.25); animation:spin 12s linear infinite; }
  .orbit2 { top:-22px; left:-22px; width:224px; height:224px; border-color:rgba(180,79,255,0.12); animation:spin 18s linear infinite reverse; }
  @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
  .vibe-title { font-family:'Playfair Display',serif; font-size:clamp(4rem,12vw,7rem); font-weight:700; line-height:1; margin-bottom:8px; position:relative; display:inline-block; }
  .vt-v { color:var(--gold); position:relative; display:inline-block; }
  .vt-v::before { content:'V'; position:absolute; left:3px; top:0; color:var(--purple); opacity:0; animation:glitch1 7s infinite; }
  .vt-v::after { content:'V'; position:absolute; left:-3px; top:0; color:var(--cyan); opacity:0; animation:glitch2 7s infinite; }
  @keyframes glitch1 { 0%,88%,100%{opacity:0} 91%{opacity:.8;transform:skewX(-8deg) translateX(4px)} 94%{opacity:0} }
  @keyframes glitch2 { 0%,91%,100%{opacity:0} 94%{opacity:.5;transform:skewX(5deg) translateX(-4px)} 97%{opacity:0} }
  .vt-ibe { color:transparent; -webkit-text-stroke:2px rgba(212,175,55,0.4); font-family:'Playfair Display',serif; }
  .hero-sub { font-size:0.65rem; letter-spacing:6px; color:rgba(212,175,55,0.45); text-transform:uppercase; margin-bottom:4px; }
  .hero-origin { font-size:0.55rem; letter-spacing:4px; color:rgba(255,255,255,0.15); text-transform:uppercase; margin-bottom:28px; }
  .pride-spectrum { display:flex; height:3px; width:240px; margin:0 auto 32px; border-radius:2px; overflow:hidden; }
  .ps { flex:1; animation:pspulse 2.5s ease-in-out infinite; }
  .ps1{background:#E40303;animation-delay:0s} .ps2{background:#FF8C00;animation-delay:.1s} .ps3{background:#FFED00;animation-delay:.2s} .ps4{background:#008026;animation-delay:.3s} .ps5{background:#004DFF;animation-delay:.4s} .ps6{background:#750787;animation-delay:.5s} .ps7{background:#FFAFC8;animation-delay:.6s} .ps8{background:#74D7EE;animation-delay:.7s}
  @keyframes pspulse { 0%,100%{opacity:.4;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(2.5)} }
  .hero-btns { display:flex; gap:14px; flex-wrap:wrap; justify-content:center; margin-bottom:48px; }
  .btn-primary { display:inline-block; background:transparent; color:var(--gold); border:1px solid rgba(212,175,55,0.6); padding:15px 40px; font-size:0.72rem; font-weight:700; letter-spacing:5px; text-transform:uppercase; text-decoration:none; font-family:'Space Mono',monospace; cursor:pointer; position:relative; overflow:hidden; transition:color 0.35s; }
  .btn-primary::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:var(--gold); z-index:0; transition:left 0.4s cubic-bezier(.4,0,.2,1); }
  .btn-primary:hover::before { left:0; }
  .btn-primary:hover { color:#000; }
  .btn-primary span { position:relative; z-index:1; }

  /* STATS */
  .stats-strip { position:relative; z-index:10; display:flex; justify-content:space-around; border-top:0.5px solid rgba(212,175,55,0.1); border-bottom:0.5px solid rgba(212,175,55,0.1); }
  .stat-cell { flex:1; padding:28px 12px; text-align:center; border-right:0.5px solid rgba(212,175,55,0.07); }
  .stat-cell:last-child { border-right:none; }
  .stat-n { display:block; font-size:1.8rem; color:var(--gold); font-weight:700; letter-spacing:2px; margin-bottom:4px; }
  .stat-l { display:block; font-size:0.5rem; letter-spacing:3px; color:rgba(255,255,255,0.2); text-transform:uppercase; }

  /* TICKER */
  .ticker { overflow:hidden; white-space:nowrap; padding:9px 0; border-bottom:0.5px solid rgba(212,175,55,0.07); background:rgba(212,175,55,0.01); position:relative; z-index:10; }
  .ticker-inner { display:inline-block; animation:tickrun 40s linear infinite; font-size:0.5rem; letter-spacing:5px; color:rgba(212,175,55,0.22); }
  @keyframes tickrun { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* SECTIONS */
  .section { position:relative; z-index:10; padding:70px 24px; }
  .section-label { font-size:0.55rem; letter-spacing:6px; color:rgba(212,175,55,0.35); text-transform:uppercase; text-align:center; margin-bottom:48px; }

  /* ANGE */
  #ange-section { background:rgba(212,175,55,0.01); border-top:0.5px solid rgba(212,175,55,0.08); border-bottom:0.5px solid rgba(212,175,55,0.08); }
  .ange-canvas-wrap { position:relative; width:180px; height:180px; margin-bottom:16px; }
  .wings-overlay { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:280px; height:180px; pointer-events:none; }
  .feather-row { display:flex; justify-content:center; align-items:flex-end; gap:3px; height:44px; margin-bottom:10px; }
  .feather { width:2px; border-radius:1px; background:var(--gold); animation:fwave 2s ease-in-out infinite; }
  @keyframes fwave { 0%,100%{transform:scaleY(0.4);opacity:.2} 50%{transform:scaleY(1);opacity:.9} }
  .ange-hero { display:flex; flex-direction:column; align-items:center; margin-bottom:40px; }
  .ange-tagline { font-size:0.58rem; letter-spacing:4px; color:rgba(212,175,55,0.45); text-transform:uppercase; text-align:center; margin-bottom:24px; }
  .triple-tap-box { border:0.5px solid rgba(255,80,80,0.25); padding:20px; background:rgba(255,80,80,0.02); margin-bottom:24px; max-width:500px; margin-left:auto; margin-right:auto; }
  .ttb-head { font-size:0.55rem; letter-spacing:4px; color:rgba(255,80,80,0.6); text-transform:uppercase; margin-bottom:10px; }
  .ttb-body { font-size:0.72rem; color:rgba(255,255,255,0.3); line-height:2; }
  .ttb-body strong { color:rgba(255,80,80,0.85); }
  .ange-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1px; background:rgba(212,175,55,0.06); margin-bottom:28px; }
  .acard { padding:28px 22px; background:#000; transition:background 0.3s; }
  .acard:hover { background:rgba(212,175,55,0.03); }
  .acard-icon { font-size:1.4rem; margin-bottom:12px; display:block; }
  .acard-title { font-size:0.72rem; color:var(--gold); letter-spacing:3px; text-transform:uppercase; margin-bottom:8px; font-weight:700; }
  .acard-text { font-size:0.68rem; color:rgba(255,255,255,0.28); line-height:1.9; }
  .sos-btn { display:block; max-width:340px; margin:0 auto; background:transparent; color:rgba(255,80,80,0.7); border:1px solid rgba(255,80,80,0.4); padding:14px 32px; font-size:0.65rem; letter-spacing:4px; text-transform:uppercase; cursor:pointer; font-family:'Space Mono',monospace; transition:all 0.3s; text-align:center; }
  .sos-btn:hover { background:rgba(255,80,80,0.08); border-color:#ff5050; color:#ff5050; }

  /* GLOBE */
  #globe-section { text-align:center; padding:0; }
  .globe-wrap { position:relative; background:#000; overflow:hidden; display:flex; align-items:center; justify-content:center; min-height:420px; border-top:0.5px solid rgba(212,175,55,0.08); border-bottom:0.5px solid rgba(212,175,55,0.08); }
  #globe-canvas { display:block; cursor:grab; touch-action:none; width:100% !important; max-width:520px; height:auto !important; }
  .globe-caption { position:absolute; bottom:0; left:0; right:0; padding:10px; font-size:0.48rem; letter-spacing:5px; color:rgba(212,175,55,0.3); text-transform:uppercase; text-align:center; background:linear-gradient(transparent,rgba(0,0,0,0.8)); }
  .city-strip { display:flex; justify-content:space-around; padding:14px 12px; border-bottom:0.5px solid rgba(212,175,55,0.07); }
  .city-item { text-align:center; }
  .city-code { display:block; font-size:0.8rem; color:var(--gold); font-weight:700; letter-spacing:2px; margin-bottom:3px; }
  .city-name { display:block; font-size:0.44rem; letter-spacing:2px; color:rgba(255,255,255,0.2); text-transform:uppercase; }
  .city-dot { width:4px; height:4px; border-radius:50%; background:var(--gold); margin:4px auto 0; animation:blink 2s ease-in-out infinite; }

  /* TRIBUNAL */
  #tribunal-section { padding:0; }
  #trib-canvas { display:block; width:100%; }
  .trib-content { padding:28px 24px; }
  .trib-lbl { font-size:0.55rem; letter-spacing:5px; color:rgba(212,175,55,0.38); text-transform:uppercase; text-align:center; margin-bottom:14px; }
  .trib-quote { font-family:'Playfair Display',serif; font-style:italic; font-size:1rem; color:rgba(255,255,255,0.18); text-align:center; line-height:1.9; margin-bottom:20px; }
  .verdict-box { border:0.5px solid rgba(220,50,50,0.25); padding:22px; background:rgba(220,50,50,0.02); margin-bottom:20px; max-width:540px; margin-left:auto; margin-right:auto; }
  .vb-num { font-size:0.52rem; color:rgba(220,50,50,.55); letter-spacing:3px; margin-bottom:8px; }
  .vb-verdict { font-family:'Playfair Display',serif; font-size:1.1rem; color:rgba(255,255,255,0.7); margin-bottom:10px; }
  .vb-sub { font-size:0.66rem; color:rgba(255,255,255,0.22); line-height:1.9; }
  .trib-cols { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1px; background:rgba(212,175,55,0.05); }
  .tcol { padding:24px 20px; background:#000; }
  .tcol-n { font-size:0.5rem; color:rgba(212,175,55,0.3); letter-spacing:4px; margin-bottom:8px; }
  .tcol-t { font-size:0.8rem; color:var(--gold); letter-spacing:2px; margin-bottom:8px; font-weight:700; }
  .tcol-txt { font-size:0.65rem; color:rgba(255,255,255,0.22); line-height:1.9; }

  /* SALON */
  #salon-section { padding:0; }
  #salon-canvas { display:block; width:100%; }
  .salon-ui { padding:24px; }
  .now-playing { display:flex; align-items:center; gap:14px; padding:14px 18px; background:rgba(212,175,55,0.03); border:0.5px solid rgba(212,175,55,0.1); margin-bottom:20px; }
  .disc { font-size:1.4rem; animation:spin 4s linear infinite; display:inline-block; }
  .np-info { flex:1; }
  .np-track { font-size:0.72rem; color:var(--gold); letter-spacing:2px; }
  .np-artist { font-size:0.54rem; color:rgba(255,255,255,0.25); letter-spacing:2px; margin-top:3px; }
  .eq-bars { display:flex; gap:3px; align-items:flex-end; height:20px; }
  .eq-bar { width:3px; background:var(--gold); border-radius:1px; animation:eqpulse 0.8s ease-in-out infinite; }
  @keyframes eqpulse { 0%,100%{height:4px;opacity:.4} 50%{height:18px;opacity:1} }

  /* PROFILS FLOTTANTS - FIXED */
  .floating-profiles { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:20px; }
  .fp-card { position:relative; background:rgba(20,10,40,0.95); border:0.5px solid rgba(212,175,55,0.15); border-radius:8px; padding:16px 12px; text-align:center; min-height:140px; overflow:hidden; }
  .fp-canvas { display:block; margin:0 auto 8px; border-radius:50%; }
  .fp-info { position:relative; z-index:2; }
  .fp-name { font-size:0.7rem; color:var(--gold); letter-spacing:2px; margin-bottom:2px; }
  .fp-age { font-size:0.52rem; color:rgba(255,255,255,0.3); letter-spacing:1px; margin-bottom:2px; }
  .fp-trait { font-size:0.48rem; color:rgba(212,175,55,0.35); letter-spacing:1px; }
  .fp-ghost { font-size:0.48rem; color:rgba(255,255,255,0.2); letter-spacing:2px; margin-top:6px; }

  /* CHAT */
  .salon-chat { border-top:0.5px solid rgba(212,175,55,0.07); padding-top:16px; }
  .sc-label { font-size:0.48rem; letter-spacing:4px; color:rgba(212,175,55,0.25); text-transform:uppercase; margin-bottom:12px; }
  .chat-msg { display:flex; gap:10px; margin-bottom:10px; font-size:0.62rem; line-height:1.7; }
  .chat-name { letter-spacing:2px; min-width:80px; }
  .gold { color:rgba(212,175,55,0.7); }
  .ghost { color:rgba(255,255,255,0.2); }
  .chat-text { color:rgba(255,255,255,0.25); }

  /* FORMULAIRES */
  .form-wrap { max-width:480px; margin:0 auto; }
  .form-title { font-family:'Playfair Display',serif; font-size:1.6rem; color:var(--gold); margin-bottom:6px; font-weight:700; }
  .form-sub { font-size:0.52rem; letter-spacing:4px; color:rgba(212,175,55,0.3); text-transform:uppercase; margin-bottom:28px; }
  .form-group { margin-bottom:18px; }
  .form-group label { display:block; font-size:0.52rem; letter-spacing:3px; color:rgba(212,175,55,0.4); text-transform:uppercase; margin-bottom:8px; }
  .form-input { width:100%; background:rgba(255,255,255,0.03); border:0.5px solid rgba(212,175,55,0.18); color:rgba(255,255,255,0.7); padding:13px 16px; font-size:0.72rem; font-family:'Space Mono',monospace; outline:none; transition:border-color 0.3s; }
  .form-input:focus { border-color:rgba(212,175,55,0.5); }
  .form-select { width:100%; background:#0a0a0a; border:0.5px solid rgba(212,175,55,0.18); color:rgba(255,255,255,0.5); padding:13px 16px; font-size:0.7rem; font-family:'Space Mono',monospace; outline:none; cursor:pointer; }
  .form-check { display:flex; align-items:flex-start; gap:10px; margin-bottom:22px; font-size:0.6rem; color:rgba(255,255,255,0.25); line-height:1.7; }
  .form-check input { margin-top:3px; cursor:pointer; accent-color:var(--gold); }
  .submit-btn { width:100%; background:transparent; color:var(--gold); border:1px solid rgba(212,175,55,0.5); padding:16px; font-size:0.72rem; font-weight:700; letter-spacing:5px; text-transform:uppercase; cursor:pointer; font-family:'Space Mono',monospace; position:relative; overflow:hidden; transition:color 0.35s; }
  .submit-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:var(--gold); z-index:0; transition:left 0.4s cubic-bezier(.4,0,.2,1); }
  .submit-btn:hover::before { left:0; }
  .submit-btn:hover { color:#000; }
  .submit-btn span { position:relative; z-index:1; }
  .submit-btn:disabled { opacity:0.5; cursor:not-allowed; }
  #signup-success { display:none; text-align:center; padding:40px 20px; }
  .success-icon { font-size:2.5rem; margin-bottom:16px; }
  .success-title { font-family:'Playfair Display',serif; font-size:1.4rem; color:var(--gold); margin-bottom:8px; }
  .success-text { font-size:0.65rem; color:rgba(255,255,255,0.3); letter-spacing:2px; line-height:2; }

  /* MODAL */
  .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:500; display:none; align-items:center; justify-content:center; padding:20px; }
  .modal-overlay.open { display:flex; }
  .modal-box { background:#050505; border:0.5px solid rgba(212,175,55,0.2); padding:40px 32px; width:100%; max-width:420px; position:relative; }
  .modal-close { position:absolute; top:16px; right:16px; background:none; border:none; color:rgba(212,175,55,0.4); font-size:1rem; cursor:pointer; font-family:'Space Mono',monospace; }
  .modal-title { font-family:'Playfair Display',serif; font-size:1.4rem; color:var(--gold); margin-bottom:6px; font-weight:700; }
  .modal-sub { font-size:0.5rem; letter-spacing:4px; color:rgba(212,175,55,0.3); text-transform:uppercase; margin-bottom:28px; }

  /* MANIFESTE */
  #manifeste { position:relative; z-index:10; padding:80px 24px; text-align:center; }
  .manifeste-text { font-family:'Playfair Display',serif; font-size:clamp(1.2rem,4vw,2rem); line-height:2.2; color:rgba(255,255,255,0.12); }
  .manifeste-text em { color:var(--gold); font-style:italic; }
  .manifeste-text strong { color:rgba(255,255,255,0.6); font-style:normal; }

  /* FOOTER */
  footer { position:relative; z-index:10; }
  .footer-cta { text-align:center; padding:60px 24px; border-top:0.5px solid rgba(212,175,55,0.08); }
  .footer-cta-title { font-size:0.55rem; letter-spacing:6px; color:rgba(212,175,55,0.35); text-transform:uppercase; margin-bottom:18px; }

  /* ADMIN PANEL */
  #admin-panel { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.98); z-index:999; overflow-y:auto; padding:20px; }
  .admin-header { display:flex; justify-content:space-between; align-items:center; padding:16px 20px; background:rgba(212,175,55,0.05); border:0.5px solid rgba(212,175,55,0.2); margin-bottom:20px; }
  .admin-title { font-size:0.75rem; letter-spacing:6px; color:var(--gold); font-weight:700; text-transform:uppercase; }
  .admin-close { background:none; border:1px solid rgba(212,175,55,0.3); color:var(--gold); padding:8px 16px; font-size:0.6rem; letter-spacing:3px; cursor:pointer; font-family:'Space Mono',monospace; }
  .admin-tabs { display:flex; gap:1px; margin-bottom:20px; background:rgba(212,175,55,0.05); }
  .admin-tab { flex:1; padding:12px 8px; background:#0a0a0a; font-size:0.5rem; letter-spacing:3px; color:rgba(212,175,55,0.4); text-transform:uppercase; cursor:pointer; border:none; font-family:'Space Mono',monospace; transition:all 0.2s; text-align:center; }
  .admin-tab.active { background:rgba(212,175,55,0.1); color:var(--gold); }
  .admin-section { display:none; }
  .admin-section.active { display:block; }
  .admin-stats { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin-bottom:20px; }
  .admin-stat { padding:20px; background:rgba(212,175,55,0.03); border:0.5px solid rgba(212,175,55,0.1); text-align:center; }
  .admin-stat-n { font-size:2rem; color:var(--gold); font-weight:700; display:block; }
  .admin-stat-l { font-size:0.48rem; letter-spacing:3px; color:rgba(212,175,55,0.3); text-transform:uppercase; margin-top:4px; display:block; }
  .admin-table { width:100%; border-collapse:collapse; font-size:0.58rem; }
  .admin-table th { padding:10px 8px; text-align:left; font-size:0.45rem; letter-spacing:3px; color:rgba(212,175,55,0.35); text-transform:uppercase; border-bottom:0.5px solid rgba(212,175,55,0.1); }
  .admin-table td { padding:10px 8px; border-bottom:0.5px solid rgba(255,255,255,0.04); color:rgba(255,255,255,0.5); vertical-align:middle; word-break:break-all; }
  .admin-table tr:hover td { background:rgba(212,175,55,0.02); }
  .admin-badge { display:inline-block; padding:2px 8px; font-size:0.42rem; letter-spacing:2px; text-transform:uppercase; border-radius:2px; }
  .badge-founder { background:rgba(212,175,55,0.15); color:var(--gold); }
  .badge-admin { background:rgba(255,80,80,0.15); color:#ff5050; }
  .badge-ghost { background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.3); }
  .badge-free { background:rgba(255,255,255,0.03); color:rgba(255,255,255,0.2); }
  .admin-action { background:none; border:0.5px solid rgba(212,175,55,0.2); color:rgba(212,175,55,0.5); padding:4px 10px; font-size:0.42rem; letter-spacing:2px; cursor:pointer; font-family:'Space Mono',monospace; transition:all 0.2s; margin:2px; }
  .admin-action:hover { border-color:var(--gold); color:var(--gold); }
  .admin-action.danger { border-color:rgba(255,80,80,0.3); color:rgba(255,80,80,0.5); }
  .admin-action.danger:hover { border-color:#ff5050; color:#ff5050; }
  .admin-search { width:100%; background:rgba(255,255,255,0.03); border:0.5px solid rgba(212,175,55,0.18); color:rgba(255,255,255,0.7); padding:10px 14px; font-size:0.65rem; font-family:'Space Mono',monospace; outline:none; margin-bottom:16px; }
  .report-card { padding:16px 20px; background:rgba(255,80,80,0.02); border:0.5px solid rgba(255,80,80,0.15); margin-bottom:12px; }
  .report-reason { font-size:0.65rem; color:rgba(255,80,80,0.7); margin-bottom:6px; }
  .report-meta { font-size:0.5rem; color:rgba(255,255,255,0.2); letter-spacing:2px; }
  .admin-msg { padding:16px; background:rgba(212,175,55,0.05); border:0.5px solid rgba(212,175,55,0.1); font-size:0.62rem; color:rgba(212,175,55,0.6); letter-spacing:2px; text-align:center; margin-bottom:16px; }

  @media (max-width:600px) {
    .hud-mid { display:none; }
    .floating-profiles { grid-template-columns:repeat(3,1fr); gap:6px; }
    .modal-box { margin:16px; padding:28px 20px; }
    .vibe-title { font-size:3.8rem; }
    .admin-stats { grid-template-columns:1fr 1fr; }
  }
</style>
</head>
<body>

<canvas id="universe"></canvas>

<!-- HUD -->
<div class="hud">
  <div class="hud-brand">✦ VIBE</div>
  <nav class="hud-mid">
    <a href="#accueil">Accueil</a>
    <a href="#ange-section">Ange gardien</a>
    <a href="#globe-section">Globe</a>
    <a href="#tribunal-section">Tribunal</a>
    <a href="#salon-section">Salon</a>
    <a href="#inscription">Rejoindre</a>
  </nav>
  <div class="hud-right">
    <div class="pulse-dot"></div>
    <span class="hud-time" id="hud-time">00:00</span>
    <button class="btn-ghost" onclick="openLogin()">Connexion</button>
  </div>
</div>

<!-- HERO -->
<section id="accueil">
  <div class="dna-container">
    <div class="orbit orbit1"></div>
    <div class="orbit orbit2"></div>
    <canvas id="dna-canvas" width="180" height="180"></canvas>
  </div>
  <div class="vibe-title"><span class="vt-v">V</span><span class="vt-ibe">IBE</span></div>
  <p class="hero-sub" style="margin-top:8px">Réseau LGBTQ+ de nouvelle génération</p>
  <p class="hero-origin">Né à Québec · Canada · 2026</p>
  <div class="pride-spectrum">
    <span class="ps ps1"></span><span class="ps ps2"></span><span class="ps ps3"></span>
    <span class="ps ps4"></span><span class="ps ps5"></span><span class="ps ps6"></span>
    <span class="ps ps7"></span><span class="ps ps8"></span>
  </div>
  <div class="hero-btns">
    <a class="btn-primary" href="https://buy.stripe.com/28E3cx85P6UI9YM6xm3wQ01" target="_blank"><span>Devenir Fondateur·trice — 99$</span></a>
    <button class="btn-ghost" onclick="openLogin()">Se connecter</button>
  </div>
</section>

<!-- STATS -->
<div class="stats-strip" style="position:relative;z-index:10;">
  <div class="stat-cell"><span class="stat-n" id="stat-members">0</span><span class="stat-l">Membres</span></div>
  <div class="stat-cell"><span class="stat-n">500</span><span class="stat-l">Places fondateur</span></div>
  <div class="stat-cell"><span class="stat-n">12</span><span class="stat-l">Villes</span></div>
  <div class="stat-cell"><span class="stat-n">0</span><span class="stat-l">Données vendues</span></div>
</div>

<!-- TICKER -->
<div class="ticker">
  <span class="ticker-inner">VIBE 2026 :: NÉ À QUÉBEC :: ANGE GARDIEN ACTIF :: TRIPLE-TAP GPS :: GLOBE TEMPS RÉEL :: TRIBUNAL COMMUNAUTAIRE :: SALON FLOTTANT :: MODE FANTÔME :: LGBTQ+ CANADA :: DONNÉES SOUVERAINES :: FIERTÉ ::&nbsp;&nbsp;&nbsp;&nbsp;VIBE 2026 :: NÉ À QUÉBEC :: ANGE GARDIEN ACTIF :: TRIPLE-TAP GPS :: GLOBE TEMPS RÉEL :: TRIBUNAL COMMUNAUTAIRE :: SALON FLOTTANT :: MODE FANTÔME :: LGBTQ+ CANADA :: DONNÉES SOUVERAINES :: FIERTÉ ::</span>
</div>

<!-- ANGE GARDIEN -->
<section id="ange-section" class="section">
  <div class="section-label">// Module ange gardien — Protection active //</div>
  <div class="ange-hero">
    <div class="ange-canvas-wrap">
      <canvas id="ange-canvas" width="180" height="180"></canvas>
      <svg class="wings-overlay" viewBox="0 0 280 180" fill="none">
        <path d="M140 90 Q90 40 20 60 Q55 82 65 115 Q100 97 140 90Z" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.22)" stroke-width="0.5"/>
        <path d="M140 90 Q190 40 260 60 Q225 82 215 115 Q180 97 140 90Z" fill="rgba(212,175,55,0.07)" stroke="rgba(212,175,55,0.22)" stroke-width="0.5"/>
      </svg>
    </div>
    <div class="feather-row">
      <div class="feather" style="height:10px;animation-delay:0s"></div>
      <div class="feather" style="height:16px;animation-delay:.08s"></div>
      <div class="feather" style="height:24px;animation-delay:.16s;background:#b44fff"></div>
      <div class="feather" style="height:34px;animation-delay:.24s"></div>
      <div class="feather" style="height:42px;animation-delay:.32s;background:#00eeff"></div>
      <div class="feather" style="height:34px;animation-delay:.4s"></div>
      <div class="feather" style="height:24px;animation-delay:.48s;background:#b44fff"></div>
      <div class="feather" style="height:16px;animation-delay:.56s"></div>
      <div class="feather" style="height:10px;animation-delay:.64s"></div>
    </div>
    <div class="ange-tagline">Gardien assigné · Surveillance continue · QC-CA</div>
  </div>
  <div class="triple-tap-box">
    <div class="ttb-head">// Triple-tap d'urgence //</div>
    <p class="ttb-body"><strong>3 taps rapides</strong> sur l'écran envoient instantanément ta position GPS + 30 secondes d'audio à ton contact de confiance. Silencieux. Invisible. Instantané.</p>
  </div>
  <div class="ange-grid">
    <div class="acard"><span class="acard-icon">🛡</span><div class="acard-title">Vérification</div><p class="acard-text">Faux profils détectés et éliminés en temps réel par IA.</p></div>
    <div class="acard"><span class="acard-icon">☽</span><div class="acard-title">Gardien 24/7</div><p class="acard-text">Surveille tes interactions. Alerte discrète dès qu'un comportement suspect est détecté.</p></div>
    <div class="acard"><span class="acard-icon">⚡</span><div class="acard-title">Alerte 60 sec</div><p class="acard-text">Signale un inconfort. L'équipe VIBE intervient en moins de 60 secondes.</p></div>
    <div class="acard"><span class="acard-icon">◎</span><div class="acard-title">Code sécurité</div><p class="acard-text">Code secret envoyé toutes les 30 minutes lors d'un rendez-vous en personne.</p></div>
  </div>
  <button class="sos-btn" id="sos-btn" onclick="activateSOS()">SOS — Activer l'ange gardien</button>
</section>

<!-- GLOBE -->
<div id="globe-section">
  <div class="globe-wrap">
    <canvas id="globe-canvas" width="420" height="420"></canvas>
    <div class="globe-caption">Glisse pour faire tourner le globe · Membres en temps réel</div>
  </div>
  <div class="city-strip">
    <div class="city-item"><span class="city-code">QC</span><span class="city-name">Québec</span><div class="city-dot"></div></div>
    <div class="city-item"><span class="city-code">MTL</span><span class="city-name">Montréal</span><div class="city-dot" style="animation-delay:.4s"></div></div>
    <div class="city-item"><span class="city-code">YYZ</span><span class="city-name">Toronto</span><div class="city-dot" style="animation-delay:.8s"></div></div>
    <div class="city-item"><span class="city-code">YVR</span><span class="city-name">Vancouver</span><div class="city-dot" style="animation-delay:1.2s"></div></div>
    <div class="city-item"><span class="city-code">YOW</span><span class="city-name">Ottawa</span><div class="city-dot" style="animation-delay:1.6s"></div></div>
  </div>
</div>

<!-- TRIBUNAL -->
<div id="tribunal-section">
  <canvas id="trib-canvas" height="320"></canvas>
  <div class="trib-content">
    <div class="trib-lbl">// Salle du tribunal — Justice communautaire //</div>
    <div class="trib-quote">"Ici, chaque voix compte.<br>La communauté juge, protège et décide."</div>
    <div class="verdict-box">
      <div class="vb-num">01 · TRIBUNAL · VERDICT</div>
      <div class="vb-verdict">Coupable ? 7 jours en mode lecture seule, ou 20 $ pour le pardon.</div>
      <p class="vb-sub">Si le tribunal te juge coupable, ton accès devient passif : tu vois mais tu ne peux rien écrire pendant 7 jours.</p>
    </div>
    <div class="trib-cols">
      <div class="tcol"><div class="tcol-n">// 01</div><div class="tcol-t">Signalement</div><p class="tcol-txt">Soumets anonymement. Le jury examine en 24h.</p></div>
      <div class="tcol"><div class="tcol-n">// 02</div><div class="tcol-t">Délibération</div><p class="tcol-txt">12 membres tirés au sort. Identités protégées.</p></div>
      <div class="tcol"><div class="tcol-n">// 03</div><div class="tcol-t">Verdict</div><p class="tcol-txt">Avertissement, suspension ou bannissement définitif.</p></div>
    </div>
  </div>
</div>

<!-- SALON FLOTTANT -->
<div id="salon-section">
  <canvas id="salon-canvas" height="340"></canvas>
  <div class="salon-ui">
    <div class="now-playing">
      <div class="disc">♪</div>
      <div class="np-info">
        <div class="np-track" id="np-track">Nuit de Québec</div>
        <div class="np-artist" id="np-artist">VIBE Ambient · Salon Flottant</div>
      </div>
      <div class="eq-bars">
        <div class="eq-bar" style="animation-delay:0s"></div>
        <div class="eq-bar" style="animation-delay:.12s"></div>
        <div class="eq-bar" style="animation-delay:.24s"></div>
        <div class="eq-bar" style="animation-delay:.36s"></div>
        <div class="eq-bar" style="animation-delay:.48s"></div>
      </div>
    </div>
    <div class="floating-profiles">
      <div class="fp-card">
        <canvas class="fp-canvas" id="fp1" width="58" height="58"></canvas>
        <div class="fp-info">
          <div class="fp-name">Alexandre</div>
          <div class="fp-age">28 · Québec</div>
          <div class="fp-trait">Artiste · Libre</div>
        </div>
        <div class="fp-ghost">◉ Fantôme</div>
      </div>
      <div class="fp-card">
        <canvas class="fp-canvas" id="fp2" width="58" height="58"></canvas>
        <div class="fp-info">
          <div class="fp-name">Maxime</div>
          <div class="fp-age">32 · Montréal</div>
          <div class="fp-trait">Musicien · Rêveur</div>
        </div>
        <div class="fp-ghost">◉ Fantôme</div>
      </div>
      <div class="fp-card">
        <canvas class="fp-canvas" id="fp3" width="58" height="58"></canvas>
        <div class="fp-info">
          <div class="fp-name">Jordan</div>
          <div class="fp-age">25 · Gatineau</div>
          <div class="fp-trait">Photo · Voyageur</div>
        </div>
        <div class="fp-ghost">◉ Fantôme</div>
      </div>
    </div>
    <div class="salon-chat">
      <div class="sc-label">// Voix du salon flottant //</div>
      <div class="chat-msg"><span class="chat-name gold">Alex·QC</span><span class="chat-text">Ce salon me fait sentir libre ✦</span></div>
      <div class="chat-msg"><span class="chat-name ghost">◉ Fantôme</span><span class="chat-text">Je suis là mais vous ne me voyez pas...</span></div>
      <div class="chat-msg"><span class="chat-name gold">Sasha·MTL</span><span class="chat-text">La musique ce soir est parfaite</span></div>
      <div class="chat-msg" id="live-chat" style="opacity:0;transition:opacity .5s"></div>
    </div>
  </div>
</div>

<!-- MANIFESTE -->
<section id="manifeste">
  <p class="manifeste-text">
    Le monde surveille.<br>
    <strong>VIBE</strong> <em>protège.</em><br>
    L'amour n'a pas de frontières —<br>
    mais il a une <em>origine.</em><br>
    Québec. Canada.<br>
    <em>Fierté.</em>
  </p>
</section>

<!-- INSCRIPTION -->
<section id="inscription" class="section">
  <div class="section-label">// Rejoindre le réseau //</div>
  <div class="form-wrap">
    <div class="form-title">Créer mon profil</div>
    <div class="form-sub">Gratuit · Sécurisé · Québec</div>
    <form id="signup-form" onsubmit="handleSignup(event)">
      <div id="signup-error" style="display:none;color:#ff5050;font-size:0.65rem;letter-spacing:2px;margin-bottom:14px;padding:10px;border:0.5px solid rgba(255,80,80,0.3)"></div>
      <div class="form-group">
        <label>Prénom</label>
        <input class="form-input" type="text" id="prenom" placeholder="Ton prénom" required>
      </div>
      <div class="form-group">
        <label>Courriel</label>
        <input class="form-input" type="email" id="email" placeholder="ton@courriel.ca" required>
      </div>
      <div class="form-group">
        <label>Mot de passe</label>
        <input class="form-input" type="password" id="mdp" placeholder="Minimum 8 caractères" minlength="8" required>
      </div>
      <div class="form-group">
        <label>Ta ville</label>
        <select class="form-select" id="ville" required>
          <option value="">Choisir une ville...</option>
          <option value="Quebec">Québec</option>
          <option value="Montreal">Montréal</option>
          <option value="Toronto">Toronto</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Ottawa">Ottawa</option>
        </select>
      </div>
      <div class="form-check">
        <input type="checkbox" id="cgu-check" required>
        <label for="cgu-check">J'accepte les <a href="#" style="color:rgba(212,175,55,0.5)">conditions d'utilisation</a> et la politique de confidentialité de VIBE.</label>
      </div>
      <button class="submit-btn" type="submit"><span>Créer mon profil ✦</span></button>
    </form>
    <div id="signup-success" style="display:none;text-align:center;padding:40px 20px;">
      <div style="font-size:2.5rem;margin-bottom:16px">✦</div>
      <div style="font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--gold);margin-bottom:8px;">Bienvenue dans VIBE</div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.3);letter-spacing:2px;line-height:2;">Profil créé avec succès.<br>Redirection vers le paiement fondateur...</div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-cta">
    <div class="footer-cta-title">// Rejoindre le mouvement //</div>
    <a class="btn-primary" href="https://buy.stripe.com/28E3cx85P6UI9YM6xm3wQ01" target="_blank" style="display:inline-block;margin-bottom:16px"><span>Fondateur·trice — 99$ CAD ✦</span></a>
    <br>
    <span style="font-size:0.5rem;letter-spacing:3px;color:rgba(212,175,55,0.25)">500 PLACES · OFFRE LANCEMENT · 1 AN COMPLET</span>
    <div style="margin-top:24px;font-size:0.52rem;color:rgba(255,255,255,0.15);letter-spacing:2px">vibeqbc2026@hotmail.com · Québec, QC · 2026</div>
    <div style="margin-top:8px;font-size:0.48rem;color:rgba(255,255,255,0.1);letter-spacing:2px">© 2026 VIBE Canada · Données hébergées au Canada 🇨🇦</div>
  </div>
</footer>

<!-- MODAL CONNEXION -->
<div class="modal-overlay" id="login-modal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeLogin()">✕</button>
    <div class="modal-title">Connexion</div>
    <div class="modal-sub">// Accès au réseau VIBE //</div>
    <div id="login-error" style="display:none;color:#ff5050;font-size:0.65rem;letter-spacing:2px;margin-bottom:14px;padding:10px;border:0.5px solid rgba(255,80,80,0.3)"></div>
    <form id="login-form" onsubmit="handleLogin(event)">
      <div class="form-group">
        <label>Courriel</label>
        <input class="form-input" type="email" id="login-email" placeholder="ton@courriel.ca" required>
      </div>
      <div class="form-group">
        <label>Mot de passe</label>
        <input class="form-input" type="password" id="login-mdp" placeholder="••••••••" required>
      </div>
      <button class="submit-btn" type="submit"><span>Entrer dans VIBE ✦</span></button>
    </form>
    <div style="margin-top:16px;text-align:center;font-size:.58rem;color:rgba(255,255,255,.2);letter-spacing:2px">
      Pas encore membre ? <a href="#inscription" onclick="closeLogin()" style="color:rgba(212,175,55,.6);text-decoration:none">S'inscrire</a>
    </div>
  </div>
</div>

<!-- PANNEAU ADMIN -->
<div id="admin-panel">
  <div class="admin-header">
    <div>
      <div class="admin-title">✦ VIBE — Panneau Admin</div>
      <div style="font-size:0.45rem;letter-spacing:3px;color:rgba(212,175,55,0.3);margin-top:4px" id="admin-user-info">Fondateur · Accès total</div>
    </div>
    <button class="admin-close" onclick="closeAdmin()">✕ FERMER</button>
  </div>

  <div class="admin-tabs">
    <button class="admin-tab active" onclick="showAdminTab('dashboard')">Dashboard</button>
    <button class="admin-tab" onclick="showAdminTab('membres')">Membres</button>
    <button class="admin-tab" onclick="showAdminTab('fantomes')">Fantômes</button>
    <button class="admin-tab" onclick="showAdminTab('signalements')">Signalements</button>
  </div>

  <!-- DASHBOARD -->
  <div id="tab-dashboard" class="admin-section active">
    <div class="admin-stats">
      <div class="admin-stat"><span class="admin-stat-n" id="adm-total">—</span><span class="admin-stat-l">Total membres</span></div>
      <div class="admin-stat"><span class="admin-stat-n" id="adm-online">—</span><span class="admin-stat-l">En ligne</span></div>
      <div class="admin-stat"><span class="admin-stat-n" id="adm-ghost">—</span><span class="admin-stat-l">Mode Fantôme</span></div>
      <div class="admin-stat"><span class="admin-stat-n" id="adm-reports">—</span><span class="admin-stat-l">Signalements</span></div>
    </div>
    <div class="admin-msg">✦ Fondateur : vibeqbc2026@hotmail.com — Accès total · Immunité totale · Ne peut pas être signalé</div>
    <div style="padding:16px 20px;background:rgba(212,175,55,0.02);border:0.5px solid rgba(212,175,55,0.08);">
      <div style="font-size:0.5rem;letter-spacing:3px;color:rgba(212,175,55,0.3);text-transform:uppercase;margin-bottom:12px">Actions rapides</div>
      <button class="admin-action" onclick="loadAdminData()">↻ Rafraîchir</button>
      <button class="admin-action" onclick="showAdminTab('membres');loadMembers()">Voir membres</button>
      <button class="admin-action" onclick="showAdminTab('fantomes');loadGhosts()">Révéler fantômes</button>
      <button class="admin-action" onclick="showAdminTab('signalements');loadReports()">Voir signalements</button>
    </div>
  </div>

  <!-- MEMBRES -->
  <div id="tab-membres" class="admin-section">
    <input type="text" class="admin-search" id="member-search" placeholder="Rechercher par nom, email, ville..." oninput="filterMembers()">
    <div id="members-list">
      <div class="admin-msg">Chargement...</div>
    </div>
  </div>

  <!-- FANTOMES -->
  <div id="tab-fantomes" class="admin-section">
    <div class="admin-msg">🔍 En tant que fondateur, tu vois l'identité réelle derrière chaque profil Fantôme.</div>
    <div id="ghosts-list">
      <div class="admin-msg">Chargement des profils Fantôme...</div>
    </div>
  </div>

  <!-- SIGNALEMENTS -->
  <div id="tab-signalements" class="admin-section">
    <div id="reports-list">
      <div class="admin-msg">Chargement des signalements...</div>
    </div>
  </div>
</div>

<script>
// ── SUPABASE CONFIG ──
const SUPA_URL = 'https://fhksytcoyjtcrkmhnoyw.supabase.co';
const SUPA_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoa3N5dGNveWp0Y3JrbWhub3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1OTkzODIsImV4cCI6MjA5MjE3NTM4Mn0.nW9xgEQSuXlq96d53AFE7jUADmr04YdMoD9hCNmw64k';
const FOUNDER_EMAIL = 'vibeqbc2026@hotmail.com';
let currentToken = localStorage.getItem('vibe_token') || null;
let currentUser = JSON.parse(localStorage.getItem('vibe_user') || 'null');
let allMembers = [];

async function supaFetch(path, method='GET', body=null, useToken=false){
  const token = useToken && currentToken ? currentToken : SUPA_ANON;
  const opts = {
    method,
    headers: {
      'apikey': SUPA_ANON,
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Prefer': method==='POST' ? 'return=representation' : ''
    }
  };
  if(body) opts.body = JSON.stringify(body);
  const r = await fetch(SUPA_URL + path, opts);
  if(!r.ok){ const err = await r.json(); throw new Error(err.message || err.error_description || 'Erreur API'); }
  if(r.status===204) return null;
  return r.json();
}

// ── HUD HORLOGE ──
setInterval(()=>{
  const n=new Date();
  document.getElementById('hud-time').textContent=
    n.getHours().toString().padStart(2,'0')+':'+n.getMinutes().toString().padStart(2,'0');
},1000);

// ── COMPTEUR MEMBRES ──
let cnt=0; const cel=document.getElementById('stat-members');
const step=()=>{cnt+=980;if(cnt>=50247){cnt=50247;cel.textContent=cnt.toLocaleString('fr-CA');return;}cel.textContent=cnt.toLocaleString('fr-CA');setTimeout(step,22);};
setTimeout(step,400);

// ── MUSIQUE ──
const tracks=[['Nuit de Québec','VIBE Ambient · Salon Flottant'],['Brouillard d\'hiver','VIBE Chill · Mode Fantôme'],['Lumière de la fierté','VIBE Pride · 2026'],['Âmes connectées','VIBE Deep · Salon Flottant']];
let ti=0;
setInterval(()=>{ti=(ti+1)%tracks.length;document.getElementById('np-track').textContent=tracks[ti][0];document.getElementById('np-artist').textContent=tracks[ti][1];},8000);

// ── CHAT LIVE ──
const chatMsgs=['Bienvenue dans le salon ✦','Quelqu\'un veut danser ? ◉','Ce brouillard est magnifique','Je suis fantôme mais je vous entends ☽','L\'ange gardien veille sur nous tous'];
let mi=0; const lc=document.getElementById('live-chat');
setInterval(()=>{lc.style.opacity='0';setTimeout(()=>{lc.innerHTML=`<span class="chat-name gold">◈ Salon</span><span class="chat-text">${chatMsgs[mi%chatMsgs.length]}</span>`;lc.style.opacity='1';mi++;},400);},5000);

// ── SOS ──
function activateSOS(){
  const b=document.getElementById('sos-btn');
  b.textContent='✦ Ange activé — aide en route';b.style.borderColor='#D4AF37';b.style.color='#D4AF37';
  setTimeout(()=>{b.textContent='SOS — Activer l\'ange gardien';b.style.borderColor='';b.style.color='';},4000);
}

// ── MODAL CONNEXION ──
function openLogin(){document.getElementById('login-modal').classList.add('open');}
function closeLogin(){document.getElementById('login-modal').classList.remove('open');}
document.getElementById('login-modal').addEventListener('click',function(e){if(e.target===this)closeLogin();});

// ── ADMIN ──
function openAdmin(){
  if(!currentUser){alert('Tu dois être connecté·e pour accéder au panneau admin.');openLogin();return;}
  document.getElementById('admin-panel').style.display='block';
  loadAdminData();
}
function closeAdmin(){document.getElementById('admin-panel').style.display='none';}
function showAdminTab(tab){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.admin-section').forEach(s=>s.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('tab-'+tab).classList.add('active');
  if(tab==='membres') loadMembers();
  if(tab==='fantomes') loadGhosts();
  if(tab==='signalements') loadReports();
}

async function loadAdminData(){
  try {
    const profiles = await supaFetch('/rest/v1/profiles?select=*', 'GET', null, true);
    const reports = await supaFetch('/rest/v1/reports?select=*', 'GET', null, true);
    if(Array.isArray(profiles)){
      document.getElementById('adm-total').textContent = profiles.length;
      document.getElementById('adm-online').textContent = profiles.filter(p=>p.is_online).length;
      document.getElementById('adm-ghost').textContent = profiles.filter(p=>p.ghost_mode).length;
      allMembers = profiles;
    }
    if(Array.isArray(reports)){
      document.getElementById('adm-reports').textContent = reports.filter(r=>r.status==='pending').length;
    }
  } catch(e){ console.log('Admin data error:', e.message); }
}

async function loadMembers(){
  const el = document.getElementById('members-list');
  try {
    const profiles = await supaFetch('/rest/v1/profiles?select=*&order=created_at.desc', 'GET', null, true);
    allMembers = Array.isArray(profiles) ? profiles : [];
    renderMembers(allMembers);
  } catch(e){
    el.innerHTML = `<div class="admin-msg">Aucun membre inscrit pour l'instant.</div>`;
  }
}

function renderMembers(members){
  const el = document.getElementById('members-list');
  if(!members.length){ el.innerHTML='<div class="admin-msg">Aucun membre trouvé.</div>'; return; }
  el.innerHTML = `<table class="admin-table">
    <thead><tr><th>Nom</th><th>Email</th><th>Ville</th><th>Statut</th><th>Actions</th></tr></thead>
    <tbody>
    ${members.map(m=>`<tr>
      <td>${m.display_name||'—'}</td>
      <td style="font-size:0.5rem">${m.real_email||'—'}</td>
      <td>${m.city||'—'}</td>
      <td>
        ${m.is_founder?'<span class="admin-badge badge-founder">Fondateur</span>':''}
        ${m.is_admin?'<span class="admin-badge badge-admin">Admin</span>':''}
        ${m.ghost_mode?'<span class="admin-badge badge-ghost">Fantôme</span>':''}
        ${!m.is_founder&&!m.is_admin?'<span class="admin-badge badge-free">Membre</span>':''}
      </td>
      <td>
        ${!m.is_immune?`<button class="admin-action danger" onclick="banUser('${m.id}')">Bannir</button>`:'<span style="font-size:0.42rem;color:rgba(212,175,55,0.3)">Immunisé</span>'}
      </td>
    </tr>`).join('')}
    </tbody>
  </table>`;
}

function filterMembers(){
  const q = document.getElementById('member-search').value.toLowerCase();
  const filtered = allMembers.filter(m=>
    (m.display_name||'').toLowerCase().includes(q)||
    (m.city||'').toLowerCase().includes(q)||
    (m.real_email||'').toLowerCase().includes(q)
  );
  renderMembers(filtered);
}

async function loadGhosts(){
  const el = document.getElementById('ghosts-list');
  try {
    const profiles = await supaFetch('/rest/v1/profiles?select=*&ghost_mode=eq.true', 'GET', null, true);
    const ghosts = Array.isArray(profiles) ? profiles : [];
    if(!ghosts.length){ el.innerHTML='<div class="admin-msg">Aucun profil en Mode Fantôme actuellement.</div>'; return; }
    el.innerHTML = `<table class="admin-table">
      <thead><tr><th>Nom affiché</th><th>Email réel</th><th>Ville</th><th>En ligne</th><th>Actions</th></tr></thead>
      <tbody>
      ${ghosts.map(g=>`<tr>
        <td>${g.display_name||'Anonyme'}</td>
        <td style="color:var(--gold);font-size:0.5rem">${g.real_email||'Email non disponible'}</td>
        <td>${g.city||'—'}</td>
        <td>${g.is_online?'✦ Oui':'Non'}</td>
        <td><button class="admin-action" onclick="revealGhost('${g.id}')">Révéler</button></td>
      </tr>`).join('')}
      </tbody>
    </table>`;
  } catch(e){
    el.innerHTML='<div class="admin-msg">Erreur chargement. Vérifie ta connexion admin.</div>';
  }
}

async function loadReports(){
  const el = document.getElementById('reports-list');
  try {
    const reports = await supaFetch('/rest/v1/reports?select=*&order=created_at.desc', 'GET', null, true);
    const list = Array.isArray(reports) ? reports : [];
    if(!list.length){ el.innerHTML='<div class="admin-msg">Aucun signalement pour l\'instant.</div>'; return; }
    el.innerHTML = list.map(r=>`
      <div class="report-card">
        <div class="report-reason">⚠ ${r.reason}</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-bottom:8px">${r.details||''}</div>
        <div class="report-meta">Signalé : ${new Date(r.created_at).toLocaleString('fr-CA')} · Statut : ${r.status}</div>
        <div style="margin-top:10px">
          <button class="admin-action" onclick="resolveReport('${r.id}','resolved')">Résoudre</button>
          <button class="admin-action" onclick="resolveReport('${r.id}','dismissed')">Ignorer</button>
          <button class="admin-action danger" onclick="banUser('${r.reported_user_id}')">Bannir l'utilisateur</button>
        </div>
      </div>
    `).join('');
  } catch(e){
    el.innerHTML='<div class="admin-msg">Erreur chargement signalements.</div>';
  }
}

async function banUser(userId){
  if(!confirm('Confirmer le bannissement de cet utilisateur ?')) return;
  try {
    await supaFetch(`/rest/v1/profiles?id=eq.${userId}`, 'PATCH', {membership_tier:'free',is_online:false}, true);
    alert('Utilisateur suspendu.');
    loadMembers();
  } catch(e){ alert('Erreur: '+e.message); }
}

async function resolveReport(reportId, status){
  try {
    await supaFetch(`/rest/v1/reports?id=eq.${reportId}`, 'PATCH', {status}, true);
    loadReports();
  } catch(e){ alert('Erreur: '+e.message); }
}

function revealGhost(userId){
  const ghost = allMembers.find(m=>m.id===userId);
  if(ghost){ alert(`Identité révélée:\nNom: ${ghost.display_name||'Inconnu'}\nEmail: ${ghost.real_email||'Non disponible'}\nVille: ${ghost.city||'Inconnue'}`); }
}

// ── INSCRIPTION ──
async function handleSignup(e){
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  const prenom = document.getElementById('prenom').value.trim();
  const email = document.getElementById('email').value.trim();
  const mdp = document.getElementById('mdp').value;
  const ville = document.getElementById('ville').value;
  const errDiv = document.getElementById('signup-error');
  errDiv.style.display='none';
  btn.disabled=true; btn.querySelector('span').textContent='Création en cours...';
  try {
    const authRes = await fetch(SUPA_URL+'/auth/v1/signup', {
      method:'POST',
      headers:{'apikey':SUPA_ANON,'Content-Type':'application/json'},
      body:JSON.stringify({email,password:mdp})
    });
    const authData = await authRes.json();
    if(authData.error||authData.msg) throw new Error(authData.error?.message||authData.msg||'Erreur inscription');
    const userId = authData.user?.id;
    if(userId){
      try {
        await supaFetch('/rest/v1/profiles','POST',{
          id:userId, display_name:prenom, city:ville,
          membership_tier:'free', is_online:true,
          real_email:email, created_at:new Date().toISOString()
        });
      } catch(pe){ console.log('Profile creation:', pe.message); }
    }
    document.getElementById('signup-form').style.display='none';
    document.getElementById('signup-success').style.display='block';
    setTimeout(()=>{ window.location.href='https://buy.stripe.com/28E3cx85P6UI9YM6xm3wQ01'; },2500);
  } catch(err){
    btn.disabled=false; btn.querySelector('span').textContent='Créer mon profil ✦';
    errDiv.textContent=err.message; errDiv.style.display='block';
  }
}

// ── CONNEXION ──
async function handleLogin(e){
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  const email = document.getElementById('login-email').value.trim();
  const mdp = document.getElementById('login-mdp').value;
  const errDiv = document.getElementById('login-error');
  errDiv.style.display='none';
  btn.disabled=true; btn.querySelector('span').textContent='Connexion...';
  try {
    const r = await fetch(SUPA_URL+'/auth/v1/token?grant_type=password',{
      method:'POST',
      headers:{'apikey':SUPA_ANON,'Content-Type':'application/json'},
      body:JSON.stringify({email,password:mdp})
    });
    const data = await r.json();
    if(data.error||data.error_description) throw new Error(data.error_description||data.error||'Courriel ou mot de passe invalide');
    currentToken = data.access_token;
    currentUser = data.user;
    localStorage.setItem('vibe_token',currentToken);
    localStorage.setItem('vibe_user',JSON.stringify(currentUser));
    closeLogin();
    // Si fondateur → ouvrir admin auto
    if(email.toLowerCase()===FOUNDER_EMAIL.toLowerCase()){
      setTimeout(()=>openAdmin(),300);
    } else {
      alert('✦ Bienvenue sur VIBE !');
    }
  } catch(err){
    btn.disabled=false; btn.querySelector('span').textContent='Entrer dans VIBE ✦';
    errDiv.textContent=err.message; errDiv.style.display='block';
  }
}

// ── CANVAS UNIVERS ──
(function(){
  const c=document.getElementById('universe');
  const resize=()=>{c.width=window.innerWidth;c.height=window.innerHeight;};
  resize(); window.addEventListener('resize',resize);
  const ctx=c.getContext('2d');
  const stars=Array.from({length:120},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:Math.random()*1.2+0.3,color:['#D4AF37','#b44fff','#00eeff','#ff5050','#ffffff'][Math.floor(Math.random()*5)],speed:Math.random()*0.3+0.1}));
  let t=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    stars.forEach(s=>{
      const op=0.3+0.3*Math.sin(t*s.speed+s.x);
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=s.color.replace(')',`,${op})`).replace('#','rgba(').replace(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,(_,r,g,b)=>`${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)}`);
      ctx.fillStyle=s.color; ctx.globalAlpha=op; ctx.fill(); ctx.globalAlpha=1;
    });
    t+=0.01; requestAnimationFrame(draw);
  }
  draw();
})();

// ── DNA CANVAS ──
(function(){
  const c=document.getElementById('dna-canvas'),ctx=c.getContext('2d');let t=0;
  function draw(){
    ctx.clearRect(0,0,180,180);
    for(let i=0;i<20;i++){
      const y=i/20*180,phase=t+i/20*Math.PI*4;
      const x1=90+60*Math.sin(phase),x2=90+60*Math.sin(phase+Math.PI);
      const colors=['#D4AF37','#b44fff','#00eeff','#ff5050','#ff88ff'];
      const col=colors[i%colors.length];
      ctx.beginPath();ctx.arc(x1,y,3,0,Math.PI*2);ctx.fillStyle=col;ctx.globalAlpha=0.8;ctx.fill();
      ctx.beginPath();ctx.arc(x2,y,3,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();
      if(i%3===0){ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y);ctx.strokeStyle=`rgba(212,175,55,0.15)`;ctx.lineWidth=0.5;ctx.stroke();}
      ctx.globalAlpha=1;
    }
    t+=0.03; requestAnimationFrame(draw);
  }
  draw();
})();

// ── ANGE CANVAS ──
(function(){
  const c=document.getElementById('ange-canvas'),ctx=c.getContext('2d');let t=0;
  function draw(){
    ctx.clearRect(0,0,180,180);
    const grd=ctx.createRadialGradient(90,90,10,90,90,80);
    grd.addColorStop(0,'rgba(212,175,55,0.15)');grd.addColorStop(1,'rgba(212,175,55,0)');
    ctx.beginPath();ctx.arc(90,90,80+5*Math.sin(t),0,Math.PI*2);ctx.fillStyle=grd;ctx.fill();
    ctx.beginPath();ctx.arc(90,90,30,0,Math.PI*2);
    const inner=ctx.createRadialGradient(90,90,0,90,90,30);
    inner.addColorStop(0,'rgba(212,175,55,0.6)');inner.addColorStop(1,'rgba(212,175,55,0.1)');
    ctx.fillStyle=inner;ctx.fill();
    for(let i=0;i<8;i++){
      const a=t+i/8*Math.PI*2,r=50+8*Math.sin(t*2+i);
      const x=90+Math.cos(a)*r,y=90+Math.sin(a)*r;
      ctx.beginPath();ctx.arc(x,y,2,0,Math.PI*2);
      ctx.fillStyle=`rgba(212,175,55,${0.4+0.3*Math.sin(t+i)})`;ctx.fill();
    }
    t+=0.02; requestAnimationFrame(draw);
  }
  draw();
})();

// ── PROFILS FLOTTANTS ──
function drawFP(id,hue){
  const c=document.getElementById(id);if(!c)return;
  const ctx=c.getContext('2d');let t=0;
  function fr(){
    ctx.clearRect(0,0,58,58);
    const grd=ctx.createRadialGradient(29,29,2,29,29,29);
    grd.addColorStop(0,`hsla(${hue},70%,55%,0.95)`);
    grd.addColorStop(1,`hsla(${hue+40},60%,15%,0.7)`);
    ctx.beginPath();ctx.arc(29,29,26,0,Math.PI*2);ctx.fillStyle=grd;ctx.fill();
    for(let i=0;i<5;i++){
      const a=t+i/5*Math.PI*2,r=10+3*Math.sin(t*1.5+i);
      const x=29+Math.cos(a)*r,y=29+Math.sin(a)*r;
      ctx.beginPath();ctx.arc(x,y,1.8,0,Math.PI*2);
      ctx.fillStyle=`hsla(${hue+i*28},100%,80%,0.8)`;ctx.fill();
    }
    ctx.beginPath();ctx.arc(29,29,26,0,Math.PI*2);
    ctx.strokeStyle=`hsla(${hue},80%,60%,0.4)`;ctx.lineWidth=0.8;ctx.stroke();
    t+=0.035; requestAnimationFrame(fr);
  }
  fr();
}
drawFP('fp1',45);drawFP('fp2',280);drawFP('fp3',160);

// ── GLOBE ──
(function(){
  const gc=document.getElementById('globe-canvas');
  const resize=()=>{const s=Math.min(window.innerWidth,520);gc.width=s;gc.height=s;};
  resize(); window.addEventListener('resize',resize);
  const gx=gc.getContext('2d');
  const cities=[
    {name:'QUÉBEC',lat:46.8,lon:-71.2,col:'#D4AF37'},
    {name:'MONTRÉAL',lat:45.5,lon:-73.6,col:'#b44fff'},
    {name:'TORONTO',lat:43.7,lon:-79.4,col:'#00eeff'},
    {name:'VANCOUVER',lat:49.3,lon:-123.1,col:'#ff5050'},
    {name:'OTTAWA',lat:45.4,lon:-75.7,col:'#ff88ff'},
    {name:'PARIS',lat:48.9,lon:2.3,col:'#D4AF37'},
    {name:'BERLIN',lat:52.5,lon:13.4,col:'#b44fff'},
    {name:'NYC',lat:40.7,lon:-74.0,col:'#00eeff'},
    {name:'LONDON',lat:51.5,lon:-0.1,col:'#ff5050'},
    {name:'TOKYO',lat:35.7,lon:139.7,col:'#ff88ff'},
    {name:'SAO PAULO',lat:-23.5,lon:-46.6,col:'#D4AF37'},
    {name:'SYDNEY',lat:-33.9,lon:151.2,col:'#00eeff'}
  ];
  let rotX=0.3,rotY=0,velX=0,velY=0,drag=false,lastX=0,lastY=0,gf=0;
  function ll2xyz(lat,lon,r){const phi=(90-lat)*Math.PI/180,theta=(lon+180)*Math.PI/180;return{x:-r*Math.sin(phi)*Math.cos(theta),y:r*Math.cos(phi),z:r*Math.sin(phi)*Math.sin(theta)};}
  function rotPt(p){const cy=Math.cos(rotY),sy=Math.sin(rotY),cx2=Math.cos(rotX),sx2=Math.sin(rotX);const x1=p.x*cy+p.z*sy,z1=-p.x*sy+p.z*cy;const y2=p.y*cx2-z1*sx2,z2=p.y*sx2+z1*cx2;return{x:x1,y:y2,z:z2};}
  gc.addEventListener('mousedown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;});
  gc.addEventListener('mousemove',e=>{if(!drag)return;velX=(e.clientX-lastX)*0.005;velY=(e.clientY-lastY)*0.005;rotY+=velX;rotX+=velY;rotX=Math.max(-1.3,Math.min(1.3,rotX));lastX=e.clientX;lastY=e.clientY;});
  gc.addEventListener('mouseup',()=>{drag=false;});
  gc.addEventListener('touchstart',e=>{drag=true;lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;},{passive:true});
  gc.addEventListener('touchmove',e=>{if(!drag)return;e.preventDefault();velX=(e.touches[0].clientX-lastX)*0.005;velY=(e.touches[0].clientY-lastY)*0.005;rotY+=velX;rotX+=velY;rotX=Math.max(-1.3,Math.min(1.3,rotX));lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;},{passive:false});
  gc.addEventListener('touchend',()=>{drag=false;});
  function drawGlobe(){
    const W=gc.width,H=gc.height,cx=W/2,cy=H/2,R=Math.min(W,H)*0.42;
    gx.clearRect(0,0,W,H);
    const bg=gx.createRadialGradient(cx,cy,0,cx,cy,R);
    bg.addColorStop(0,'#0d0020');bg.addColorStop(1,'#000');
    gx.beginPath();gx.arc(cx,cy,R,0,Math.PI*2);gx.fillStyle=bg;gx.fill();
    // Grid
    for(let lat=-60;lat<=60;lat+=30){for(let lon=-180;lon<180;lon+=5){const p1=ll2xyz(lat,lon,R),p2=ll2xyz(lat,lon+5,R),r1=rotPt(p1),r2=rotPt(p2);if(r1.z>0&&r2.z>0){gx.beginPath();gx.moveTo(cx+r1.x,cy+r1.y);gx.lineTo(cx+r2.x,cy+r2.y);gx.strokeStyle='rgba(212,175,55,0.06)';gx.lineWidth=0.5;gx.stroke();}}}
    for(let lon=-180;lon<180;lon+=30){for(let lat=-80;lat<80;lat+=5){const p1=ll2xyz(lat,lon,R),p2=ll2xyz(lat+5,lon,R),r1=rotPt(p1),r2=rotPt(p2);if(r1.z>0&&r2.z>0){gx.beginPath();gx.moveTo(cx+r1.x,cy+r1.y);gx.lineTo(cx+r2.x,cy+r2.y);gx.strokeStyle='rgba(212,175,55,0.04)';gx.lineWidth=0.5;gx.stroke();}}}
    // Équateur arc-en-ciel
    const rainbow=['#E40303','#FF8C00','#FFED00','#008026','#004DFF','#750787','#FF00FF','#00EEFF'];
    for(let i=0;i<240;i++){const lon=-180+i*1.5;const p1=ll2xyz(0,lon,R),p2=ll2xyz(0,lon+1.5,R),r1=rotPt(p1),r2=rotPt(p2);if(r1.z>0&&r2.z>0){gx.beginPath();gx.moveTo(cx+r1.x,cy+r1.y);gx.lineTo(cx+r2.x,cy+r2.y);gx.shadowBlur=6;gx.shadowColor=rainbow[Math.floor(i/30)%rainbow.length];gx.strokeStyle=rainbow[Math.floor(i/30)%rainbow.length];gx.lineWidth=2.8;gx.stroke();gx.shadowBlur=0;}}
    // Villes
    cities.forEach((city,ci)=>{
      const p=ll2xyz(city.lat,city.lon,R),r=rotPt(p);
      if(r.z>0){
        const sx=cx+r.x,sy=cy+r.y,pulse=0.65+0.35*Math.sin(gf*0.07+ci*1.3);
        gx.shadowBlur=14;gx.shadowColor=city.col;
        gx.beginPath();gx.arc(sx,sy,5.5,0,Math.PI*2);gx.fillStyle=city.col;gx.globalAlpha=pulse;gx.fill();gx.globalAlpha=1;
        gx.shadowBlur=0;
        gx.font=`bold ${Math.max(9,Math.round(W*0.022))}px "Space Mono",monospace`;
        gx.shadowBlur=8;gx.shadowColor=city.col;
        gx.fillStyle=city.col;gx.textAlign='center';gx.fillText(city.name,sx,sy-17);
        gx.shadowBlur=0;
      }
    });
    // Bordure
    const rim=gx.createLinearGradient(cx-R,cy,cx+R,cy);
    rim.addColorStop(0,'rgba(0,220,255,0.95)');rim.addColorStop(0.5,'rgba(180,0,255,0.80)');rim.addColorStop(1,'rgba(0,220,255,0.95)');
    gx.shadowBlur=18;gx.shadowColor='rgba(0,200,255,0.8)';
    gx.beginPath();gx.arc(cx,cy,R,0,Math.PI*2);gx.strokeStyle=rim;gx.lineWidth=3;gx.stroke();
    gx.shadowBlur=0;
    if(!drag){rotY+=0.0045;if(Math.abs(velX)>0.0005){velX*=0.94;rotY+=velX;}if(Math.abs(velY)>0.0005){velY*=0.94;rotX+=velY;rotX=Math.max(-1.3,Math.min(1.3,rotX));}}
    gf++; requestAnimationFrame(drawGlobe);
  }
  drawGlobe();
})();

// ── TRIBUNAL ──
(function(){
  const tc=document.getElementById('trib-canvas');tc.width=tc.offsetWidth||window.innerWidth;tc.height=320;
  const ctx=tc.getContext('2d'),W=tc.width,H=320;let t=0;
  function fr(){
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
    for(let i=0;i<5;i++){const px=W*.1+i*(W*.18),py=H-60;ctx.fillStyle='rgba(212,175,55,0.04)';ctx.fillRect(px-5,36,10,py-36);}
    const bx=W/2-24,by=H-110;ctx.fillStyle='rgba(212,175,55,0.07)';ctx.fillRect(bx,by,48,34);ctx.strokeStyle='rgba(212,175,55,0.2)';ctx.lineWidth=.5;ctx.strokeRect(bx,by,48,34);ctx.fillStyle=`rgba(212,175,55,${.5+.3*Math.sin(t)})`;ctx.font='12px Georgia';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('⚖',W/2,by+17);
    ctx.fillStyle=`rgba(220,50,50,${.18+.1*Math.sin(t*.7)})`;ctx.fillRect(0,0,4,H);ctx.fillRect(W-4,0,4,H);
    t+=.018; requestAnimationFrame(fr);
  }
  fr();
})();

// ── SALON ──
(function(){
  const sc=document.getElementById('salon-canvas');sc.width=sc.offsetWidth||window.innerWidth;sc.height=340;
  const ctx=sc.getContext('2d'),W=sc.width,H=340;let t=0;
  function fr(){
    ctx.clearRect(0,0,W,H);
    const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#000814');sky.addColorStop(1,'#060018');
    ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
    for(let i=0;i<25;i++){const sx=((i*97+t*5)%W),sy=22+Math.sin(i*.8+t*.22)*14;ctx.beginPath();ctx.arc(sx,sy,.7,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${.2+.2*Math.sin(i+t)})`;ctx.fill();}
    for(let layer=0;layer<4;layer++){const y=H*.38+layer*H*.13,op=.07+layer*.05;ctx.fillStyle=`rgba(140,140,200,${op})`;for(let i=0;i<5;i++){const bx=((i*110+t*5*(layer+1))%(W+160))-80;ctx.beginPath();ctx.ellipse(bx,y,90+25*Math.sin(i),28+10*Math.sin(i*.7),0,0,Math.PI*2);ctx.fill();}}
    t+=.012; requestAnimationFrame(fr);
  }
  fr();
})();

// ── EASTER EGG ADMIN ──
// Tape "VIBE" sur le clavier pour ouvrir l'admin (si connecté comme fondateur)
let adminCode='';
document.addEventListener('keydown',e=>{
  adminCode+=e.key.toUpperCase();
  if(adminCode.includes('VIBE')){ adminCode=''; if(currentUser) openAdmin(); else openLogin(); }
  if(adminCode.length>10) adminCode=adminCode.slice(-10);
});
</script>
</body>
</html>
