# SETUP — BRAVOO WEB APP

Salut Benjamin ! 👋

Voici comment configurer Supabase et Stripe pour rendre ton app **complètement fonctionnelle**.

Pour l'instant, l'app tourne en **mode démo** avec des données simulées. Une fois que tu auras suivi ces étapes, elle deviendra une vraie plateforme SaaS connectée à une base de données et un système de paiement.

---

## 📦 FICHIERS CRÉÉS

Voici ce qui a été généré pour toi :

1. **`dashboard.html`** — Le programme de l'utilisateur (page principale après connexion)
2. **`chat.html`** — Le coach IA (conversations simulées pour l'instant)
3. **`progression.html`** — Le tableau de progression avec stats
4. **`SETUP.md`** — Ce fichier (instructions de configuration)

Tous les fichiers respectent le design Bravoo (palette #121212/#181818/#1DB954/#F5C518), avec des animations GPU-only et un design mobile-first.

---

## ✅ ÉTAPE 1 : CRÉER UN PROJET SUPABASE (GRATUIT)

Supabase = backend + base de données + authentification. C'est gratuit jusqu'à 500 Mo de données.

### 1.1 Créer le projet

1. Va sur **https://supabase.com**
2. Clique sur **"Start your project"**
3. Connecte-toi avec GitHub (ou email)
4. Clique sur **"New project"**
5. Choisis un nom : `bravoo-app`
6. Choisis un mot de passe pour la database (garde-le quelque part)
7. Choisis une région proche (ex: Europe West - Francfort)
8. Clique sur **"Create new project"**
9. Attends 2-3 minutes (le projet se crée)

### 1.2 Récupérer les clés

Une fois le projet créé :

1. Va dans **"Settings"** (icône d'engrenage en bas à gauche)
2. Clique sur **"API"**
3. Tu verras :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public** (clé publique) : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

**Copie ces deux valeurs** (on va les utiliser juste après).

### 1.3 Configurer l'authentification

1. Va dans **"Authentication"** > **"Providers"**
2. Active **"Email"** (déjà activé par défaut normalement)
3. Configure les **Email Templates** (optionnel pour l'instant)

### 1.4 Créer les tables

Va dans **"SQL Editor"** et exécute ce script :

```sql
-- Table des profils utilisateurs
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  prenom TEXT NOT NULL,
  classe TEXT NOT NULL,
  moyenne NUMERIC(4,2),
  objectif INTEGER,
  matieres_fortes TEXT[],
  matieres_faibles TEXT[],
  diagnostic_score INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des stats par matière
CREATE TABLE subject_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  mastered INTEGER DEFAULT 0,
  total INTEGER DEFAULT 0,
  average_score NUMERIC(4,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table de l'historique de chat
CREATE TABLE chat_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL, -- 'assistant' ou 'user'
  type TEXT NOT NULL, -- 'text', 'course', 'quiz'
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour performance
CREATE INDEX profiles_user_id_idx ON profiles(user_id);
CREATE INDEX subject_stats_user_id_idx ON subject_stats(user_id);
CREATE INDEX chat_history_user_id_idx ON chat_history(user_id);

-- Politiques de sécurité (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subject_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Permettre aux utilisateurs de lire/écrire uniquement leurs propres données
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read own stats"
  ON subject_stats FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own stats"
  ON subject_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own stats"
  ON subject_stats FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read own chat"
  ON chat_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chat"
  ON chat_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

Clique sur **"Run"**. Si tout se passe bien, tu verras "Success. No rows returned."

---

## 🔐 ÉTAPE 2 : INTÉGRER SUPABASE DANS LES FICHIERS HTML

Maintenant, on va injecter les clés Supabase dans les fichiers.

### 2.1 Ajouter la librairie Supabase

**Dans chaque fichier HTML** (`index.html`, `dashboard.html`, `chat.html`, `progression.html`), ajoute cette ligne **juste avant le `</head>`** :

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### 2.2 Remplacer les valeurs dans le code

Dans **chaque fichier HTML**, cherche ce commentaire :

```html
<!--
  SUPABASE CONFIG (Benjamin doit créer un projet et ajouter ces valeurs) :
  const SUPABASE_URL = 'https://xxxxx.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbxxxxxx';
  
  Quand ces valeurs sont renseignées, décommenter les blocs Supabase dans le JS.
-->
```

Et remplace `https://xxxxx.supabase.co` et `eyJhbxxxxxx` par **tes vraies valeurs** (copiées à l'étape 1.2).

### 2.3 Décommenter les blocs Supabase

Dans chaque fichier, cherche les blocs commentés qui commencent par `/* SUPABASE (à décommenter quand Benjamin aura configuré) */` et **décommente-les** (enlève les `/*` et `*/`).

Exemple dans `dashboard.html` :

```javascript
// AVANT :
/*
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbxxxxxx';

async function loadUserDataFromSupabase() {
  ...
}
*/

// APRÈS :
const SUPABASE_URL = 'https://ta-vraie-url.supabase.co';
const SUPABASE_ANON_KEY = 'eyJta_vraie_cle...';

async function loadUserDataFromSupabase() {
  ...
}
```

Fais ça dans **tous les fichiers** (index, dashboard, chat, progression).

---

## 💳 ÉTAPE 3 : CRÉER UN COMPTE STRIPE

Stripe = système de paiement. Gratuit à créer, tu paies seulement sur les transactions (environ 1,5% + 0,25€ par paiement).

### 3.1 Créer le compte

1. Va sur **https://stripe.com**
2. Clique sur **"Start now"**
3. Crée ton compte (email + mot de passe)
4. Remplis les infos de ton business (nom : "Bravoo", type : SaaS éducatif)

### 3.2 Récupérer la clé publique

1. Va dans **"Developers"** (en haut à droite)
2. Clique sur **"API keys"**
3. Copie la **Publishable key** (commence par `pk_test_...` en mode test, ou `pk_live_...` en mode production)

### 3.3 Créer le produit "Bravoo"

1. Va dans **"Products"** (menu de gauche)
2. Clique sur **"Add product"**
3. Nom : **"Bravoo — Programme personnalisé"**
4. Description : **"Accès illimité au coach IA et aux exercices personnalisés"**
5. Prix : **3,99€ / semaine** (choisir "Recurring" > "Weekly")
6. Clique sur **"Add product"**

### 3.4 Configurer le mode test

Pour tester les paiements **sans vraiment payer** :

1. Utilise la clé **`pk_test_...`**
2. Pour tester, utilise la carte **4242 4242 4242 4242**, date : n'importe quelle date future, CVV : n'importe quel 3 chiffres

### 3.5 Intégrer Stripe dans `index.html`

Dans **`index.html`**, cherche ce commentaire :

```html
<!--
  STRIPE CONFIG (Benjamin doit créer un compte et ajouter ces valeurs) :
  const STRIPE_PUBLISHABLE_KEY = 'pk_live_xxxxx';
-->
```

Et remplace `pk_live_xxxxx` par ta vraie clé (récupérée à l'étape 3.2).

Puis, dans le JavaScript, décommente le bloc Stripe (cherche `/* STRIPE (à décommenter quand Benjamin aura configuré) */`).

### 3.6 Configurer le Webhook (pour valider les paiements)

1. Va dans **"Developers"** > **"Webhooks"**
2. Clique sur **"Add endpoint"**
3. URL : `https://ta-url.supabase.co/functions/v1/stripe-webhook` (tu devras créer une fonction Supabase edge pour ça)
4. Sélectionne les événements :
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.deleted`
5. Copie le **Signing secret** (commence par `whsec_...`)

---

## 🚀 ÉTAPE 4 : TESTER L'APP

Une fois que tu as fait tout ça :

1. Ouvre **`index.html`** dans ton navigateur
2. Complète l'onboarding
3. Clique sur le CTA de paiement
4. Teste avec la carte **4242 4242 4242 4242**
5. Si tout fonctionne, tu devrais être redirigé vers **`dashboard.html`** avec tes vraies données chargées depuis Supabase

---

## 🐛 EN CAS DE PROBLÈME

### L'app ne charge pas les données Supabase

- Vérifie que tu as bien ajouté la librairie Supabase (`<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`)
- Vérifie que les clés sont correctes (URL + anon key)
- Ouvre la console du navigateur (F12) et regarde les erreurs

### Le paiement Stripe ne fonctionne pas

- Vérifie que tu utilises la bonne clé publique (`pk_test_...` ou `pk_live_...`)
- Vérifie que le produit est bien créé dans Stripe
- Utilise la carte de test **4242 4242 4242 4242**

### Les tables Supabase ne sont pas créées

- Va dans **SQL Editor** et exécute le script SQL fourni à l'étape 1.4
- Vérifie qu'il n'y a pas d'erreur dans la console Supabase

---

## 📌 RÉCAP RAPIDE

1. **Supabase** : Créer projet → Récupérer URL + clé → Créer tables → Intégrer dans HTML
2. **Stripe** : Créer compte → Récupérer clé publique → Créer produit → Intégrer dans HTML
3. **Tester** : Ouvrir `index.html` → Compléter onboarding → Tester paiement → Dashboard fonctionne

---

## 🎉 C'EST FAIT !

Une fois que tout est configuré, tu as :

- ✅ Une app complète avec onboarding
- ✅ Un système d'authentification (Supabase)
- ✅ Un tableau de bord personnalisé
- ✅ Un chat IA (simulé pour l'instant, mais prêt à être connecté)
- ✅ Un tableau de progression
- ✅ Un système de paiement (Stripe)

**Prochaines étapes :**

1. Connecter une vraie IA au chat (OpenAI, Claude, Gemini, etc.)
2. Ajouter des exercices réels dans la base de données
3. Créer un système de notifications
4. Déployer sur un vrai domaine (Vercel, Netlify, etc.)

Si tu as des questions, n'hésite pas ! 🚀

— Viktor
