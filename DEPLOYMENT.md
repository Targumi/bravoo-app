# DÉPLOIEMENT — BRAVOO WEB APP

## 🎯 Objectif

Déployer l'application Bravoo sur un sous-domaine ou sous-répertoire du site principal.

## 📍 Options de déploiement

### Option 1 : Sous-domaine (RECOMMANDÉ)
**URL** : `app.bravoo.fr`

**Avantages** :
- Séparation propre site vitrine / app
- Facile à gérer séparément
- Performances optimales

**Étapes** :
1. Créer un enregistrement DNS A/CNAME pour `app.bravoo.fr`
2. Configurer un nouveau site sur ton hébergeur
3. Uploader `index.html` à la racine
4. Configurer HTTPS (Let's Encrypt)

### Option 2 : Sous-répertoire
**URL** : `bravoo.fr/app`

**Avantages** :
- Même domaine
- Pas de config DNS supplémentaire

**Étapes** :
1. Créer un dossier `/app` à la racine du site
2. Uploader `index.html` dans `/app/`
3. Accessible via `bravoo.fr/app/`

### Option 3 : Remplacer la page d'accueil
**URL** : `bravoo.fr`

**⚠️ ATTENTION** : Cela remplace le site vitrine actuel.

**Étapes** :
1. Renommer l'ancien `index.html` en `vitrine.html`
2. Uploader le nouveau `index.html` à la racine
3. Le site vitrine sera accessible via `bravoo.fr/vitrine.html`

## 🔗 Intégration avec le site vitrine

Si tu gardes le site vitrine à `bravoo.fr` et l'app à `app.bravoo.fr`, voici comment les lier :

### Sur le site vitrine (bravoo.fr)
Modifier le bouton CTA :
```html
<a href="https://app.bravoo.fr" class="btn btn-primary">Commencer maintenant</a>
```

### Dans l'app (app.bravoo.fr)
Ajouter un lien retour (si besoin) :
```html
<a href="https://bravoo.fr" style="color: var(--text-secondary);">← Retour au site</a>
```

## 🚀 Déploiement rapide (Vercel / Netlify)

Si tu veux un déploiement ultra-simple :

### Vercel
1. Installer Vercel CLI : `npm i -g vercel`
2. Dans `/bravoo-app/` : `vercel --prod`
3. Configurer le domaine custom : `app.bravoo.fr`

### Netlify
1. Drag & drop le fichier `index.html` sur [netlify.com/drop](https://app.netlify.com/drop)
2. Configurer le domaine custom : `app.bravoo.fr`

## 📊 Suivi & Analytics

Pour tracker les conversions, ajouter **avant** `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Pour tracker les événements clés :
```javascript
// Exemple : track quand l'utilisateur arrive au paywall
gtag('event', 'paywall_view', {
  'event_category': 'conversion',
  'event_label': 'Paywall affiché'
});
```

## 🔒 Configuration HTTPS

**IMPORTANT** : L'app doit être en HTTPS pour :
- Sécuriser les données utilisateur (email, mot de passe)
- Être compatible avec le site principal (éviter mixed content)
- Améliorer le SEO et la confiance

La plupart des hébergeurs proposent Let's Encrypt gratuit.

## 🧪 Test avant mise en prod

1. Déployer sur un sous-domaine de test : `test.bravoo.fr` ou `staging.bravoo.fr`
2. Tester le flow complet sur mobile et desktop
3. Vérifier que le timer et les places persistent
4. Vérifier que le paywall CTA affiche bien l'alert
5. Une fois validé → déployer sur `app.bravoo.fr`

## 📱 Optimisations post-déploiement

### Performance
- [ ] Activer la compression gzip/brotli sur le serveur
- [ ] Activer le cache navigateur (headers `Cache-Control`)
- [ ] Minifier le HTML (optionnel, mais peut économiser ~20%)

### SEO
- [ ] Ajouter `<meta name="description" content="...">`
- [ ] Ajouter `<meta property="og:title" content="...">`
- [ ] Ajouter `<meta property="og:image" content="...">`
- [ ] Ajouter `robots.txt` si nécessaire

### Monitoring
- [ ] Configurer Google Analytics ou Plausible
- [ ] Configurer un outil d'erreur (Sentry, LogRocket)
- [ ] Tester régulièrement le flow complet

## 🎯 Prochaines étapes

Une fois l'app déployée et testée :
1. **Intégrer le paiement** (Stripe, PayPal, etc.)
2. **Créer le backend** (Supabase, Firebase, ou custom)
3. **Implémenter le dashboard** (exercices, progression, coach IA)
4. **Tester avec de vrais utilisateurs**
5. **Itérer selon les retours**

---

**Note** : Le fichier `index.html` est standalone, il n'a besoin d'aucune dépendance. Il fonctionne tel quel, même sans serveur (double-clic sur le fichier → s'ouvre dans le navigateur).
