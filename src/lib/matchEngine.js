/**
 * Moteur de match simultané VIBE
 * - Deux clics dans une fenêtre de 3 secondes = match
 * - Flash global sur TOUS les écrans
 * - Seuls les 2 matchés savent qui / où
 */

const WINDOW_MS = 3000

// Clics locaux en attente : { targetId, at }
let pendingClick = null

export function recordClick(myId, targetId, now = Date.now()) {
  const click = { myId, targetId, at: now }
  const prev = pendingClick
  pendingClick = click

  // Si l'autre vient de cliquer sur moi dans la fenêtre
  if (
    prev &&
    prev.myId === targetId &&
    prev.targetId === myId &&
    now - prev.at <= WINDOW_MS
  ) {
    pendingClick = null
    return {
      matched: true,
      pair: [myId, targetId].sort(),
      at: now,
    }
  }
  return { matched: false, click }
}

export function clearPending() {
  pendingClick = null
}

export const MATCH_CHANNEL = 'vibe-matches'
export const MATCH_WINDOW_MS = WINDOW_MS
