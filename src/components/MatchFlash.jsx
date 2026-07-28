import { useEffect, useState } from 'react'

/**
 * Flash global : tout le monde le voit.
 * Aucune info sur QUI a matché ni OÙ — sauf pour les 2 concernés (géré ailleurs).
 */
export default function MatchFlash({ trigger, onDone }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!trigger) return
    setShow(true)
    const t = setTimeout(() => {
      setShow(false)
      onDone?.()
    }, 1200)
    return () => clearTimeout(t)
  }, [trigger, onDone])

  if (!show) return null
  return <div className="match-flash" aria-hidden="true" />
}
