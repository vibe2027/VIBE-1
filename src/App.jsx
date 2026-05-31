import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      minHeight:'100vh',
      width:'100vw',
      backgroundColor:'#050505',
      color:'#D4AF37',
      fontFamily:'Georgia, serif',
      textAlign:'center',
      padding:'40px 20px'
    }}>
      <h1 style={{fontSize:'3rem',marginBottom:'10px',letterSpacing:'8px'}}>
        ✦ VIBE
      </h1>
      <p style={{fontSize:'1.1rem',marginBottom:'8px',opacity:0.9}}>
        L'app LGBTQ+ 100% canadienne
      </p>
      <p style={{fontSize:'0.9rem',marginBottom:'40px',opacity:0.6}}>
        Montréal · Québec · Toronto · Vancouver · Ottawa
      </p>
      <a href="https://vibegay.ca/inscription" style={{
        backgroundColor:'#D4AF37',
        color:'#050505',
        padding:'14px 32px',
        borderRadius:'30px',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'1rem',
        marginBottom:'20px'
      }}>
        Rejoindre VIBE
      </a>
      <p style={{fontSize:'0.8rem',opacity:0.5,marginTop:'60px'}}>
        © 2026 VIBE Canada · vibegay.ca
      </p>
      <SpeedInsights />
    </div>
  );
}