# BRAVOO WEB APP

## 🎯 Mission accomplie

L'application Bravoo est prête. C'est un fichier standalone `index.html` qui reprend exactement le flow du prototype avec le branding du site bravoo.fr.

## ✅ Vérifications effectuées

1. ✅ Tous les textes sont lisibles (blanc/gris sur noir)
2. ✅ Aucun bouton ne sort de l'écran sur mobile (max-width 460px)
3. ✅ Les transitions sont fluides (GPU-only animations)
4. ✅ Le quiz fonctionne (5 questions, feedback visuel vert/rouge)
5. ✅ Le timer persiste via localStorage
6. ✅ Le nombre de places persiste via localStorage
7. ✅ L'email est validé (doit contenir @)
8. ✅ Le mot de passe est validé (6+ caractères)
9. ✅ Le bouton "Continuer" est désactivé sans sélection
10. ✅ Le logo ne se coupe pas (overflow visible)
11. ✅ Visuellement identique au site bravoo.fr

## 🚀 Comment tester

1. Ouvre `index.html` dans un navigateur
2. Le flow complet :
   - Prénom (confettis CSS au submit)
   - Classe (6ème → Terminale, BTS, Prépa, Code, Langues, Orthographe, Primaire)
   - Moyenne (validation 0-20)
   - Matières fortes (sélection multiple)
   - Matières faibles (au moins 1)
   - Objectif (dynamique selon moyenne)
   - Loading quiz (6 messages animés)
   - Quiz (5 questions avec feedback immédiat)
   - Récap app (score + 3 bullets)
   - Email (validation @)
   - Password (min 6 chars)
   - Loading profil (barre circulaire 0→100%)
   - **Paywall** (timer 72h, places limitées, prix barré, CTA pulsant)

## 🎨 Branding exact

- Fond : `#121212` (noir Spotify)
- Surfaces : `#181818`
- CTA : `#1DB954` (vert Spotify)
- Accent : `#F5C518` (jaune doré)
- Texte : `#FFFFFF` / `#B3B3B3`
- Font : Plus Jakarta Sans (400-900)
- Logo : "Brav" blanc + "oo" vert gradient + ★ dorée

## ⚡ Effets WOW

- Particules flottantes en background
- Barre de progression shimmer
- Transitions slide + blur entre étapes
- Input avec glow vert au focus
- Confettis CSS à l'étape prénom
- Cards avec bounce stagger
- Cercle SVG animé pour les loadings
- Quiz avec feedback visuel
- Paywall avec prix barré animé, timer countdown, glow pulsant

## 📱 Mobile-first

Tout est responsive :
- Desktop : max-width 460px centré
- Mobile : full width avec padding 16px
- GPU-only animations (transform + opacity)
- Fonts et tailles adaptatives

## 🔒 Contraintes respectées

- ✅ ZERO lib externe (HTML/CSS/JS pur)
- ✅ ZERO inline styles (tout en CSS)
- ✅ Un seul fichier index.html
- ✅ Mobile-first
- ✅ GPU-only animations
- ✅ Plus Jakarta Sans uniquement
- ✅ Tutoiement partout
- ✅ Logo Bravoo identique au site

## 🎯 Objectif atteint

Quand un utilisateur clique "Commencer" sur bravoo.fr et arrive sur l'app, il ne sent **AUCUNE rupture**. C'est la même marque, la même expérience, la même qualité. Et l'onboarding est tellement bien fait qu'il paie à la fin sans hésiter.

---

**Viktor** — Mars 2026
