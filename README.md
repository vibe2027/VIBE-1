# VIBE - Plateforme de Rencontre Gay

VIBE est une plateforme de rencontre moderne conçue spécifiquement pour la communauté LGBTQ+.

## 🌟 Caractéristiques

- ✨ Interface moderne et intuitive
- 🔒 Sécurité et confidentialité garanties
- 💬 Système de messagerie en temps réel
- 👥 Profils personnalisés
- 🎯 Système de matching intelligent
- 💳 Intégration Stripe pour les paiements
- 🎤 Profils voix personnalisés

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

## 🔐 Configuration

1. Copie le fichier `.env.example` en `.env.local` :
```bash
cp .env.example .env.local
```

2. Remplis les variables d'environnement :
```env
VITE_SUPABASE_URL=https://fhksytcoyjtcrkmhnoyw.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_anon_supabase
VITE_STRIPE_PUBLIC_KEY=ta_cle_publique_stripe
```

3. **Setup Supabase Database** :
   - Va sur ton projet Supabase
   - Clique sur "SQL Editor"
   - Crée une nouvelle requête
   - Copie le contenu du fichier `supabase/schema.sql`
   - Lance la requête pour créer la table `voix_profiles` et les politiques de sécurité

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

## 📁 Structure du Projet

```
src/
├── components/        # Composants réutilisables
│   ├── Header.jsx
│   ├── Navigation.jsx
│   └── ...
├── pages/            # Pages principales
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Messages.jsx
│   ├── VoiceGallery.jsx
│   └── Settings.jsx
├── supabaseClient.js  # Configuration Supabase
├── App.jsx           # Composant principal
├── main.jsx          # Point d'entrée
└── App.css           # Styles globaux
```

## 🔗 Intégration Supabase

### Tables Créées

- **voix_profiles** : Stocke les profils voix des utilisateurs
  - `id` : UUID unique
  - `user_id` : Référence à l'utilisateur
  - `name` : Nom du profil voix
  - `city` : Ville
  - `dist` : Distance
  - `intent` : Intention de l'utilisateur
  - `audio_url` : Lien vers le fichier audio
  - `duration_label` : Durée de l'audio
  - `tone_label` : Ton de la voix
  - `photo_url` : Photo du profil
  - `published` : Visibilité publique
  - `created_at` : Date de création

### Policies de Sécurité (Row Level Security)

- ✅ Tout le monde peut voir les voix publiées
- ✅ Les utilisateurs connectés peuvent publier leur propre voix
- ✅ Les utilisateurs peuvent modifier/supprimer leurs propres voix
- ✅ Bucket public pour écouter les fichiers audio

## 🚨 Dépannage

### Les variables d'environnement ne sont pas chargées
- Vérifie que tu as créé le fichier `.env.local`
- Assure-toi que les variables sont correctes
- Redémarre le serveur de développement après modification

### Erreur de connexion Supabase
- Vérifie que `VITE_SUPABASE_URL` est correcte
- Assure-toi que `VITE_SUPABASE_ANON_KEY` est valide
- Vérifie les CORS dans les settings Supabase

## 📄 Licence

Projet VIBE © 2026 - Tous droits réservés
