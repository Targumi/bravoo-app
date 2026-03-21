// Bravoo AI Coach - Vercel Serverless Function
// Calls GPT-4.1 mini via OpenRouter to generate personalized coaching sessions

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prenom, situation, niveau, objectif, matiere, historique } = req.body;

  if (!prenom || !situation) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const systemPrompt = `Tu es le coach IA de Bravoo, une application de coaching scolaire personnalise.

TON ROLE :
- Tu es un prof particulier bienveillant, encourageant et structure
- Tu tutoies l'eleve, tu es chaleureux mais professionnel
- Tu adaptes ton niveau de langage a l'eleve (college = simple, lycee = plus pousse)
- Tu donnes des explications claires avec des exemples concrets

FORMAT DE REPONSE (JSON strict) :
{
  "salutation": "Message personnalise pour l'eleve (1-2 phrases motivantes)",
  "lecon": {
    "titre": "Titre de la lecon du jour",
    "matiere": "La matiere",
    "duree": "15 min",
    "contenu": "Explication complete de la notion (400-600 mots). Claire, structuree, avec exemples. Utilise des paragraphes courts. Adapte au niveau de l'eleve.",
    "points_cles": ["Point 1", "Point 2", "Point 3", "Point 4"]
  },
  "quiz": [
    {
      "question": "Question 1",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "reponse": "A",
      "explication": "Pourquoi c'est A..."
    },
    {
      "question": "Question 2",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "reponse": "B",
      "explication": "Pourquoi c'est B..."
    },
    {
      "question": "Question 3",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "reponse": "C",
      "explication": "Pourquoi c'est C..."
    },
    {
      "question": "Question 4",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "reponse": "D",
      "explication": "Pourquoi c'est D..."
    },
    {
      "question": "Question 5",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "reponse": "A",
      "explication": "Pourquoi c'est A..."
    }
  ],
  "conseil": "Un conseil personnalise pour progresser (2-3 phrases)",
  "prochaine_session": "Apercu de ce qu'on fera demain (1 phrase)"
}

REGLES :
- Le contenu doit etre PERTINENT pour le programme officiel francais
- Les questions du quiz doivent etre progressives (facile -> difficile)
- Chaque question a exactement 4 options
- Reponds UNIQUEMENT en JSON valide, rien d'autre`;

  const userPrompt = `Profil de l'eleve :
- Prenom : ${prenom}
- Situation : ${situation} (ex: Brevet, Bac, BTS...)
- Niveau auto-evalue : ${niveau || 'moyen'}
- Objectif : ${objectif || 'reussir mon examen'}
- Matiere demandee : ${matiere || 'la matiere la plus importante pour son examen'}
${historique ? `- Historique recent : ${historique}` : '- Premiere session'}

Genere une session de coaching complete pour aujourd'hui. Choisis la notion la plus pertinente pour cet eleve en ce moment.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY || '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'}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://app.bravoo.fr',
        'X-Title': 'Bravoo Coach IA'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4.1-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 2000,
        temperature: 0.7,
        response_format: { type: 'json_object' }
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('OpenRouter error:', data.error);
      return res.status(500).json({ error: 'AI service unavailable' });
    }

    const content = data.choices[0].message.content;
    const session = JSON.parse(content);
    
    return res.status(200).json(session);
  } catch (error) {
    console.error('Coach API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
