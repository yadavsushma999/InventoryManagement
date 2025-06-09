export async function POST(request) {
  try {
    const body = await request.json();
    const { title } = body;

    const prompt = `Generate a short 1-2 line description for a category called "${title}".`;

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
    const description = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No description available.";

    return new Response(JSON.stringify({ description }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to generate description" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
