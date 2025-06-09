// lib/ai-description.js
export async function generateAIDescription(title, type) {
  const prompt = `Generate a short 1-2 line description for a ${type} called "${title}". Provide 3 different variations. Number them 1, 2, and 3.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-001:generateContent?key=${process.env.GOOGLE_GENAI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();

  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  // Example of rawText:
  // 1. Description one...
  // 2. Description two...
  // 3. Description three...

  // Split into numbered options:
  const options = rawText
    .split(/\n\d+\.\s*/)  // split on newline + number + dot + space
    .filter(Boolean)       // remove empty strings
    .map(opt => opt.trim());

  // If splitting fails (only 1 option), fallback to return rawText as single-element array
  return options.length ? options : [rawText];
}
