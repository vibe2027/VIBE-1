import { useEffect, useRef, useState } from 'react'

/**
 * Globe VIBE — profils en temps réel (ville approximative).
 * Points or = membres en ligne. Clic → callback profil.
 * Géoloc floue (Loi 25) : pas d'adresse exacte.
 */

const DEMO_POINTS = [
  { id: 'p1', city: 'Montréal', lat: 45.5, lng: -73.6, label: 'Jordan' },
  { id: 'p2', city: 'Québec', lat: 46.8, lng: -71.2, label: 'Alex' },
  { id: 'p3', city: 'Toronto', lat: 43.7, lng: -79.4, label: 'Sam' },
  { id: 'p4', city: 'Vancouver', lat: 49.3, lng: -123.1, label: 'Riley' },
  { id: 'p5', city: 'Ottawa', lat: 45.4, lng: -75.7, label: 'Casey' },
  { id: 'p6', city: 'Calgary', lat: 51.0, lng: -114.1, label: 'Morgan' },
  { id: 'p7', city: 'Paris', lat: 48.9, lng: 2.3, label: 'Léa' },
  { id: 'p8', city: 'Berlin', lat: 52.5, lng: 13.4, label: 'Max' },
  { id: 'p9', city: 'Moscou', lat: 55.8, lng: 37.6, label: 'Sasha' },
  { id: 'p10', city: 'São Paulo', lat: -23.5, lng: -46.6, label: 'Kai' },
]

function project(lat, lng, w, h, rotY) {
  const phi = ((lat) * Math.PI) / 180
  const theta = ((lng + rotY) * Math.PI) / 180
  const x = Math.cos(phi) * Math.sin(theta)
  const y = Math.sin(phi)
  const z = Math.cos(phi) * Math.cos(theta)
  const scale = Math.min(w, h) * 0.38
  return {
    sx: w / 2 + x * scale,
    sy: h / 2 - y * scale,
    visible: z > -0.15,
    depth: z,
  }
}

export default function GlobeLive({ points = DEMO_POINTS, onSelect }) {
  const canvasRef = useRef(null)
  const rot = useRef(20)
  const [hover, setHover] = useState(null)
  const ptsRef = useRef(points)
  ptsRef.current = points

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let running = true

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      if (!running) return
      const w = canvas.getBoundingClientRect().width
      const h = canvas.getBoundingClientRect().height
      rot.current += 0.08
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2
      const R = Math.min(w, h) * 0.38

      // glow
      const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.4)
      g.addColorStop(0, 'rgba(201,162,39,0.08)')
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // sphere outline
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(201,162,39,0.35)'
      ctx.lineWidth = 1
      ctx.stroke()

      // latitude lines
      ctx.strokeStyle = 'rgba(201,162,39,0.12)'
      ctx.lineWidth = 0.5
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath()
        for (let lng = -180; lng <= 180; lng += 6) {
          const p = project(lat, lng, w, h, rot.current)
          if (lng === -180) ctx.moveTo(p.sx, p.sy)
          else if (p.visible) ctx.lineTo(p.sx, p.sy)
        }
        ctx.stroke()
      }
      // meridians
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath()
        let started = false
        for (let lat = -90; lat <= 90; lat += 6) {
          const p = project(lat, lng, w, h, rot.current)
          if (!p.visible) { started = false; continue }
          if (!started) { ctx.moveTo(p.sx, p.sy); started = true }
          else ctx.lineTo(p.sx, p.sy)
        }
        ctx.stroke()
      }

      // points
      const sorted = [...ptsRef.current]
        .map((pt) => ({ ...pt, ...project(pt.lat, pt.lng, w, h, rot.current) }))
        .filter((p) => p.visible)
        .sort((a, b) => a.depth - b.depth)

      sorted.forEach((p) => {
        const pulse = 0.6 + 0.4 * Math.sin(Date.now() / 400 + p.lat)
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, 3.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,162,39,${0.5 + pulse * 0.4})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, 8, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(201,162,39,${0.15 * pulse})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const onClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const w = rect.width
    const h = rect.height
    let best = null
    let bestD = 18
    points.forEach((pt) => {
      const p = project(pt.lat, pt.lng, w, h, rot.current)
      if (!p.visible) return
      const d = Math.hypot(p.sx - mx, p.sy - my)
      if (d < bestD) { bestD = d; best = pt }
    })
    if (best) {
      setHover(best)
      onSelect?.(best)
    }
  }

  return (
    <section style={{ padding: '24px 16px', maxWidth: 720, margin: '0 auto' }}>
      <p style={{ fontSize: '0.55rem', letterSpacing: 6, color: 'rgba(201,162,39,0.45)', textTransform: 'uppercase', marginBottom: 8 }}>
        // Globe · Temps réel
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#C9A227', fontSize: '1.5rem', marginBottom: 8 }}>
        Où est la communauté
      </h2>
      <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginBottom: 20, lineHeight: 1.7 }}>
        Points or = membres en ligne (ville approximative). Géolocalisation floue — conforme Loi 25.
      </p>
      <div style={{
        position: 'relative', width: '100%', height: 360,
        border: '0.5px solid rgba(201,162,39,0.25)', background: '#050505',
        borderRadius: 8, overflow: 'hidden',
      }}>
        <canvas
          ref={canvasRef}
          onClick={onClick}
          style={{ width: '100%', height: '100%', display: 'block', cursor: 'crosshair' }}
        />
      </div>
      {hover && (
        <p style={{ marginTop: 12, fontSize: '0.65rem', color: '#C9A227', textAlign: 'center' }}>
          {hover.label} · {hover.city}
        </p>
      )}
      <p style={{ marginTop: 8, fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
        {points.length} présences (démo) · branché Realtime quand Supabase est configuré
      </p>
    </section>
  )
}
