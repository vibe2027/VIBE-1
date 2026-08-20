/**
 * Traduction temps réel VIBE
 * Tu écris en FR → le lecteur RU reçoit en russe (et inversement).
 *
 * Prod : LibreTranslate auto-hébergé ou DeepL (VITE_TRANSLATE_URL / KEY).
 * Démo : dictionnaire minimal + passthrough si même langue.
 */

const DEMO_DICT = {
  'fr|ru': {
    'salut': 'привет',
    'bonjour': 'здравствуйте',
    'merci': 'спасибо',
    'oui': 'да',
    'non': 'нет',
    'tu es où': 'ты где',
    "tu es où ce soir": 'ты где сегодня вечером',
    'salut, tu es où ce soir ?': 'привет, ты где сегодня вечером?',
    'ça va': 'как дела',
    'bonne nuit': 'спокойной ночи',
  },
  'ru|fr': {
    'привет': 'salut',
    'спасибо': 'merci',
    'да': 'oui',
    'нет': 'non',
    'как дела': 'ça va',
  },
  'fr|en': {
    'salut': 'hi',
    'bonjour': 'hello',
    'merci': 'thank you',
    'oui': 'yes',
    'non': 'no',
    'tu es où ce soir ?': 'where are you tonight?',
  },
  'en|fr': {
    'hi': 'salut',
    'hello': 'bonjour',
    'thank you': 'merci',
    'yes': 'oui',
    'no': 'non',
  },
}

export const LANGS = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh', label: '中文' },
]

export async function translateText(text, from, to) {
  if (!text || from === to) return text

  const base = import.meta.env.VITE_TRANSLATE_URL // ex: https://libretranslate.example/translate
  const key = import.meta.env.VITE_TRANSLATE_KEY || ''

  if (base) {
    try {
      const res = await fetch(base, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: text,
          source: from,
          target: to,
          format: 'text',
          api_key: key || undefined,
        }),
      })
      if (res.ok) {
        const data = await res.json()
        return data.translatedText || data.translation || text
      }
    } catch {
      /* fallback demo */
    }
  }

  const keyDict = `${from}|${to}`
  const dict = DEMO_DICT[keyDict] || {}
  const lower = text.trim().toLowerCase()
  if (dict[lower]) return dict[lower]

  // mot à mot naïf pour la démo
  const words = lower.split(/\s+/)
  const out = words.map((w) => dict[w] || w).join(' ')
  if (out !== lower) return out

  return `[${to}] ${text}`
}
