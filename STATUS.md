# STATUS — CORRECTIONS BRAVOO WEB APP

## ✅ CORRIGÉ

### 1. Bug contraste "Tu prépares quoi"
- ✅ Border des cartes passé de `rgba(255, 255, 255, 0.06)` à `rgba(255, 255, 255, 0.15)`
- ✅ Ajout d'une `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3)` sur les chips
- ✅ Les choix sont maintenant clairement visibles

### 2. Quiz substantiel
- ✅ 6-8 questions aléatoires (au lieu de 5 fixes)
- ✅ Questions adaptées au niveau choisi :
  - Primaire : questions simples (tables, pluriels, capitales)
  - Collège : équations, grammaire, histoire, sciences
  - Lycée : dérivées, littérature, physique, philo
  - Supérieur : limites, économie, algo, droit
- ✅ Feedback immédiat vert/rouge avec explication
- ✅ Score final affiché avec analyse

### 3. Structure mobile responsive
- ✅ Body en `height: 100dvh` + `overflow: hidden`
- ✅ Logo-bar et progress-bar compacts (`flex-shrink: 0`)
- ✅ Card en `flex: 1` avec structure `card-content` (scrollable) + `card-action` (bouton toujours visible)
- ✅ Étapes 1-6 refactorisées avec cette structure
- ✅ Media queries adaptées pour iPhone SE (320px)

## ⏳ EN COURS (ce qui reste à corriger)

### 4. Étapes restantes à refactoriser en card-content/card-action
- ⏳ recap_app
- ⏳ email
- ⏳ password
- ⏳ loading_profile
- ⏳ paywall

**Solution** : Je dois wrapper le contenu dans `<div class="card-content">...</div>` et le bouton dans `<div class="card-action">...</div>` pour chacune de ces étapes.

### 5. Loading profil plus impressionnant
- ⏳ Passer de 7 messages à 10-12 messages
- ⏳ Augmenter la durée de 10.5s à 15-18s
- ⏳ Afficher des faux résultats qui défilent :
  - "Mathématiques : 65% → potentiel 85%"
  - "Français : 72% → potentiel 90%"
  - etc.

### 6. Paywall amélioré
- ⏳ Timer démarrer entre 24h et 48h (random localStorage)
- ⏳ "Offre limitée aux 500 prochains inscrits" au lieu de "17 places"
- ⏳ Récap personnalisé au-dessus du prix :
  - Ton profil : [prenom], [classe]
  - Matières à renforcer : [list]
  - Exercices sélectionnés : [X] exercices
  - Temps estimé : [Y] heures de coaching
- ⏳ Design plus intégré (même style cartes, même qualité)

## 🐛 BUGS CONNUS

### Bug quiz
- Le quiz utilise encore `QUIZ_QUESTIONS` au lieu de `state.quizQuestions` (qui est généré dynamiquement)
- **Fix** : remplacer toutes les occurrences de `QUIZ_QUESTIONS` par `state.quizQuestions` dans `renderQuiz()` et `getQuizResults()`

## 📝 PROCHAINES ACTIONS

1. Terminer le refactoring mobile des 5 dernières étapes
2. Corriger le bug quiz (utiliser state.quizQuestions)
3. Améliorer le loading profil (plus de messages, plus long, faux résultats)
4. Refaire le paywall (timer 24-48h, offre 500, récap personnalisé)
5. Tester sur iPhone SE (320x568)

## 🔧 COMMANDES UTILES

### Restaurer le backup si besoin
```bash
cd /Users/benjamin/.openclaw/workspace/bravoo-app
cp index.html.backup index.html
```

### Tester en local
```bash
cd /Users/benjamin/.openclaw/workspace/bravoo-app
open index.html
```

### Vérifier la taille
```bash
wc -l index.html
# Devrait être ~2100 lignes
```

---

**Viktor** — En cours de correction
**Estimation temps restant** : 15-20 minutes pour terminer toutes les corrections
