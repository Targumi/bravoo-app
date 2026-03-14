# TEST CHECKLIST — BRAVOO WEB APP

## ✅ Tests à effectuer

### 1. Flow complet
- [ ] Ouvrir `index.html` dans un navigateur
- [ ] Entrer un prénom → vérifier les confettis CSS
- [ ] Sélectionner une classe (Primaire, 6ème, Lycée, BTS, etc.)
- [ ] Entrer une moyenne (ex: 12.5) → vérifier la validation
- [ ] Sélectionner des matières fortes (peut être vide)
- [ ] Sélectionner des matières faibles (minimum 1)
- [ ] Choisir un objectif → vérifier qu'il est adapté à la moyenne
- [ ] Attendre le loading quiz (6 messages)
- [ ] Répondre au quiz (5 questions) → vérifier feedback vert/rouge
- [ ] Lire le récap app → vérifier le score %
- [ ] Entrer un email (doit contenir @)
- [ ] Entrer un mot de passe (min 6 caractères)
- [ ] Attendre le loading profil (barre 0→100%)
- [ ] Vérifier le paywall

### 2. Paywall
- [ ] Timer countdown 72h visible
- [ ] Timer persiste (recharger la page → le timer continue)
- [ ] Places restantes affichées (7-23)
- [ ] Places persistent (recharger la page → même nombre)
- [ ] Prix barré visible (12,99€)
- [ ] Prix promo visible (3,99€)
- [ ] Badge -70% visible
- [ ] Bouton CTA avec glow pulsant
- [ ] Cliquer sur le CTA → alert "Paiement en cours de configuration"

### 3. Design & Branding
- [ ] Fond noir (#121212)
- [ ] Cartes grises (#181818)
- [ ] Boutons verts (#1DB954)
- [ ] Texte blanc/gris lisible
- [ ] Logo "Bravoo" avec étoile dorée
- [ ] Font Plus Jakarta Sans chargée
- [ ] Particules flottantes visibles en background
- [ ] Barre de progression shimmer en haut

### 4. Responsive
- [ ] Tester sur mobile (< 480px)
- [ ] Tester sur tablette (480-768px)
- [ ] Tester sur desktop
- [ ] Tous les boutons sont cliquables
- [ ] Aucun texte ne sort de l'écran
- [ ] Les inputs sont utilisables au tactile

### 5. Animations
- [ ] Transitions fluides entre étapes
- [ ] Cards apparaissent avec bounce stagger
- [ ] Input focus → glow vert
- [ ] Quiz choice hover → slide à droite
- [ ] Paywall CTA → glow pulsant
- [ ] Spinner de loading tourne
- [ ] Barre circulaire du loading profil s'anime

### 6. Validations
- [ ] Prénom vide → bouton désactivé
- [ ] Email sans @ → bouton désactivé
- [ ] Mot de passe < 6 chars → bouton désactivé
- [ ] Moyenne hors 0-20 → bouton désactivé
- [ ] Matières faibles vides → bouton désactivé

### 7. LocalStorage
- [ ] Ouvrir les DevTools → Application → Local Storage
- [ ] Vérifier `bravoo_paywall_timer` (timestamp)
- [ ] Vérifier `bravoo_paywall_places` (nombre entre 7 et 23)
- [ ] Recharger la page → les valeurs persistent

## 🐛 Bugs potentiels à surveiller

- [ ] Logo étoile se coupe sur petit mobile
- [ ] Timer countdown affiche NaN
- [ ] Confettis ne disparaissent pas
- [ ] Quiz bloqué après la dernière question
- [ ] Barre de progression dépasse 100%
- [ ] Messages de loading se superposent
- [ ] Bouton paywall ne réagit pas au clic

## 📊 Résultats

- **Tests passés** : __ / 50
- **Bugs trouvés** : __
- **Statut** : ❌ En cours | ✅ Validé

---

**Note** : Si un bug est trouvé, noter précisément :
- Étape où ça arrive
- Navigateur + version
- Taille d'écran
- Comportement attendu vs obtenu
