/**
 * Tarifs VIBE CAD
 * - 500 Pass Fondateur : 99 $ EN UN SEUL VERSEMENT (paiement unique, 1 an)
 * - Après épuisement : tarifs réguliers uniquement — le prix fondateur ne revient JAMAIS
 */

export const FOUNDER_LIMIT = 500

export const PRICING = {
  founder: {
    id: 'founder_onetime',
    name: 'Pass Fondateur',
    price: 99,
    unit: 'CAD · 1 versement',
    limit: FOUNDER_LIMIT,
    oneTime: true,
    desc: '500 places max. Un paiement unique active 1 an. Tarif jamais réouvert après épuisement.',
    url: 'https://buy.stripe.com/28E14pgjE0nR5KM7HN9R608',
    priceId: 'price_1TyGRPPrPYFQYWVuKoKHlbEk',
  },
  week: {
    id: 'sub_week',
    name: 'Hebdomadaire',
    price: 4.99,
    unit: '/ semaine',
    desc: 'Accès complet · Tarif régulier',
    url: 'https://buy.stripe.com/fZu28t0kG8Un7SU8LR9R603',
    priceId: 'price_1TyGLoPrPYFQYWVuVAQzjUsk',
  },
  month: {
    id: 'sub_month',
    name: 'Mensuel',
    price: 12.99,
    unit: '/ mois',
    desc: 'Accès complet · Tarif régulier',
    url: 'https://buy.stripe.com/fZubJ3ebw1rV5KM5zF9R601',
    priceId: 'price_1TyGLlPrPYFQYWVuO0kQXn2J',
  },
  year: {
    id: 'sub_year',
    name: 'Annuel',
    price: 99,
    unit: '/ an',
    desc: 'Accès 12 mois · Tarif régulier (après les 500 fondateurs)',
    url: 'https://buy.stripe.com/6oU14p3wSc6zgpqe6b9R602',
    priceId: 'price_1TyGLmPrPYFQYWVuV3GcusXA',
  },
}

export const EXTRAS = [
  {
    id: 'boost_24h',
    name: 'Boost Découverte 24h',
    price: 4.99,
    desc: 'En tête de la découverte pendant 24 h',
    url: 'https://buy.stripe.com/eVqeVf3wSc6zflm1jp9R604',
  },
  {
    id: 'ghost_7d',
    name: 'Mode Fantôme 7 jours',
    price: 7.99,
    desc: 'Invisible dans Découverte pendant 7 jours',
    url: 'https://buy.stripe.com/7sY28t7N8b2v4GI7HN9R605',
  },
  {
    id: 'visitors_7d',
    name: 'Qui m’a visité — 7 jours',
    price: 5.99,
    desc: 'Voir la liste des visiteurs pendant 7 jours',
    url: 'https://buy.stripe.com/7sY5kFgjE8Un4GId279R606',
  },
  {
    id: 'pardon_25',
    name: 'Pardon Tribunal',
    price: 25,
    desc: 'Pardon communautaire après verdict coupable',
    url: 'https://buy.stripe.com/dRmcN79VgeeHc9aaTZ9R607',
  },
]

export function openCheckout(url) {
  if (!url) return
  window.open(url, '_blank', 'noopener,noreferrer')
}
