// Pre-generated coaching sessions for Bravoo MVP
// Rotates daily based on day of year
// Each session: lesson + 5 quiz questions + conseil + next preview
const SESSIONS = {
  "brevet": [
    {
      "salutation": "C'est parti pour une super session aujourd'hui ! On va bosser sur un truc qui tombe souvent au brevet.",
      "lecon": {
        "titre": "Le theoreme de Pythagore et ses applications",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "Le theoreme de Pythagore, c'est l'un des outils les plus puissants que tu vas utiliser au brevet. Il te permet de calculer la longueur d'un cote dans un triangle rectangle quand tu connais les deux autres.\n\nLa formule est simple : dans un triangle rectangle ABC, ou C est l'angle droit, on a AB\u00b2 = AC\u00b2 + BC\u00b2. AB, c'est l'hypotenuse, le cote le plus long, celui qui est en face de l'angle droit.\n\nPrenons un exemple concret. Imagine un triangle rectangle avec AC = 3 cm et BC = 4 cm. Pour trouver AB, tu fais : AB\u00b2 = 3\u00b2 + 4\u00b2 = 9 + 16 = 25. Donc AB = \u221a25 = 5 cm.\n\nMais attention, au brevet on te demande aussi de faire l'inverse : verifier si un triangle est rectangle. Pour ca, tu calcules le carre du plus grand cote et tu le compares a la somme des carres des deux autres. Si c'est egal, le triangle est rectangle (c'est la reciproque du theoreme).\n\nExemple : un triangle avec des cotes de 5, 12 et 13. Le plus grand cote est 13. On verifie : 13\u00b2 = 169. Et 5\u00b2 + 12\u00b2 = 25 + 144 = 169. C'est egal, donc le triangle EST rectangle.\n\nDernier piege classique au brevet : on te donne parfois un probleme de la vie reelle (une echelle contre un mur, la diagonale d'un terrain) et tu dois reconnaitre que c'est du Pythagore. L'astuce : des que tu vois un angle droit et qu'on te demande une longueur, pense Pythagore !",
        "points_cles": ["AB\u00b2 = AC\u00b2 + BC\u00b2 (C = angle droit, AB = hypotenuse)", "L'hypotenuse est TOUJOURS le plus grand cote (en face de l'angle droit)", "La reciproque permet de VERIFIER si un triangle est rectangle", "Au brevet : reperer l'angle droit dans les problemes concrets"]
      },
      "quiz": [
        {"question": "Dans un triangle rectangle, l'hypotenuse mesure toujours...", "options": ["A) Le cote le plus court", "B) Le cote en face de l'angle droit", "C) Le cote adjacent a l'angle droit", "D) N'importe quel cote"], "reponse": "B", "explication": "L'hypotenuse est toujours le cote oppose a l'angle droit, et c'est aussi le plus grand cote du triangle rectangle."},
        {"question": "Un triangle a pour cotes 6, 8 et 10. Est-il rectangle ?", "options": ["A) Non, car 6 + 8 = 14", "B) Oui, car 6\u00b2 + 8\u00b2 = 10\u00b2", "C) On ne peut pas savoir", "D) Oui, car 6 + 8 > 10"], "reponse": "B", "explication": "6\u00b2 + 8\u00b2 = 36 + 64 = 100 = 10\u00b2. L'egalite est verifiee, donc le triangle est rectangle."},
        {"question": "AC = 5 cm, BC = 12 cm, angle C = 90\u00b0. Que vaut AB ?", "options": ["A) 17 cm", "B) 13 cm", "C) 7 cm", "D) 14 cm"], "reponse": "B", "explication": "AB\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169. Donc AB = \u221a169 = 13 cm."},
        {"question": "Une echelle de 5 m est posee contre un mur. Son pied est a 3 m du mur. A quelle hauteur touche-t-elle le mur ?", "options": ["A) 2 m", "B) 4 m", "C) 8 m", "D) 3,5 m"], "reponse": "B", "explication": "h\u00b2 + 3\u00b2 = 5\u00b2, donc h\u00b2 = 25 - 9 = 16, h = 4 m."},
        {"question": "Un triangle a pour cotes 3, 5 et 7. Est-il rectangle ?", "options": ["A) Oui", "B) Non, car 3\u00b2 + 5\u00b2 \u2260 7\u00b2", "C) On ne peut pas savoir", "D) Oui, car 3 + 5 > 7"], "reponse": "B", "explication": "3\u00b2 + 5\u00b2 = 9 + 25 = 34. Et 7\u00b2 = 49. 34 \u2260 49, donc le triangle n'est PAS rectangle."}
      ],
      "conseil": "Le theoreme de Pythagore tombe presque chaque annee au brevet. Entraine-toi a le reconnaitre dans les problemes concrets : echelles, terrains, diagonales...",
      "prochaine_session": "Demain on attaque les equations du premier degre."
    },
    {
      "salutation": "Pret(e) pour une session efficace ? Aujourd'hui on va revoir un classique du brevet de francais !",
      "lecon": {
        "titre": "Les figures de style essentielles",
        "matiere": "Francais",
        "duree": "15 min",
        "contenu": "Les figures de style reviennent systematiquement au brevet de francais. Les reconnaitre te permet de gagner des points facilement.\n\nLA METAPHORE : une comparaison SANS mot de comparaison. Exemple : \"Cet homme est un lion.\" On ne dit pas \"comme un lion\", on dit directement qu'il EST un lion.\n\nLA COMPARAISON : comme la metaphore mais AVEC un outil de comparaison. Exemple : \"Il court comme un lion.\" Le mot \"comme\" est present.\n\nL'HYPERBOLE : une exageration. Exemple : \"Je meurs de faim\" ou \"Il y avait un million de personnes.\"\n\nL'ANAPHORE : la repetition d'un mot en debut de phrase ou de vers. Exemple : \"Moi president, je ferai... Moi president, je changerai...\" L'effet : ca martele l'idee.\n\nL'ANTITHESE : l'opposition de deux idees contraires. Exemple : \"Je vis, je meurs\" (Louise Labe). L'effet : un contraste frappant.\n\nLA PERSONNIFICATION : donner des caracteristiques humaines a un objet ou un animal. Exemple : \"Le vent hurlait.\"\n\nAstuce pour le brevet : quand on te demande la figure de style, pose-toi ces questions dans l'ordre : 1) Y a-t-il une comparaison avec/sans outil ? 2) Y a-t-il une exageration ? 3) Y a-t-il une repetition ? 4) Y a-t-il une opposition ?",
        "points_cles": ["Metaphore = comparaison SANS outil / Comparaison = AVEC outil (comme, tel...)", "Hyperbole = exageration pour renforcer l'effet", "Anaphore = repetition en debut de phrase pour marteler une idee", "Personnification = donner des traits humains a un objet/animal"]
      },
      "quiz": [
        {"question": "\"Il est rapide comme l'eclair\" est...", "options": ["A) Une metaphore", "B) Une comparaison", "C) Une hyperbole", "D) Une anaphore"], "reponse": "B", "explication": "Le mot \"comme\" est present, c'est donc une comparaison."},
        {"question": "\"La nuit devorait la ville\" est...", "options": ["A) Une comparaison", "B) Une antithese", "C) Une personnification", "D) Une hyperbole"], "reponse": "C", "explication": "\"Devorer\" est une action humaine attribuee a \"la nuit\". C'est une personnification."},
        {"question": "\"J'ai mille choses a faire\" est...", "options": ["A) Une metaphore", "B) Une anaphore", "C) Une antithese", "D) Une hyperbole"], "reponse": "D", "explication": "\"Mille choses\" est une exageration evidente. C'est une hyperbole."},
        {"question": "\"Paris est une fete\" est...", "options": ["A) Une comparaison", "B) Une metaphore", "C) Une anaphore", "D) Une personnification"], "reponse": "B", "explication": "Pas de mot de comparaison. Paris est directement assimile a une fete. C'est une metaphore."},
        {"question": "\"Toujours aimer, toujours souffrir, toujours mourir\" est...", "options": ["A) Une hyperbole", "B) Une personnification", "C) Une anaphore", "D) Une antithese"], "reponse": "C", "explication": "\"Toujours\" est repete en debut de chaque element. C'est une anaphore."}
      ],
      "conseil": "Les figures de style rapportent des points faciles si tu les connais bien. Lis un texte par jour et essaie de les reperer.",
      "prochaine_session": "Demain on attaque la Seconde Guerre mondiale."
    },
    {
      "salutation": "Salut ! Aujourd'hui on s'attaque a un chapitre d'histoire qui tombe tres souvent au brevet.",
      "lecon": {
        "titre": "La Seconde Guerre mondiale (1939-1945)",
        "matiere": "Histoire-Geographie",
        "duree": "15 min",
        "contenu": "La Seconde Guerre mondiale, c'est LE chapitre le plus teste au brevet. Voici les dates et concepts cles.\n\nLES GRANDES PHASES :\n1) 1939-1941 : Victoires de l'Axe. L'Allemagne envahit la Pologne (1er sept. 1939), puis la France (juin 1940). La France est coupee en deux : zone occupee au Nord, regime de Vichy au Sud dirige par Petain qui collabore.\n\n2) 1941-1942 : La guerre devient mondiale. Juin 1941 : Hitler attaque l'URSS. Dec. 1941 : Pearl Harbor, les USA entrent en guerre.\n\n3) 1942-1945 : Victoires des Allies. Stalingrad (fev. 1943) = tournant a l'Est. Debarquement en Normandie (6 juin 1944). 8 mai 1945 : capitulation allemande. Aout 1945 : bombes atomiques, capitulation du Japon.\n\nLA FRANCE DANS LA GUERRE :\n- Petain signe l'armistice le 22 juin 1940. Vichy collabore (rafle du Vel d'Hiv, 16-17 juillet 1942 : 13 000 juifs arretes).\n- De Gaulle lance l'Appel du 18 juin 1940. Jean Moulin cree le CNR en 1943.\n- Liberation de Paris : 25 aout 1944.\n\nLE GENOCIDE (LA SHOAH) :\nGenocide planifie : lois raciales, ghettos, camps d'extermination (Auschwitz-Birkenau). 6 millions de juifs assassines.",
        "points_cles": ["1939 : invasion Pologne / 1940 : defaite France / 1941 : URSS + USA entrent en guerre", "Vichy = collaboration (Petain) vs Resistance = de Gaulle + Jean Moulin (CNR)", "Tournants : Stalingrad (1943) + Debarquement Normandie (6 juin 1944)", "Shoah : genocide planifie, 6 millions de victimes, Auschwitz = symbole"]
      },
      "quiz": [
        {"question": "Quelle date marque le debut de la Seconde Guerre mondiale ?", "options": ["A) 1er septembre 1939", "B) 6 juin 1944", "C) 22 juin 1940", "D) 8 mai 1945"], "reponse": "A", "explication": "Le 1er septembre 1939, l'Allemagne envahit la Pologne."},
        {"question": "Qui lance l'Appel du 18 juin 1940 ?", "options": ["A) Jean Moulin", "B) Philippe Petain", "C) Charles de Gaulle", "D) Winston Churchill"], "reponse": "C", "explication": "Le general de Gaulle appelle les Francais a continuer le combat depuis Londres."},
        {"question": "Que se passe-t-il le 6 juin 1944 ?", "options": ["A) Capitulation allemande", "B) Debarquement en Normandie", "C) Bombe sur Hiroshima", "D) Liberation de Paris"], "reponse": "B", "explication": "Le D-Day : les Allies debarquent en Normandie. Debut de la liberation de la France."},
        {"question": "La rafle du Vel d'Hiv (1942) montre que...", "options": ["A) La Resistance etait forte a Paris", "B) La police francaise a participe a la persecution des juifs", "C) Les Allies ont bombarde Paris", "D) De Gaulle etait a Paris"], "reponse": "B", "explication": "La police francaise a arrete plus de 13 000 juifs sur ordre du regime de Vichy."},
        {"question": "Combien de juifs ont ete victimes de la Shoah ?", "options": ["A) 1 million", "B) 3 millions", "C) 6 millions", "D) 10 millions"], "reponse": "C", "explication": "La Shoah a cause la mort de 6 millions de juifs europeens."}
      ],
      "conseil": "Retiens les dates cles (1940, 1942, 1944, 1945) et les personnages (Petain vs de Gaulle). C'est souvent une question de mise en relation entre documents.",
      "prochaine_session": "Demain on revoit les fractions et les pourcentages."
    },
    {
      "salutation": "Aujourd'hui on attaque un sujet mega utile : les equations ! Promis, c'est plus simple que ca en a l'air.",
      "lecon": {
        "titre": "Les equations du premier degre",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "Une equation, c'est comme une balance : ce qui est a gauche du signe = doit toujours etre egal a ce qui est a droite. Ton objectif : trouver la valeur de x.\n\nLA METHODE :\n1) Tu isoles x d'un cote en faisant passer les autres termes de l'autre cote.\n2) Quand un nombre change de cote, il change de signe (+ devient -, et inversement).\n3) Quand un nombre multiplie x, tu divises des deux cotes pour isoler x.\n\nEXEMPLE 1 : 3x + 5 = 20\nEtape 1 : On fait passer le 5 de l'autre cote. 3x = 20 - 5 = 15\nEtape 2 : On divise par 3. x = 15/3 = 5\nVerification : 3(5) + 5 = 15 + 5 = 20. C'est bon !\n\nEXEMPLE 2 : 4x - 7 = 2x + 3\nEtape 1 : On regroupe les x a gauche. 4x - 2x = 3 + 7\nEtape 2 : On simplifie. 2x = 10\nEtape 3 : x = 10/2 = 5\n\nEXEMPLE 3 (avec fractions) : x/3 + 2 = 5\nEtape 1 : x/3 = 5 - 2 = 3\nEtape 2 : x = 3 x 3 = 9\n\nPIEGES CLASSIQUES AU BREVET :\n- Oublier de changer le signe quand on fait passer un terme\n- Ne pas distribuer correctement : 2(x + 3) = 2x + 6, pas 2x + 3\n- Toujours verifier ta reponse en la remettant dans l'equation de depart !",
        "points_cles": ["Changer de cote = changer de signe (+ devient -, x devient /)", "Toujours faire la meme operation des DEUX cotes", "Distribuer correctement : 2(x+3) = 2x+6", "TOUJOURS verifier en remplacant x dans l'equation"]
      },
      "quiz": [
        {"question": "Resous : 2x + 4 = 10", "options": ["A) x = 3", "B) x = 7", "C) x = 4", "D) x = 2"], "reponse": "A", "explication": "2x = 10 - 4 = 6, donc x = 6/2 = 3. Verification : 2(3) + 4 = 10."},
        {"question": "Resous : 5x - 3 = 2x + 9", "options": ["A) x = 2", "B) x = 4", "C) x = 3", "D) x = 6"], "reponse": "B", "explication": "5x - 2x = 9 + 3, donc 3x = 12, x = 4. Verification : 5(4) - 3 = 17, 2(4) + 9 = 17."},
        {"question": "Developpe : 3(x - 2)", "options": ["A) 3x - 2", "B) 3x - 6", "C) x - 6", "D) 3x + 6"], "reponse": "B", "explication": "On multiplie chaque terme dans la parenthese par 3 : 3 x x = 3x, 3 x (-2) = -6. Donc 3x - 6."},
        {"question": "Resous : x/4 = 3", "options": ["A) x = 7", "B) x = 3/4", "C) x = 12", "D) x = 1"], "reponse": "C", "explication": "Si x/4 = 3, alors x = 3 x 4 = 12. Verification : 12/4 = 3."},
        {"question": "Resous : -2x + 8 = 0", "options": ["A) x = -4", "B) x = 4", "C) x = 8", "D) x = -8"], "reponse": "B", "explication": "-2x = -8, donc x = -8 / -2 = 4. Verification : -2(4) + 8 = -8 + 8 = 0."}
      ],
      "conseil": "Les equations tombent a CHAQUE brevet. Le secret : toujours verifier ta reponse a la fin. Ca prend 10 secondes et ca t'evite de perdre des points betes.",
      "prochaine_session": "Demain on passe aux proportionnalite et pourcentages."
    },
    {
      "salutation": "Hello ! Aujourd'hui on s'attaque a un sujet qui fait peur mais qui est en fait tres logique.",
      "lecon": {
        "titre": "Proportionnalite et pourcentages",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "La proportionnalite et les pourcentages, ca tombe a chaque brevet. La bonne nouvelle : c'est de la logique pure, pas besoin d'apprendre des formules compliquees.\n\nLA PROPORTIONNALITE :\nDeux grandeurs sont proportionnelles quand on peut passer de l'une a l'autre en multipliant toujours par le meme nombre (le coefficient).\n\nExemple : 3 kg de pommes coutent 6 euros. 5 kg coutent combien ?\nCoefficient : 6/3 = 2 euros/kg. Donc 5 kg = 5 x 2 = 10 euros.\n\nLE PRODUIT EN CROIX :\nSi a/b = c/d, alors a x d = b x c.\nExemple : 3/6 = 5/x. Donc 3 x x = 6 x 5 = 30. x = 30/3 = 10.\n\nLES POURCENTAGES :\nUn pourcentage, c'est \"sur 100\". 25% = 25/100 = 0,25.\n\nCalculer un pourcentage d'un nombre :\n30% de 200 = (30/100) x 200 = 0,3 x 200 = 60.\n\nAugmentation de 20% :\nPrix initial x 1,20 = nouveau prix.\nExemple : 50 euros + 20% = 50 x 1,20 = 60 euros.\n\nDiminution de 15% :\nPrix initial x 0,85 = nouveau prix.\nExemple : 80 euros - 15% = 80 x 0,85 = 68 euros.\n\nCalculer le pourcentage d'evolution :\n((Valeur finale - Valeur initiale) / Valeur initiale) x 100\nExemple : de 40 a 50 = ((50-40)/40) x 100 = 25% d'augmentation.",
        "points_cles": ["Proportionnalite = meme coefficient multiplicateur partout", "Produit en croix : a/b = c/d => a x d = b x c", "Augmentation de X% = multiplier par (1 + X/100)", "Diminution de X% = multiplier par (1 - X/100)"]
      },
      "quiz": [
        {"question": "3 kg de fruits coutent 9 euros. Combien coutent 7 kg ?", "options": ["A) 18 euros", "B) 21 euros", "C) 24 euros", "D) 15 euros"], "reponse": "B", "explication": "Coefficient : 9/3 = 3 euros/kg. Donc 7 x 3 = 21 euros."},
        {"question": "Calcule 25% de 80.", "options": ["A) 25", "B) 20", "C) 15", "D) 30"], "reponse": "B", "explication": "25% de 80 = (25/100) x 80 = 0,25 x 80 = 20."},
        {"question": "Un article a 60 euros augmente de 10%. Son nouveau prix est :", "options": ["A) 70 euros", "B) 66 euros", "C) 54 euros", "D) 65 euros"], "reponse": "B", "explication": "60 x 1,10 = 66 euros."},
        {"question": "Un prix passe de 50 a 40 euros. Le pourcentage de baisse est :", "options": ["A) -10%", "B) -25%", "C) -20%", "D) -15%"], "reponse": "C", "explication": "((40-50)/50) x 100 = (-10/50) x 100 = -20%."},
        {"question": "Si 4/x = 8/12, que vaut x ?", "options": ["A) 6", "B) 3", "C) 8", "D) 24"], "reponse": "A", "explication": "Produit en croix : 4 x 12 = 8 x x, donc 48 = 8x, x = 6."}
      ],
      "conseil": "La proportionnalite est partout au brevet : en maths, en sciences et meme en geo (echelles de cartes). Maitrise le produit en croix, c'est ton meilleur ami.",
      "prochaine_session": "Demain on passe a la conjugaison et l'accord du participe passe."
    },
    {
      "salutation": "Salut ! Aujourd'hui on s'attaque a un truc qui fait perdre beaucoup de points au brevet : la conjugaison.",
      "lecon": {
        "titre": "Conjugaison et accord du participe passe",
        "matiere": "Francais",
        "duree": "15 min",
        "contenu": "Au brevet, la maitrise de la langue compte pour beaucoup de points. La conjugaison et les accords, c'est ce qui fait la difference entre une bonne et une tres bonne copie.\n\nLES TEMPS A CONNAITRE :\n- Present, imparfait, passe simple, futur, conditionnel present, subjonctif present.\n- Les plus testes : le passe simple (il vint, ils vinrent) et l'imparfait.\n\nLE PASSE SIMPLE (pieges) :\n- 1er groupe : il chanta, ils chanterent\n- 2e groupe : il finit, ils finirent\n- 3e groupe : il vint/il prit/il fut/il eut (irreguliers !)\n- Piege classique : \"il chanta\" vs \"il chantait\" (passe simple vs imparfait)\n\nL'ACCORD DU PARTICIPE PASSE :\n\n1) Avec ETRE : le participe s'accorde avec le SUJET.\n\"Elle est partie\" (feminine singulier)\n\"Ils sont partis\" (masculin pluriel)\n\n2) Avec AVOIR : le participe s'accorde avec le COD s'il est PLACE AVANT le verbe.\n\"J'ai mange la pomme\" (COD apres = pas d'accord)\n\"La pomme que j'ai mangee\" (COD \"que\" = \"la pomme\" place avant = accord feminin)\n\"Je les ai mangees\" (\"les\" = les pommes, COD avant = accord)\n\n3) Sans auxiliaire : le participe s'accorde comme un adjectif.\n\"Fatiguee, elle s'est couchee.\"",
        "points_cles": ["Passe simple : attention aux 3e groupe (il vint, il prit, il fut)", "Etre : accord avec le SUJET (elle est partie)", "Avoir : accord avec le COD seulement s'il est AVANT le verbe", "\"La pomme que j'ai mangEE\" = COD avant = accord"]
      },
      "quiz": [
        {"question": "\"Elle est (partir) hier.\" Quelle forme correcte ?", "options": ["A) Elle est parti", "B) Elle est partie", "C) Elle est partis", "D) Elle est partiee"], "reponse": "B", "explication": "Avec etre, on accorde avec le sujet. \"Elle\" = feminin singulier = partie."},
        {"question": "\"Les fleurs que j'ai (cueillir).\" Quelle forme ?", "options": ["A) cueilli", "B) cueillis", "C) cueillies", "D) cueillir"], "reponse": "C", "explication": "Avec avoir, le COD \"que\" (= les fleurs, feminin pluriel) est AVANT le verbe = accord."},
        {"question": "Quel est le passe simple de \"venir\" a la 3e personne ?", "options": ["A) Il vena", "B) Il venait", "C) Il vint", "D) Il venu"], "reponse": "C", "explication": "\"Venir\" au passe simple : il vint (3e groupe, irregulier)."},
        {"question": "\"J'ai mange les gateaux.\" Le participe s'accorde-t-il ?", "options": ["A) Oui : manges", "B) Non : mange", "C) Oui : mangees", "D) Oui : mangee"], "reponse": "B", "explication": "Le COD \"les gateaux\" est APRES le verbe. Avec avoir, pas d'accord quand le COD est apres."},
        {"question": "\"Ils (etre) venus hier.\" Forme correcte ?", "options": ["A) Ils sont venus", "B) Ils sont venu", "C) Ils sont venue", "D) Ils sont venu"], "reponse": "A", "explication": "Avec etre, accord avec le sujet. \"Ils\" = masculin pluriel = venus."}
      ],
      "conseil": "L'accord du participe passe avec avoir, c'est LE piege du brevet. Retiens la regle : avec avoir, on accorde seulement si le COD est AVANT. Sinon, jamais.",
      "prochaine_session": "Demain on passe a la geographie : les aires urbaines."
    },
    {
      "salutation": "C'est parti ! Aujourd'hui on revoit un chapitre de geo qui tombe regulierement au brevet.",
      "lecon": {
        "titre": "Les aires urbaines en France",
        "matiere": "Histoire-Geographie",
        "duree": "15 min",
        "contenu": "En France, 85% de la population vit dans une aire urbaine. C'est un sujet central au brevet de geographie.\n\nQU'EST-CE QU'UNE AIRE URBAINE ?\nC'est un ensemble compose de :\n1) Le pole urbain (la ville-centre + sa banlieue)\n2) La couronne periurbaine (les communes autour ou beaucoup d'habitants travaillent dans le pole)\n\nL'ETALEMENT URBAIN :\nDepuis les annees 1960, les villes s'etalent de plus en plus. Pourquoi ?\n- Le prix du foncier est moins cher en peripherie\n- Les familles veulent une maison avec jardin\n- La voiture permet de faire des trajets domicile-travail\n\nConsequences :\n- Augmentation des deplacements pendulaires (domicile-travail)\n- Artificialisation des sols (terres agricoles transformees en lotissements)\n- Pollution liee a la voiture\n- Creation de zones commerciales en peripherie\n\nLES GRANDES AIRES URBAINES FRANCAISES :\n- Paris : 12 millions d'habitants (aire urbaine), 1re en France et de loin\n- Lyon, Marseille, Toulouse, Bordeaux, Lille, Nice, Nantes...\n- La France est macrocephale : Paris concentre une part disproportionnee de la population et des activites\n\nLES TRANSPORTS :\n- LGV (lignes a grande vitesse) : relient les grandes metropoles\n- L'effet tunnel : les villes traversees par le TGV sans arret ne profitent pas du reseau\n- Enjeu : la mobilite durable (transports en commun, velo, covoiturage)",
        "points_cles": ["Aire urbaine = pole urbain (ville-centre + banlieue) + couronne periurbaine", "Etalement urbain : prix du foncier + maison individuelle + voiture", "France macrocephale : Paris domine largement (12M habitants)", "Enjeux : artificialisation des sols, mobilite durable, pollution"]
      },
      "quiz": [
        {"question": "Quel pourcentage de Francais vit dans une aire urbaine ?", "options": ["A) 50%", "B) 65%", "C) 85%", "D) 95%"], "reponse": "C", "explication": "Environ 85% de la population francaise vit dans une aire urbaine."},
        {"question": "La couronne periurbaine, c'est...", "options": ["A) Le centre-ville", "B) La banlieue", "C) Les communes autour du pole ou les gens travaillent dans la ville", "D) Les campagnes isolees"], "reponse": "C", "explication": "La couronne periurbaine = communes dont beaucoup d'habitants font des trajets pendulaires vers le pole urbain."},
        {"question": "L'etalement urbain est favorise par...", "options": ["A) Le prix eleve en centre-ville", "B) L'envie d'une maison avec jardin", "C) L'usage de la voiture", "D) Toutes ces reponses"], "reponse": "D", "explication": "Les trois facteurs se combinent : prix, cadre de vie et mobilite automobile."},
        {"question": "La France est dite \"macrocephale\" car...", "options": ["A) Elle a beaucoup de montagnes", "B) Paris est disproportionnement plus grande que les autres villes", "C) Elle a peu de villes", "D) Ses villes sont toutes de meme taille"], "reponse": "B", "explication": "Macrocephale = une \"grosse tete\". Paris domine nettement toutes les autres villes francaises."},
        {"question": "L'\"effet tunnel\" du TGV signifie que...", "options": ["A) Le TGV passe dans des tunnels", "B) Les villes traversees sans arret ne profitent pas du TGV", "C) Le TGV accelere dans les tunnels", "D) Les tunnels ralentissent le TGV"], "reponse": "B", "explication": "Les villes ou le TGV ne s'arrete pas ne beneficient pas de la dynamique economique liee a la grande vitesse."}
      ],
      "conseil": "En geo au brevet, on te demande souvent de decrire un document (carte, graphique). Pense a utiliser le vocabulaire : aire urbaine, periurbain, etalement, mobilite pendulaire.",
      "prochaine_session": "Demain on revoit les probabilites et les statistiques."
    },
    {
      "salutation": "Hey ! Les probas et les stats, c'est le genre de sujet qui rapporte gros au brevet si tu maitrises les bases.",
      "lecon": {
        "titre": "Probabilites et statistiques",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "Les probabilites et les statistiques tombent quasiment a chaque brevet. C'est un des sujets les plus accessibles si tu connais les definitions.\n\nLES PROBABILITES :\nLa probabilite d'un evenement = nombre de cas favorables / nombre de cas possibles.\n\nExemple : on lance un de a 6 faces. Probabilite d'obtenir un 3 = 1/6 (1 cas favorable sur 6 possibles).\nProbabilite d'obtenir un nombre pair (2, 4, 6) = 3/6 = 1/2.\n\nRegles :\n- Une probabilite est toujours entre 0 et 1 (ou entre 0% et 100%)\n- Probabilite de l'evenement contraire = 1 - P(evenement)\n- Si P(pluie) = 0,3, alors P(pas pluie) = 1 - 0,3 = 0,7\n\nLES STATISTIQUES :\n\nLA MOYENNE : somme des valeurs / nombre de valeurs.\nExemple : notes 12, 14, 10, 16. Moyenne = (12+14+10+16)/4 = 52/4 = 13.\n\nLA MEDIANE : valeur qui separe la serie en deux groupes egaux. On range les valeurs dans l'ordre et on prend celle du milieu.\nSerie : 5, 8, 10, 12, 15. Mediane = 10 (3e valeur sur 5).\nSi nombre pair de valeurs : on fait la moyenne des deux du milieu.\n\nL'ETENDUE : difference entre la plus grande et la plus petite valeur.\nSerie : 5, 8, 10, 12, 15. Etendue = 15 - 5 = 10.\n\nLES EFFECTIFS ET FREQUENCES :\n- Effectif = nombre de fois qu'une valeur apparait\n- Frequence = effectif / effectif total (en pourcentage ou en fraction)",
        "points_cles": ["Probabilite = cas favorables / cas possibles (toujours entre 0 et 1)", "Evenement contraire : P(A) = 1 - P(non-A)", "Moyenne = somme / nombre de valeurs", "Mediane = valeur du milieu (ranger dans l'ordre d'abord !)"]
      },
      "quiz": [
        {"question": "On tire une carte au hasard dans un jeu de 52 cartes. Quelle est la probabilite de tirer un as ?", "options": ["A) 1/52", "B) 4/52 = 1/13", "C) 1/4", "D) 13/52"], "reponse": "B", "explication": "Il y a 4 as dans un jeu de 52 cartes. P = 4/52 = 1/13."},
        {"question": "Notes : 8, 12, 14, 10, 16. Quelle est la moyenne ?", "options": ["A) 11", "B) 12", "C) 13", "D) 14"], "reponse": "B", "explication": "(8+12+14+10+16)/5 = 60/5 = 12."},
        {"question": "Serie : 3, 7, 9, 11, 15. Quelle est la mediane ?", "options": ["A) 7", "B) 9", "C) 11", "D) 10"], "reponse": "B", "explication": "5 valeurs rangees dans l'ordre. La mediane est la 3e valeur = 9."},
        {"question": "Si la probabilite de pluie est 0,4, quelle est la probabilite de beau temps ?", "options": ["A) 0,4", "B) 0,5", "C) 0,6", "D) 1,4"], "reponse": "C", "explication": "P(beau temps) = 1 - P(pluie) = 1 - 0,4 = 0,6."},
        {"question": "Serie : 2, 4, 6, 8. Quelle est l'etendue ?", "options": ["A) 4", "B) 6", "C) 5", "D) 8"], "reponse": "B", "explication": "Etendue = valeur max - valeur min = 8 - 2 = 6."}
      ],
      "conseil": "Au brevet, les probas sont souvent dans un contexte concret (jeu, tirage, sondage). Lis bien l'enonce pour identifier les cas favorables et les cas possibles.",
      "prochaine_session": "Demain on passe aux sciences : l'energie et ses transformations."
    },
    {
      "salutation": "Salut ! Aujourd'hui on fait des sciences. C'est un sujet tres concret, tu vas voir.",
      "lecon": {
        "titre": "L'energie et ses transformations",
        "matiere": "Sciences (Physique-Chimie)",
        "duree": "15 min",
        "contenu": "L'energie, c'est un theme transversal au brevet : ca peut tomber en physique-chimie ou en techno. Voici l'essentiel.\n\nLES FORMES D'ENERGIE :\n- Energie cinetique : l'energie du mouvement. Plus un objet est rapide et lourd, plus son energie cinetique est grande. Formule : Ec = (1/2) x m x v\u00b2\n- Energie potentielle : l'energie de position (hauteur). Un objet en hauteur a de l'energie potentielle de pesanteur.\n- Energie thermique : liee a la chaleur/temperature.\n- Energie electrique : transportee par le courant.\n- Energie chimique : stockee dans les liaisons (aliments, essence, batteries).\n- Energie lumineuse : transportee par la lumiere.\n- Energie nucleaire : dans le noyau des atomes.\n\nLES CONVERSIONS D'ENERGIE :\nL'energie se transforme d'une forme a une autre. Exemples :\n- Lampe : energie electrique -> energie lumineuse + thermique\n- Panneau solaire : energie lumineuse -> energie electrique\n- Moteur de voiture : energie chimique -> energie cinetique + thermique\n- Barrage : energie potentielle -> energie cinetique -> energie electrique\n\nPRINCIPE DE CONSERVATION :\nL'energie ne se cree pas, ne se detruit pas. Elle se TRANSFORME. Mais a chaque transformation, une partie est \"perdue\" sous forme de chaleur (energie thermique). C'est pour ca qu'aucune machine n'est efficace a 100%.\n\nLE RENDEMENT :\nRendement = (energie utile / energie totale consommee) x 100\nExemple : une ampoule LED a un rendement de 40% (40% en lumiere, 60% en chaleur).",
        "points_cles": ["7 formes d'energie : cinetique, potentielle, thermique, electrique, chimique, lumineuse, nucleaire", "L'energie se transforme mais ne se cree ni ne se detruit (conservation)", "A chaque conversion, une partie est perdue en chaleur", "Rendement = energie utile / energie totale x 100"]
      },
      "quiz": [
        {"question": "Un objet en mouvement possede de l'energie...", "options": ["A) Potentielle", "B) Cinetique", "C) Chimique", "D) Nucleaire"], "reponse": "B", "explication": "L'energie cinetique est l'energie liee au mouvement d'un objet."},
        {"question": "Un panneau solaire transforme l'energie...", "options": ["A) Electrique en lumineuse", "B) Chimique en electrique", "C) Lumineuse en electrique", "D) Thermique en electrique"], "reponse": "C", "explication": "Le panneau solaire capte la lumiere du soleil et la convertit en electricite."},
        {"question": "Pourquoi une ampoule chauffe-t-elle ?", "options": ["A) Elle est defectueuse", "B) Une partie de l'energie electrique est convertie en chaleur", "C) Elle produit trop de lumiere", "D) L'air la rechauffe"], "reponse": "B", "explication": "A chaque conversion d'energie, une partie est perdue sous forme de chaleur (energie thermique)."},
        {"question": "Un moteur de voiture a un rendement de 30%. Cela signifie que...", "options": ["A) 30% de l'essence est utilisee pour avancer", "B) 70% de l'essence est utilisee pour avancer", "C) Le moteur consomme 30 litres", "D) Le moteur perd 30% de puissance"], "reponse": "A", "explication": "Rendement 30% = seulement 30% de l'energie chimique de l'essence est convertie en mouvement. Le reste part en chaleur."},
        {"question": "L'energie se conserve signifie que...", "options": ["A) On peut creer de l'energie a partir de rien", "B) L'energie totale reste constante, elle se transforme", "C) L'energie ne change jamais de forme", "D) On ne peut pas utiliser l'energie"], "reponse": "B", "explication": "Principe de conservation : l'energie ne se cree pas, ne se detruit pas, elle se transforme d'une forme a une autre."}
      ],
      "conseil": "Au brevet, on te demande souvent de decrire une chaine energetique (fleches entre les formes d'energie). Entraine-toi avec des exemples concrets : lampe, velo, barrage.",
      "prochaine_session": "Demain on passe a la dictee et l'orthographe."
    },
    {
      "salutation": "Aujourd'hui on revoit les regles d'orthographe qui font la difference a la dictee du brevet !",
      "lecon": {
        "titre": "Les pieges classiques de la dictee du brevet",
        "matiere": "Francais",
        "duree": "15 min",
        "contenu": "La dictee du brevet vaut 10 points. Les correcteurs comptent les erreurs, chaque faute te coute des points. Voici les pieges les plus frequents et comment les eviter.\n\nLES HOMOPHONES GRAMMATICAUX :\n\n1) a/a : \"a\" = verbe avoir (remplace par \"avait\"). \"a\" = preposition.\n\"Il a mange\" (il avait mange = correct, donc \"a\")\n\"Il va a Paris\" (il va avait Paris = absurde, donc \"a\")\n\n2) est/et : \"est\" = verbe etre. \"et\" = conjonction (= \"et puis\").\n\"Il est grand et fort\" (il etre grand et puis fort)\n\n3) son/sont : \"son\" = possessif (= \"le sien\"). \"sont\" = verbe etre (= \"etaient\").\n\"Son chien\" vs \"Ils sont partis\" (ils etaient partis)\n\n4) ce/se : \"ce\" = demonstratif (ce livre = celui-la). \"se\" = pronom reflechi (il se lave).\n\n5) ou/ou : \"ou\" = choix. \"ou\" = lieu (= \"a l'endroit ou\").\n\nLES ACCORDS :\n\n- Le sujet est LOIN du verbe : \"Les eleves de la classe de 3eB participent\" (pas \"participe\")\n- Les sujets inverses : \"Dans la foret vivaient des animaux\" (pas \"vivait\")\n- Les adjectifs de couleur composes ne s'accordent PAS : \"des yeux bleu clair\" (pas \"bleus clairs\")\n\nASTUCE DICTEE :\nApres avoir ecrit, relis en te posant ces 3 questions pour CHAQUE phrase :\n1) Le verbe est-il bien accorde avec son sujet ?\n2) Les homophones sont-ils corrects ?\n3) Les accords adjectifs/noms sont-ils bons ?",
        "points_cles": ["a/a : remplace par \"avait\" pour verifier", "est/et : \"est\" = etre, \"et\" = et puis", "son/sont : \"son\" = le sien, \"sont\" = etaient", "Toujours accorder le verbe avec le sujet, meme s'il est loin"]
      },
      "quiz": [
        {"question": "\"Il __ mange une pomme.\" (a ou a ?)", "options": ["A) a (avec accent)", "B) a (sans accent)", "C) Les deux sont possibles", "D) Aucun des deux"], "reponse": "B", "explication": "\"Il avait mange\" fonctionne, donc c'est le verbe avoir = \"a\" sans accent."},
        {"question": "\"Les enfants de l'ecole (jouer) dans la cour.\" Forme correcte ?", "options": ["A) joue", "B) joues", "C) jouent", "D) jouer"], "reponse": "C", "explication": "Le sujet est \"les enfants\" (3e personne du pluriel), donc \"jouent\". Attention, \"l'ecole\" n'est pas le sujet !"},
        {"question": "\"__ livre est interessant.\" (Ce ou Se ?)", "options": ["A) Se", "B) Ce", "C) Les deux", "D) Ceux"], "reponse": "B", "explication": "\"Ce\" est demonstratif (= ce livre-la). \"Se\" est reflechi (il se lave)."},
        {"question": "\"Ils __ partis hier.\" (son ou sont ?)", "options": ["A) son", "B) sont", "C) s'ont", "D) sons"], "reponse": "B", "explication": "\"Ils etaient partis\" fonctionne, donc c'est le verbe etre = \"sont\"."},
        {"question": "\"Des chaussettes bleu fonce\" : l'adjectif s'accorde-t-il ?", "options": ["A) Oui : bleues foncees", "B) Non : bleu fonce (compose = invariable)", "C) Oui : bleus fonces", "D) Oui : bleue foncee"], "reponse": "B", "explication": "Les adjectifs de couleur composes sont invariables : bleu fonce, vert pomme, rouge brique..."}
      ],
      "conseil": "A la dictee du brevet, relis 3 fois : 1) les accords sujet-verbe, 2) les homophones, 3) les accords nom-adjectif. Ca te sauvera au moins 3-4 points.",
      "prochaine_session": "Demain on attaque la Guerre froide et la decolonisation."
    },
    {
      "salutation": "On continue l'histoire ! Aujourd'hui : un chapitre qui couvre presque tout le XXe siecle.",
      "lecon": {
        "titre": "La Guerre froide (1947-1991)",
        "matiere": "Histoire-Geographie",
        "duree": "15 min",
        "contenu": "La Guerre froide oppose les USA et l'URSS pendant 44 ans. C'est un affrontement sans combat direct entre les deux superpuissances. C'est un chapitre cle du brevet.\n\nDEFINITION :\nAffrontement indirect entre les USA (bloc de l'Ouest, capitalisme, democratie) et l'URSS (bloc de l'Est, communisme, dictature). Jamais de guerre directe car les deux ont la bombe atomique (= dissuasion nucleaire).\n\nLES GRANDES ETAPES :\n\n1) 1947 : DEBUT. Doctrine Truman (USA aident les pays contre le communisme) vs Doctrine Jdanov (URSS defend le communisme). L'Europe est coupee en deux par le \"rideau de fer\".\n\n2) 1948-1949 : Blocus de Berlin. L'URSS bloque les acces a Berlin-Ouest. Les USA ravitaillent par avion (pont aerien). En 1949, l'Allemagne est coupee en deux : RFA (Ouest) et RDA (Est).\n\n3) 1961 : Mur de Berlin. L'URSS construit un mur pour empecher les Allemands de l'Est de fuir vers l'Ouest. Symbole de la division du monde.\n\n4) 1962 : Crise de Cuba. L'URSS installe des missiles nucleaires a Cuba (pres des USA). Le monde frole la guerre nucleaire. Khrouchtchev recule.\n\n5) Annees 1970 : Detente. Les deux camps dialoguent. Accords SALT sur les armes nucleaires.\n\n6) 1989 : Chute du mur de Berlin. Les Allemands de l'Est et de l'Ouest se reunissent. Fin symbolique de la Guerre froide.\n\n7) 1991 : Dissolution de l'URSS. Fin de la Guerre froide. Les USA restent la seule superpuissance.",
        "points_cles": ["Guerre froide = affrontement INDIRECT USA vs URSS (dissuasion nucleaire)", "1947 : Truman vs Jdanov / Rideau de fer coupe l'Europe en deux", "1961 : Mur de Berlin = symbole de la division / 1962 : Crise de Cuba", "1989 : Chute du mur / 1991 : Fin de l'URSS = fin Guerre froide"]
      },
      "quiz": [
        {"question": "La Guerre froide est un affrontement...", "options": ["A) Direct et militaire entre USA et URSS", "B) Indirect, sans combat direct entre les deux superpuissances", "C) Entre l'Europe et l'Asie", "D) Uniquement economique"], "reponse": "B", "explication": "Pas de guerre directe entre USA et URSS grace a la dissuasion nucleaire. L'affrontement est ideologique, economique et par allies interposes."},
        {"question": "Le \"rideau de fer\" designe...", "options": ["A) Un veritable rideau en metal", "B) La frontiere entre l'Europe de l'Ouest et l'Europe de l'Est", "C) Le mur de Berlin uniquement", "D) La frontiere entre les USA et l'URSS"], "reponse": "B", "explication": "Expression de Churchill : le rideau de fer = la frontiere ideologique separant l'Europe en deux blocs."},
        {"question": "En quelle annee le mur de Berlin est-il construit ?", "options": ["A) 1947", "B) 1949", "C) 1961", "D) 1989"], "reponse": "C", "explication": "Le mur de Berlin est construit en aout 1961 par la RDA (Allemagne de l'Est)."},
        {"question": "La crise de Cuba (1962) a failli provoquer...", "options": ["A) La fin de l'URSS", "B) Une guerre nucleaire mondiale", "C) La reunification de l'Allemagne", "D) La chute du mur de Berlin"], "reponse": "B", "explication": "L'URSS avait installe des missiles nucleaires a Cuba, a 150 km des USA. Le monde a frole la guerre atomique pendant 13 jours."},
        {"question": "Que symbolise la chute du mur de Berlin (1989) ?", "options": ["A) Le debut de la Guerre froide", "B) La victoire de l'URSS", "C) La fin de la division de l'Europe", "D) Le debut de la construction europeenne"], "reponse": "C", "explication": "La chute du mur le 9 novembre 1989 symbolise la fin de la division Est/Ouest et annonce la fin de la Guerre froide."}
      ],
      "conseil": "La Guerre froide au brevet, c'est souvent un exercice sur documents (discours, photos, cartes). Apprends a reperer les symboles : mur, rideau de fer, bombe atomique, drapeaux.",
      "prochaine_session": "Demain on passe au calcul litteral et aux identites remarquables."
    },
    {
      "salutation": "Allez, aujourd'hui on s'attaque a un gros morceau des maths : le calcul litteral !",
      "lecon": {
        "titre": "Calcul litteral et identites remarquables",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "Le calcul litteral, c'est quand tu travailles avec des lettres (x, a, b) au lieu de nombres. C'est la base de l'algebre, et ca tombe a CHAQUE brevet.\n\nDEVELOPPER :\nDistribuer un facteur sur une parenthese.\n3(x + 2) = 3x + 6\n(x + 3)(x + 2) = x\u00b2 + 2x + 3x + 6 = x\u00b2 + 5x + 6 (double distribution)\n\nFACTORISER :\nL'inverse : on cherche le facteur commun.\n6x + 9 = 3(2x + 3) (facteur commun : 3)\nx\u00b2 + 5x = x(x + 5) (facteur commun : x)\n\nLES 3 IDENTITES REMARQUABLES :\nCe sont des formules a connaitre PAR COEUR.\n\n1) (a + b)\u00b2 = a\u00b2 + 2ab + b\u00b2\nExemple : (x + 3)\u00b2 = x\u00b2 + 6x + 9\n\n2) (a - b)\u00b2 = a\u00b2 - 2ab + b\u00b2\nExemple : (x - 4)\u00b2 = x\u00b2 - 8x + 16\n\n3) (a + b)(a - b) = a\u00b2 - b\u00b2\nExemple : (x + 5)(x - 5) = x\u00b2 - 25\n\nCOMMENT LES RECONNAITRE :\n- Tu vois x\u00b2 + 6x + 9 ? C'est (x + 3)\u00b2 (identite 1)\n- Tu vois x\u00b2 - 16 ? C'est (x + 4)(x - 4) (identite 3)\n- Tu vois x\u00b2 - 10x + 25 ? C'est (x - 5)\u00b2 (identite 2)\n\nASTUCE : dans l'identite 3, le resultat est une difference de deux carres. Si tu vois a\u00b2 - b\u00b2, pense directement a (a+b)(a-b).",
        "points_cles": ["Developper = distribuer / Factoriser = trouver le facteur commun", "(a+b)\u00b2 = a\u00b2 + 2ab + b\u00b2 / (a-b)\u00b2 = a\u00b2 - 2ab + b\u00b2", "(a+b)(a-b) = a\u00b2 - b\u00b2 (difference de deux carres)", "Reconnaitre les identites : x\u00b2 - 25 = (x+5)(x-5)"]
      },
      "quiz": [
        {"question": "Developpe : (x + 4)\u00b2", "options": ["A) x\u00b2 + 16", "B) x\u00b2 + 4x + 16", "C) x\u00b2 + 8x + 16", "D) 2x + 8"], "reponse": "C", "explication": "(x+4)\u00b2 = x\u00b2 + 2(x)(4) + 4\u00b2 = x\u00b2 + 8x + 16."},
        {"question": "Factorise : x\u00b2 - 9", "options": ["A) (x-3)\u00b2", "B) (x+3)(x-3)", "C) (x+9)(x-9)", "D) x(x-9)"], "reponse": "B", "explication": "x\u00b2 - 9 = x\u00b2 - 3\u00b2 = (x+3)(x-3). C'est l'identite remarquable n\u00b03."},
        {"question": "Developpe : 5(2x - 3)", "options": ["A) 10x - 3", "B) 10x - 15", "C) 7x - 8", "D) 10x + 15"], "reponse": "B", "explication": "5 x 2x = 10x et 5 x (-3) = -15. Donc 10x - 15."},
        {"question": "Factorise : 4x + 12", "options": ["A) 4(x + 3)", "B) 2(2x + 6)", "C) 4(x + 12)", "D) x(4 + 12)"], "reponse": "A", "explication": "Facteur commun = 4. 4x/4 = x et 12/4 = 3. Donc 4(x + 3)."},
        {"question": "(x - 7)\u00b2 = ?", "options": ["A) x\u00b2 - 49", "B) x\u00b2 - 7x + 49", "C) x\u00b2 - 14x + 49", "D) x\u00b2 + 14x + 49"], "reponse": "C", "explication": "(x-7)\u00b2 = x\u00b2 - 2(x)(7) + 7\u00b2 = x\u00b2 - 14x + 49."}
      ],
      "conseil": "Les identites remarquables, c'est comme une recette de cuisine : apprends-les par coeur et entraine-toi a les reconnaitre. Au brevet, ca vaut souvent 4-5 points.",
      "prochaine_session": "Demain on revoit le developpement durable et les inegalites dans le monde."
    },
    {
      "salutation": "Derniere session de la semaine ! On termine en beaute avec un sujet d'EMC qui tombe souvent.",
      "lecon": {
        "titre": "La Republique francaise et la citoyennete",
        "matiere": "EMC (Enseignement Moral et Civique)",
        "duree": "15 min",
        "contenu": "L'EMC est une epreuve a part entiere au brevet. Les sujets tournent souvent autour de la Republique, la citoyennete et les valeurs de la France.\n\nLES VALEURS DE LA REPUBLIQUE :\n\"Liberte, Egalite, Fraternite\" = la devise de la France.\n- Liberte : liberte d'expression, de la presse, de culte, de reunion\n- Egalite : devant la loi, homme-femme, acces a l'education\n- Fraternite : solidarite, aide aux plus demunis\n\nLES PRINCIPES DE LA REPUBLIQUE :\n- Democratie : le pouvoir vient du peuple (elections, vote)\n- Laicite : separation de l'Eglise et de l'Etat (loi de 1905). L'Etat ne favorise aucune religion.\n- Indivisibilite : la loi est la meme partout sur le territoire\n- Sociale : l'Etat protege les plus faibles (Securite sociale, allocations)\n\nLES SYMBOLES :\n- Le drapeau tricolore (bleu, blanc, rouge)\n- La Marseillaise (hymne national)\n- Marianne (symbole de la Republique)\n- Le 14 juillet (fete nationale, prise de la Bastille)\n- Le coq gaulois\n\nLA CITOYENNETE :\n- Etre citoyen = avoir des DROITS (voter, s'exprimer, etre protege) et des DEVOIRS (payer ses impots, respecter la loi, defendre le pays)\n- On devient citoyen francais par : naissance (droit du sang/sol), naturalisation\n- Le vote est un droit et un devoir civique (pas une obligation legale en France)\n\nLA LAICITE A L'ECOLE :\n- Les eleves ne peuvent pas porter de signes religieux ostentatoires (loi de 2004)\n- Les enseignants doivent rester neutres\n- On peut parler des religions de maniere objective dans les cours",
        "points_cles": ["Devise : Liberte, Egalite, Fraternite + principes : democratie, laicite, indivisibilite, sociale", "Laicite = separation Eglise/Etat (loi 1905), neutralite de l'Etat", "Citoyen = droits (voter, s'exprimer) + devoirs (impots, respecter la loi)", "Symboles : drapeau, Marseillaise, Marianne, 14 juillet, coq"]
      },
      "quiz": [
        {"question": "Quelle loi a etabli la laicite en France ?", "options": ["A) Loi de 1789", "B) Loi de 1905", "C) Loi de 2004", "D) Loi de 1958"], "reponse": "B", "explication": "La loi de separation de l'Eglise et de l'Etat date de 1905. C'est le fondement de la laicite en France."},
        {"question": "La devise de la Republique francaise est...", "options": ["A) Liberte, Egalite, Securite", "B) Liberte, Fraternite, Justice", "C) Liberte, Egalite, Fraternite", "D) Democratie, Egalite, Fraternite"], "reponse": "C", "explication": "Liberte, Egalite, Fraternite est la devise officielle de la Republique francaise."},
        {"question": "Etre citoyen, c'est avoir...", "options": ["A) Seulement des droits", "B) Seulement des devoirs", "C) Des droits et des devoirs", "D) Aucun des deux"], "reponse": "C", "explication": "La citoyennete implique des droits (voter, s'exprimer) ET des devoirs (impots, respect de la loi)."},
        {"question": "Marianne est le symbole de...", "options": ["A) La monarchie", "B) La Republique francaise", "C) La Revolution de 1789 uniquement", "D) L'Europe"], "reponse": "B", "explication": "Marianne represente la Republique francaise. On la trouve dans les mairies et sur les timbres."},
        {"question": "La laicite a l'ecole signifie que...", "options": ["A) On ne peut pas parler de religion", "B) Les eleves ne portent pas de signes religieux ostentatoires", "C) Les cours de religion sont obligatoires", "D) Seule la religion catholique est autorisee"], "reponse": "B", "explication": "Loi de 2004 : pas de signes religieux ostentatoires a l'ecole. Mais on peut parler des religions de maniere objective en cours."}
      ],
      "conseil": "En EMC, on te demande souvent de reagir a un document (affiche, loi, temoignage). Utilise le vocabulaire : laicite, citoyennete, droits et devoirs, valeurs republicaines.",
      "prochaine_session": "Nouvelle semaine, nouvelles sessions ! On continuera avec les fonctions lineaires et affines."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = SESSIONS;
