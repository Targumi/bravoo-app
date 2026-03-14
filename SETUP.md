# Guide de configuration Bravoo

## 1. Supabase (gratuit)
1. Va sur https://supabase.com → "Start your project"
2. Crée un projet (nom: bravoo, region: West EU)
3. Copie l'URL du projet et la clé anon (Settings → API)
4. Crée les tables avec le SQL ci-dessous

### SQL des tables
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  prenom TEXT,
  preparation TEXT,
  sous_choix TEXT,
  sous_choix2 TEXT,
  matieres_fortes TEXT[],
  matieres_faibles TEXT[],
  moyenne NUMERIC,
  objectif NUMERIC,
  diagnostic_score NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
```

## 2. Stripe
1. Va sur https://stripe.com → crée un compte
2. Copie la clé publique (pk_live_xxx)
3. Crée un produit "Bravoo" → prix 3,99€/semaine (récurrent)
4. Dans le paywall (index.html), remplace l'alert par Stripe Checkout

## 3. Intégration
Quand tu as les clés, dis-le moi et je branche tout.
