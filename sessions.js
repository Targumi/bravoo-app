// Pre-generated coaching sessions for MVP
// These are served when the AI API is unavailable
// Format: keyed by situation (brevet, bac, bts, etc.)
const SESSIONS = {
  "brevet": [
    {
      "salutation": "C'est parti pour une super session aujourd'hui ! On va bosser sur un truc qui tombe souvent au brevet.",
      "lecon": {
        "titre": "Le theoreme de Pythagore et ses applications",
        "matiere": "Mathematiques",
        "duree": "15 min",
        "contenu": "Le theoreme de Pythagore, c'est l'un des outils les plus puissants que tu vas utiliser au brevet. Il te permet de calculer la longueur d'un cote dans un triangle rectangle quand tu connais les deux autres.\n\nLa formule est simple : dans un triangle rectangle ABC, ou C est l'angle droit, on a AB\u00b2 = AC\u00b2 + BC\u00b2. AB, c'est l'hypotenuse \u2014 le cote le plus long, celui qui est en face de l'angle droit.\n\nPrenons un exemple concret. Imagine un triangle rectangle avec AC = 3 cm et BC = 4 cm. Pour trouver AB, tu fais : AB\u00b2 = 3\u00b2 + 4\u00b2 = 9 + 16 = 25. Donc AB = \u221a25 = 5 cm. Facile, non ?\n\nMais attention, au brevet on te demande aussi de faire l'inverse : verifier si un triangle est rectangle. Pour ca, tu calcules le carre du plus grand cote et tu le compares a la somme des carres des deux autres. Si c'est egal, le triangle est rectangle (c'est la reciproque du theoreme).\n\nExemple : un triangle avec des cotes de 5, 12 et 13. Le plus grand cote est 13. On verifie : 13\u00b2 = 169. Et 5\u00b2 + 12\u00b2 = 25 + 144 = 169. C'est egal, donc le triangle EST rectangle.\n\nDernier piege classique au brevet : on te donne parfois un probleme de la vie reelle (une echelle contre un mur, la diagonale d'un terrain) et tu dois reconnaitre que c'est du Pythagore. L'astuce : des que tu vois un angle droit et qu'on te demande une longueur, pense Pythagore !",
        "points_cles": [
          "AB\u00b2 = AC\u00b2 + BC\u00b2 (C = angle droit, AB = hypotenuse)",
          "L'hypotenuse est TOUJOURS le plus grand cote (en face de l'angle droit)",
          "La reciproque permet de VERIFIER si un triangle est rectangle",
          "Au brevet : reperer l'angle droit dans les problemes concrets"
        ]
      },
      "quiz": [
        {
          "question": "Dans un triangle rectangle, l'hypotenuse mesure toujours...",
          "options": ["A) Le cote le plus court", "B) Le cote en face de l'angle droit", "C) Le cote adjacent a l'angle droit", "D) N'importe quel cote"],
          "reponse": "B",
          "explication": "L'hypotenuse est toujours le cote oppose a l'angle droit, et c'est aussi le plus grand cote du triangle rectangle."
        },
        {
          "question": "Un triangle a pour cotes 6, 8 et 10. Est-il rectangle ?",
          "options": ["A) Non, car 6 + 8 = 14", "B) Oui, car 6\u00b2 + 8\u00b2 = 10\u00b2", "C) On ne peut pas savoir", "D) Oui, car 6 + 8 > 10"],
          "reponse": "B",
          "explication": "On verifie : 6\u00b2 + 8\u00b2 = 36 + 64 = 100 = 10\u00b2. L'egalite est verifiee, donc le triangle est rectangle (reciproque de Pythagore)."
        },
        {
          "question": "AC = 5 cm, BC = 12 cm, angle C = 90\u00b0. Que vaut AB ?",
          "options": ["A) 17 cm", "B) 13 cm", "C) 7 cm", "D) 14 cm"],
          "reponse": "B",
          "explication": "AB\u00b2 = 5\u00b2 + 12\u00b2 = 25 + 144 = 169. Donc AB = \u221a169 = 13 cm."
        },
        {
          "question": "Une echelle de 5 m est posee contre un mur. Son pied est a 3 m du mur. A quelle hauteur touche-t-elle le mur ?",
          "options": ["A) 2 m", "B) 4 m", "C) 8 m", "D) 3,5 m"],
          "reponse": "B",
          "explication": "Le mur, le sol et l'echelle forment un triangle rectangle. h\u00b2 + 3\u00b2 = 5\u00b2, donc h\u00b2 = 25 - 9 = 16, h = 4 m."
        },
        {
          "question": "Un triangle a pour cotes 3, 5 et 7. Est-il rectangle ?",
          "options": ["A) Oui", "B) Non, car 3\u00b2 + 5\u00b2 \u2260 7\u00b2", "C) On ne peut pas savoir sans l'angle", "D) Oui, car 3 + 5 > 7"],
          "reponse": "B",
          "explication": "On verifie : 3\u00b2 + 5\u00b2 = 9 + 25 = 34. Et 7\u00b2 = 49. 34 \u2260 49, donc le triangle n'est PAS rectangle."
        }
      ],
      "conseil": "Le theoreme de Pythagore, c'est un classique du brevet. Entraine-toi a le reconnaitre dans les problemes de la vie quotidienne : echelles, terrains, diagonales... Ca tombe presque chaque annee !",
      "prochaine_session": "Demain on attaque les equations du premier degre \u2014 un autre gros morceau du brevet."
    },
    {
      "salutation": "Pret(e) pour une session efficace ? Aujourd'hui on va revoir un classique du brevet de francais !",
      "lecon": {
        "titre": "Les figures de style essentielles",
        "matiere": "Francais",
        "duree": "15 min",
        "contenu": "Les figures de style, c'est un sujet qui revient systematiquement au brevet de francais. Les reconnaitre te permet de gagner des points facilement sur la partie comprehension du texte.\n\nCommençons par les plus importantes :\n\nLA METAPHORE : c'est une comparaison SANS mot de comparaison (comme, tel que, pareil a...). Exemple : \"Cet homme est un lion\" \u2014 on ne dit pas \"comme un lion\", on dit directement qu'il EST un lion. Ca rend l'image plus forte.\n\nLA COMPARAISON : comme la metaphore mais AVEC un outil de comparaison. Exemple : \"Il court comme un lion\". Le mot \"comme\" est present.\n\nL'HYPERBOLE : c'est une exageration. Exemple : \"Je meurs de faim\" ou \"Il y avait un million de personnes\". On exagere pour insister sur l'intensite.\n\nL'ANAPHORE : c'est la repetition d'un mot ou d'un groupe de mots en debut de phrase ou de vers. Exemple : \"Moi president, je ferai... Moi president, je changerai...\" L'effet : ca martele l'idee, ca cree un rythme.\n\nL'ANTITHESE : c'est l'opposition de deux idees contraires. Exemple : \"Je vis, je meurs\" (Louise Labe). L'effet : ca cree un contraste frappant.\n\nLA PERSONNIFICATION : on donne des caracteristiques humaines a un objet ou un animal. Exemple : \"Le vent hurlait\" \u2014 le vent ne hurle pas vraiment, c'est une action humaine.\n\nAstuce pour le brevet : quand on te demande \"Quelle figure de style ?\", pose-toi ces questions dans l'ordre : 1) Y a-t-il une comparaison avec/sans outil ? 2) Y a-t-il une exageration ? 3) Y a-t-il une repetition ? 4) Y a-t-il une opposition ?",
        "points_cles": [
          "Metaphore = comparaison SANS outil / Comparaison = AVEC outil (comme, tel...)",
          "Hyperbole = exageration pour renforcer l'effet",
          "Anaphore = repetition en debut de phrase/vers pour marteler une idee",
          "Personnification = donner des traits humains a un objet/animal"
        ]
      },
      "quiz": [
        {
          "question": "\"Il est rapide comme l'eclair\" est...",
          "options": ["A) Une metaphore", "B) Une comparaison", "C) Une hyperbole", "D) Une anaphore"],
          "reponse": "B",
          "explication": "Le mot \"comme\" est present, c'est donc une comparaison (pas une metaphore)."
        },
        {
          "question": "\"La nuit devorait la ville\" est...",
          "options": ["A) Une comparaison", "B) Une antithese", "C) Une personnification", "D) Une hyperbole"],
          "reponse": "C",
          "explication": "\"Devorer\" est une action humaine/animale attribuee a \"la nuit\" (un element non-vivant). C'est une personnification."
        },
        {
          "question": "\"J'ai mille choses a faire\" est...",
          "options": ["A) Une metaphore", "B) Une anaphore", "C) Une antithese", "D) Une hyperbole"],
          "reponse": "D",
          "explication": "\"Mille choses\" est une exageration evidente. On n'a pas vraiment 1000 choses a faire, c'est une hyperbole."
        },
        {
          "question": "\"Paris est une fete\" est...",
          "options": ["A) Une comparaison", "B) Une metaphore", "C) Une anaphore", "D) Une personnification"],
          "reponse": "B",
          "explication": "Il n'y a pas de mot de comparaison (comme, tel...). Paris est directement assimile a une fete. C'est une metaphore."
        },
        {
          "question": "\"Toujours aimer, toujours souffrir, toujours mourir\" est...",
          "options": ["A) Une hyperbole", "B) Une personnification", "C) Une anaphore", "D) Une antithese"],
          "reponse": "C",
          "explication": "Le mot \"toujours\" est repete en debut de chaque element. C'est une anaphore."
        }
      ],
      "conseil": "Au brevet, les figures de style rapportent des points faciles si tu les connais bien. Lis un texte par jour et essaie de reperer les figures. En 2 semaines, ca deviendra automatique.",
      "prochaine_session": "Demain on attaque la Seconde Guerre mondiale \u2014 un chapitre majeur en histoire."
    },
    {
      "salutation": "Salut ! Aujourd'hui on s'attaque a un chapitre d'histoire qui tombe tres souvent au brevet. C'est parti !",
      "lecon": {
        "titre": "La Seconde Guerre mondiale (1939-1945)",
        "matiere": "Histoire-Geographie",
        "duree": "15 min",
        "contenu": "La Seconde Guerre mondiale, c'est LE chapitre d'histoire le plus teste au brevet. Voici les dates et concepts cles que tu DOIS connaitre.\n\nLES GRANDES PHASES :\n1) 1939-1941 : Les victoires de l'Axe. L'Allemagne nazie envahit la Pologne (1er sept. 1939), puis la France (juin 1940). La France est coupee en deux : zone occupee au Nord, regime de Vichy au Sud dirige par Petain qui collabore avec l'Allemagne.\n\n2) 1941-1942 : La guerre devient mondiale. Juin 1941 : Hitler attaque l'URSS (operation Barbarossa). Dec. 1941 : le Japon attaque Pearl Harbor, les USA entrent en guerre. Desormais, c'est les Allies (USA, UK, URSS) contre l'Axe (Allemagne, Italie, Japon).\n\n3) 1942-1945 : Les victoires des Allies. Stalingrad (fev. 1943) = tournant a l'Est. Debarquement en Normandie (6 juin 1944) = liberation de la France. 8 mai 1945 : capitulation allemande. Aout 1945 : bombes atomiques sur Hiroshima et Nagasaki, capitulation du Japon.\n\nLA FRANCE DANS LA GUERRE :\n- Petain signe l'armistice le 22 juin 1940. Le regime de Vichy collabore avec les nazis (rafle du Vel d'Hiv, 16-17 juillet 1942 : 13 000 juifs arretes par la police francaise).\n- De Gaulle lance l'Appel du 18 juin 1940 depuis Londres. La Resistance s'organise : Jean Moulin cree le CNR (Conseil National de la Resistance) en 1943.\n- Liberation de Paris : 25 aout 1944.\n\nLE GENOCIDE DES JUIFS (LA SHOAH) :\nLes nazis mettent en place un genocide planifie : lois raciales, ghettos, camps d'extermination (Auschwitz-Birkenau). Bilan : 6 millions de juifs assassines. C'est un crime contre l'humanite sans precedent.",
        "points_cles": [
          "1939 : invasion Pologne / 1940 : defaite France / 1941 : URSS + USA entrent en guerre",
          "Vichy = collaboration (Petain) vs Resistance = de Gaulle + Jean Moulin (CNR)",
          "Tournants : Stalingrad (1943) + Debarquement Normandie (6 juin 1944)",
          "Shoah : genocide planifie, 6 millions de victimes, Auschwitz = symbole"
        ]
      },
      "quiz": [
        {
          "question": "Quelle date marque le debut de la Seconde Guerre mondiale ?",
          "options": ["A) 1er septembre 1939", "B) 6 juin 1944", "C) 22 juin 1940", "D) 8 mai 1945"],
          "reponse": "A",
          "explication": "Le 1er septembre 1939, l'Allemagne envahit la Pologne. La France et le Royaume-Uni declarent la guerre le 3 septembre."
        },
        {
          "question": "Qui lance l'Appel du 18 juin 1940 ?",
          "options": ["A) Jean Moulin", "B) Philippe Petain", "C) Charles de Gaulle", "D) Winston Churchill"],
          "reponse": "C",
          "explication": "Le general de Gaulle appelle les Francais a continuer le combat depuis Londres, le 18 juin 1940, au micro de la BBC."
        },
        {
          "question": "Que se passe-t-il le 6 juin 1944 ?",
          "options": ["A) Capitulation allemande", "B) Debarquement en Normandie", "C) Bombe sur Hiroshima", "D) Liberation de Paris"],
          "reponse": "B",
          "explication": "Le D-Day : les Allies debarquent sur les plages de Normandie. C'est le debut de la liberation de la France."
        },
        {
          "question": "La rafle du Vel d'Hiv (1942) montre que...",
          "options": ["A) La Resistance etait forte a Paris", "B) La police francaise a participe a la persecution des juifs", "C) Les Allies ont bombarde Paris", "D) De Gaulle etait a Paris"],
          "reponse": "B",
          "explication": "Les 16-17 juillet 1942, la police francaise a arrete plus de 13 000 juifs a Paris sur ordre du regime de Vichy. C'est un symbole de la collaboration."
        },
        {
          "question": "Combien de juifs ont ete victimes de la Shoah ?",
          "options": ["A) 1 million", "B) 3 millions", "C) 6 millions", "D) 10 millions"],
          "reponse": "C",
          "explication": "La Shoah a cause la mort de 6 millions de juifs europeens, dans les camps d'extermination et par les Einsatzgruppen."
        }
      ],
      "conseil": "Au brevet, tu peux tomber sur un sujet Shoah ou Resistance. Retiens les dates cles (1940, 1942, 1944, 1945) et les personnages (Petain vs de Gaulle). C'est souvent une question de mise en relation entre documents.",
      "prochaine_session": "Demain on revoit les fractions et les pourcentages \u2014 indispensable pour le brevet de maths."
    }
  ]
};

if (typeof module !== 'undefined') module.exports = SESSIONS;
