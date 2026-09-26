import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface VisionCheck {
  isHumanFace: boolean;
  isAdult: boolean;
  isAppropriate: boolean;
  isUpright: boolean;
  isClear: boolean;
  reason?: string;
}

/**
 * Deep verification prompt: every gate is asked for as its own boolean rather than
 * trusting a single "isValid" summary from the model, so the caller can enforce each
 * one explicitly and cannot be talked past by a model being generous with "isValid".
 */
const VISION_PROMPT = () => `You are a strict AI photo moderator for a professional job application portal. A candidate uploaded this image as their profile photo.

Examine the image very carefully and answer each check truthfully and conservatively — when in doubt, mark it as failing:

1. isHumanFace: Is this a real, unedited photograph of an actual human face (a photo taken by a camera)? Answer false for: animals/pets, cartoons, anime, illustrations, 3D renders, avatars, vector art, icons, clipart, logos, objects, landscapes, documents, screenshots, or any non-human/non-photographic image.
2. isAdult: Does the person in the photo clearly appear to be a fully grown adult (18 years or older)? Answer false if the person appears to be a child, a minor, or if age cannot be confidently judged as adult.
3. isAppropriate: Is the image fully appropriate for a professional workplace context — properly clothed, no nudity, no sexual or suggestive content, no violence, no offensive gestures or material? Answer false for anything explicit, suggestive, or inappropriate in any way.
4. isUpright: Is the photo the right way up (not upside down, not sideways/rotated 90°, not mirrored oddly)?
5. isClear: Is the photo in focus, well-lit, and not blurry, pixelated, or too dark to make out the face clearly?

Return ONLY a strictly valid JSON object, no markdown, no commentary:
{
  "isHumanFace": boolean,
  "isAdult": boolean,
  "isAppropriate": boolean,
  "isUpright": boolean,
  "isClear": boolean,
  "reason": "One short, specific sentence naming the first failing check if any check is false, e.g. 'This looks like an animal photo, not a human face.' or 'The photo appears blurry.' — empty string if everything passes"
}`;

/** All gates must hold; this is intentionally never delegated to the model's own opinion of "isValid". */
function evaluate(check: VisionCheck): { success: boolean; reason: string } {
  if (!check.isHumanFace) {
    return { success: false, reason: check.reason || "Please upload a real photo of your face — not an animal, cartoon, icon, avatar, or other image." };
  }
  if (!check.isAdult) {
    return { success: false, reason: check.reason || "The photo must be of an adult. Please upload a clear photo of yourself." };
  }
  if (!check.isAppropriate) {
    return { success: false, reason: check.reason || "This photo is not appropriate for a professional profile. Please upload a normal headshot." };
  }
  if (!check.isUpright) {
    return { success: false, reason: check.reason || "The photo is not upright. Please upload a correctly oriented photo." };
  }
  if (!check.isClear) {
    return { success: false, reason: check.reason || "The photo is blurry or unclear. Please upload a sharper photo." };
  }

  return { success: true, reason: "Image verified successfully." };
}

async function verifyWithOpenAI(
  apiKey: string,
  base64Data: string,
  mimeType: string
): Promise<VisionCheck | null> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: VISION_PROMPT() },
            { type: "image_url", image_url: { url: `data:${mimeType};base64,${base64Data}` } },
          ],
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    console.warn(`OpenAI Vision API returned ${res.status} ${res.statusText}:`, errBody.slice(0, 500));
    return null;
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    console.warn("OpenAI Vision API returned no content:", JSON.stringify(data).slice(0, 500));
    return null;
  }
  return JSON.parse(content) as VisionCheck;
}

async function verifyWithGemini(
  apiKey: string,
  base64Data: string,
  mimeType: string
): Promise<VisionCheck | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            { text: VISION_PROMPT() },
            { inline_data: { mime_type: mimeType, data: base64Data } },
          ],
        },
      ],
      generationConfig: { temperature: 0, responseMimeType: "application/json" },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    console.warn(`Gemini Vision API returned ${res.status} ${res.statusText}:`, errBody.slice(0, 500));
    return null;
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    console.warn("Gemini Vision API returned no text:", JSON.stringify(data).slice(0, 500));
    return null;
  }
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    console.warn("Gemini Vision API response had no parseable JSON:", text.slice(0, 500));
    return null;
  }
  return JSON.parse(jsonMatch[0]) as VisionCheck;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64 } = body;

    if (!imageBase64 || typeof imageBase64 !== "string") {
      return NextResponse.json({ success: false, reason: "No image data provided." }, { status: 400 });
    }

    const base64Data = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
    const mimeType = imageBase64.startsWith("data:image/png")
      ? "image/png"
      : imageBase64.startsWith("data:image/webp")
      ? "image/webp"
      : "image/jpeg";

    const openAiApiKey = process.env.OPENAI_API_KEY;
    if (!openAiApiKey) {
      console.warn("verify-image: OPENAI_API_KEY is not set in this environment.");
    }
    if (openAiApiKey) {
      try {
        const check = await verifyWithOpenAI(openAiApiKey, base64Data, mimeType);
        if (check) {
          const { success, reason } = evaluate(check);
          return NextResponse.json({ success, reason, provider: "openai" });
        }
      } catch (err: any) {
        console.warn("OpenAI Vision fetch error:", err?.message);
      }
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      console.warn("verify-image: GEMINI_API_KEY is not set in this environment.");
    }
    if (geminiKey) {
      try {
        const check = await verifyWithGemini(geminiKey, base64Data, mimeType);
        if (check) {
          const { success, reason } = evaluate(check);
          return NextResponse.json({ success, reason, provider: "gemini" });
        }
      } catch (gErr: any) {
        console.warn("Gemini Vision fetch error:", gErr?.message);
      }
    }

    // Neither provider could actually verify the photo — fail closed. Silently accepting
    // an unverified image here would defeat the whole point of this check.
    return NextResponse.json({
      success: false,
      reason: "We couldn't verify this photo right now. Please try again in a moment.",
    });
  } catch (error: any) {
    console.error("Verify image endpoint error:", error);
    return NextResponse.json(
      { success: false, reason: error?.message || "Failed to process image." },
      { status: 500 }
    );
  }
}
