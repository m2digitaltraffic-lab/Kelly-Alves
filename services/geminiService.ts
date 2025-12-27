
import { GoogleGenAI } from "@google/genai";

export async function getCareerAdvice(score: number, title: string, description: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    O usuário já recebeu seu "Mapa Estratégico" padrão para a pontuação ${score}/60 ("${title}").
    Agora, como mentora Kelly Alves, dê a ela uma palavra final de encorajamento ou um insight "fora da caixa" personalizado baseado nesse resultado.
    Seja breve (máximo 2 parágrafos), elegante, sofisticada e empoderadora.
    Use Markdown leve (negritos). Responda em Português do Brasil.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text || "Continue sua jornada com intencionalidade. Você nasceu para ser ouvida, valorizada e promovida.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mantenha o foco em suas ações de 90 dias. Sua transformação profissional começa com o primeiro passo.";
  }
}
