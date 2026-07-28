/**
 * Tarifs VIBE CAD
 * - 500 Pass Pionnier : 99 $ EN UN SEUL VERSEMENT (pas de mois/ans sur ce pass)
 * - Après épuisement : tarifs réguliers uniquement — le prix pionnier ne revient JAMAIS
 */

export const PIONEER_LIMIT = 500
export const FOUNDER_LIMIT = PIONEER_LIMIT // alias rétro

export const PRICING = {
  pioneer: {
    id: 'pioneer_onetime',
    name: 'Pass Pionnier',
    price: 99,
    unit: 'CAD · 1 versement',
    limit: PIONEER_LIMIT,
    oneTime: true,
    desc: '500 places max. Un seul paiement active 1 an. Pas de mensualité. Tarif jamais réouvert après épuisement.',
    url: 'https://buy.stripe.com/5kQ6oJ8Rc1rVb563rx9R609',
    priceId: 'price_1TyHuCPrPYFQYWVuClW6nkn5',
  },
  // alias pour le code existant
  founder: undefined,
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
    desc: 'Accès 12 mois · Tarif régulier (après les 500 pionniers)',
    url: 'https://buy.stripe.com/6oU14p3wSc6zgpqe6b9R602',
    priceId: 'price_1TyGLmPrPYFQYWVuV3GcusXA',
  },
}

// Alias pour compatibilité Landing qui utilisait PRICING.founder
PRICING.founder = PRICING.pioneer

export const EXTRAS = [
  {
    id: 'boost_7d',
    name: 'Boost Découverte 7 jours',
    price: 7.99,
    desc: 'En tête de la découverte pendant 7 jours',
    url: 'https://buy.stripe.com/fZu28t9Vg1rV1uwd279R60a',
  },
  {
    id: 'ghost_7d',
    name: 'Mode Fantôme 7 jours',
    price: 9.99,
    desc: 'Profil en fumée dense pendant 7 jours',
    url: 'https://buy.stripe.com/fZu3cx4AW6Mfb565zF9R60b',
  },
  {
    id: 'visitors_7d',
    name: 'Qui m’a visité — 7 jours',
    price: 6.99,
    desc: 'Voir la liste des visiteurs pendant 7 jours',
    url: 'https://buy.stripe.com/eVq9AVgjE8Un0qs6DJ9R60c',
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
