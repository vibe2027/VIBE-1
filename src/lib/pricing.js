/** Tarifs VIBE CAD — liés aux Payment Links Stripe (livemode) */

export const PRICING = {
  founder: {
    id: 'founder_year',
    name: 'Pass Fondateur',
    price: 99,
    unit: '/ an',
    limit: 500,
    desc: '500 places · Accès complet 1 an · Édition limitée',
    url: 'https://buy.stripe.com/8x26oJffA4E78WY8LR9R600',
    priceId: 'price_1TyGLjPrPYFQYWVu26KfMtjQ',
  },
  month: {
    id: 'sub_month',
    name: 'Mensuel',
    price: 12.99,
    unit: '/ mois',
    desc: 'Accès complet · Sans engagement long',
    url: 'https://buy.stripe.com/fZubJ3ebw1rV5KM5zF9R601',
    priceId: 'price_1TyGLlPrPYFQYWVuO0kQXn2J',
  },
  year: {
    id: 'sub_year',
    name: 'Annuel',
    price: 99,
    unit: '/ an',
    desc: 'Accès complet 12 mois',
    url: 'https://buy.stripe.com/6oU14p3wSc6zgpqe6b9R602',
    priceId: 'price_1TyGLmPrPYFQYWVuV3GcusXA',
  },
  week: {
    id: 'sub_week',
    name: 'Hebdomadaire',
    price: 4.99,
    unit: '/ semaine',
    desc: 'Accès 7 jours renouvelable',
    url: 'https://buy.stripe.com/fZu28t0kG8Un7SU8LR9R603',
    priceId: 'price_1TyGLoPrPYFQYWVuVAQzjUsk',
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
