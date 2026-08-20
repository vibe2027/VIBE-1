# VIBE - Plateforme de Rencontre Gay

VIBE est une plateforme de rencontre moderne conçue spécifiquement pour la communauté LGBTQ+.

## 🌟 Caractéristiques

- ✨ Interface moderne et intuitive
- 🔒 Sécurité et confidentialité garanties
- 💬 Système de messagerie en temps réel
- 👥 Profils personnalisés
- 🎯 Système de matching intelligent
- 💳 Intégration Stripe pour les paiements

## 🛠️ Stack Technique

- **Frontend**: React 18 + Vite
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Paiements**: Stripe
- **État**: TanStack Query
- **Icônes**: Lucide React
- **Notifications**: Sonner
- **Routage**: React Router DOM

## 📦 Installation

```bash
npm install
```

## 🚀 Développement

```bash
npm run dev
```

Le serveur démarre sur http://localhost:5173

## 🏗️ Build Production

```bash
npm run build
```

## 👁️ Aperçu Production

```bash
npm run preview
```

## 🔐 Configuration

Créez un fichier `.env.local` avec les variables suivantes :

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 📁 Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── pages/         # Pages principales
├── styles/        # Fichiers CSS
├── App.jsx        # Composant principal
├── main.jsx       # Point d'entrée
└── index.css      # Styles globaux
```

## 📄 Licence

Projet VIBE © 2026 - Tous droits réservés
