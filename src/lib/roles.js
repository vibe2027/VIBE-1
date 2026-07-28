/**
 * Rôles VIBE
 * Admin : voit tout, donne billets (vie / an / mois / semaine)
 * Associé : gratuités + modifier 1 mois ou 1 an seulement
 * Owner : même si dénoncé → canal privé
 *
 * Configure dans .env :
 * VITE_ADMIN_EMAIL=toi@exemple.ca
 * VITE_ASSOCIATE_EMAIL=associe@exemple.ca
 */

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || '').toLowerCase().trim()
const ASSOCIATE_EMAIL = (import.meta.env.VITE_ASSOCIATE_EMAIL || '').toLowerCase().trim()

export function resolveRole(email) {
  if (!email) return 'guest'
  const e = email.toLowerCase().trim()
  if (ADMIN_EMAIL && e === ADMIN_EMAIL) return 'admin'
  if (ASSOCIATE_EMAIL && e === ASSOCIATE_EMAIL) return 'associate'
  // Bootstrap local si aucun admin configuré : le premier email stocké comme admin
  try {
    const boot = localStorage.getItem('vibe_admin_bootstrap')
    if (!ADMIN_EMAIL && boot && boot === e) return 'admin'
    if (!ADMIN_EMAIL && !boot) {
      localStorage.setItem('vibe_admin_bootstrap', e)
      return 'admin'
    }
  } catch { /* ignore */ }
  return 'member'
}

export function canGrantLifetime(role) {
  return role === 'admin'
}

export function canGrantFree(role) {
  return role === 'admin' || role === 'associate'
}

export function canGrantDuration(role, duration) {
  if (role === 'admin') return true
  if (role === 'associate') return duration === 'month' || duration === 'year'
  return false
}

export const GRANT_OPTIONS_ADMIN = [
  { id: 'lifetime', label: 'À vie' },
  { id: 'year', label: '1 an' },
  { id: 'month', label: '1 mois' },
  { id: 'week', label: '1 semaine' },
]

export const GRANT_OPTIONS_ASSOCIATE = [
  { id: 'year', label: '1 an (gratuit)' },
  { id: 'month', label: '1 mois (gratuit)' },
]
