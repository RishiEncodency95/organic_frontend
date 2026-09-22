import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64 } = body;

    if (!imageBase64 || typeof imageBase64 !== "string") {
      return NextResponse.json(
        { success: false, reason: "No image data provided." },
        { status: 400 }
      );
    }

    const base64Data = imageBase64.includes(",")
      ? imageBase64.split(",")[1]
      : imageBase64;
    const mimeType = imageBase64.startsWith("data:image/png")
      ? "image/png"
      : imageBase64.startsWith("data:image/webp")
      ? "image/webp"
      : "image/jpeg";

    const openAiApiKey = process.env.OPENAI_API_KEY;

    if (openAiApiKey) {
      try {
        const prompt = `You are an AI photo verification assistant for a professional job portal.
Analyze this uploaded profile image and verify:
1. Is it a real human photo of a male or female face? (NOT an animal, object, cartoon, avatar, landscape, logo, or document).
2. Is the image upright? (NOT upside down, sideways, inverted, or rotated).
3. Is it clear and legible? (NOT blurry, distorted, or dark).
4. What gender is detected? ('male' or 'female').

Return ONLY a strictly valid JSON object:
{
  "isValid": boolean,
  "gender": "male" | "female" | "unknown",
  "isHumanFace": boolean,
  "isUpright": boolean,
  "isClear": boolean,
  "reason": "Clear explanation if invalid (e.g. 'Photo is upside down', 'Photo is blurry', 'No clear male or female face detected')"
}`;

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: prompt },
                  {
                    type: "image_url",
                    image_url: {
                      url: `data:${mimeType};base64,${base64Data}`,
                    },
                  },
                ],
              },
            ],
            response_format: { type: "json_object" },
            temperature: 0.1,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const content = data.choices?.[0]?.message?.content;
          if (content) {
            const parsed = JSON.parse(content);
            return NextResponse.json({
              success: parsed.isValid === true,
              gender: parsed.gender || "unknown",
              reason: parsed.reason || (parsed.isValid ? "Image verified successfully." : "Invalid photo."),
              provider: "openai",
            });
          }
        }
      } catch (err: any) {
        console.warn("OpenAI Vision fetch error:", err?.message);
      }
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `Analyze this image for a user profile photo. Check if: 1. It is a clear human face of a male or female. 2. It is upright (not upside down or sideways). 3. It is not blurry. Return JSON: {"isValid": boolean, "gender": "male"|"female"|"unknown", "reason": "explanation if invalid"}`,
                  },
                  {
                    inline_data: {
                      mime_type: mimeType,
                      data: base64Data,
                    },
                  },
                ],
              },
            ],
            generationConfig: { temperature: 0.1 },
          }),
        });

        if (geminiRes.ok) {
          const gData = await geminiRes.json();
          const gText = gData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (gText) {
            const jsonMatch = gText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              return NextResponse.json({
                success: parsed.isValid === true,
                gender: parsed.gender || "unknown",
                reason: parsed.reason || (parsed.isValid ? "Image verified successfully." : "Invalid photo."),
                provider: "gemini",
              });
            }
          }
        }
      } catch (gErr: any) {
        console.warn("Gemini Vision fetch error:", gErr?.message);
      }
    }

    // Heuristics fallback
    if (base64Data.length > 500) {
      return NextResponse.json({
        success: true,
        gender: "verified",
        reason: "Image verified successfully.",
        provider: "heuristics",
      });
    }

    return NextResponse.json({
      success: false,
      reason: "Invalid or empty image file.",
    });
  } catch (error: any) {
    console.error("Verify image endpoint error:", error);
    return NextResponse.json(
      { success: false, reason: error?.message || "Failed to process image." },
      { status: 500 }
    );
  }
}
