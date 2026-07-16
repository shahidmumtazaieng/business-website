import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/chat-knowledge-base";

// Runtime: Node.js (required by z-ai-web-dev-sdk — not Edge compatible)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// In-memory conversation store (per-session).
// Production: replace with Redis / database for persistence across deploys.
const conversations = new Map<string, { role: string; content: string }[]>();

const MAX_MESSAGES = 12; // Trim history to prevent token overflow

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId = "default", history = [] }: {
      message?: string;
      sessionId?: string;
      history?: ChatMessage[];
    } = body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // Sanitise: cap message length to prevent abuse
    const userMessage = message.trim().slice(0, 2000);

    // Get or create conversation history (server-side)
    let conversation = conversations.get(sessionId);
    if (!conversation) {
      conversation = [
        { role: "assistant", content: CHATBOT_SYSTEM_PROMPT },
      ];
      conversations.set(sessionId, conversation);
    }

    // Also accept client-side history (if provided) for stateless fallback
    // Merge: system prompt first, then provided history, then new user message
    const mergedHistory: { role: string; content: string }[] = [
      { role: "assistant", content: CHATBOT_SYSTEM_PROMPT },
      ...(history || []).map((m) => ({ role: m.role, content: m.content })),
    ];

    // Add the new user message
    mergedHistory.push({ role: "user", content: userMessage });

    // Trim history (keep system prompt + last MAX_MESSAGES messages)
    const trimmedHistory =
      mergedHistory.length > MAX_MESSAGES + 1
        ? [mergedHistory[0], ...mergedHistory.slice(-(MAX_MESSAGES))]
        : mergedHistory;

    // Initialise the SDK
    const zai = await ZAI.create();

    // Call the LLM
    const completion = await zai.chat.completions.create({
      messages: trimmedHistory.map((m) => ({
        role: m.role as "user" | "assistant" | "system",
        content: m.content,
      })),
      thinking: { type: "disabled" },
    });

    const aiResponse =
      completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response. Please try again or call us on +44 7735 322362.";

    // Persist to server-side conversation store
    conversation.push({ role: "user", content: userMessage });
    conversation.push({ role: "assistant", content: aiResponse });
    // Trim server-side store too
    if (conversation.length > MAX_MESSAGES + 1) {
      conversation = [
        conversation[0],
        ...conversation.slice(-MAX_MESSAGES),
      ];
      conversations.set(sessionId, conversation);
    }

    return NextResponse.json({
      success: true,
      response: aiResponse,
      sessionId,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    console.error("[/api/chat] Error:", errorMessage);

    // Return a graceful fallback so the UI doesn't break
    return NextResponse.json(
      {
        success: false,
        error: "I'm having trouble connecting right now. Please call us on +44 7735 322362 or visit /quote for an instant quote.",
        response:
          "I'm having trouble connecting right now. Please call us on +44 7735 322362 or visit /quote for an instant quote.",
      },
      { status: 200 } // 200 so the chat UI can display the fallback gracefully
    );
  }
}

// Simple GET endpoint for health checks
export async function GET() {
  return NextResponse.json({
    success: true,
    service: "Maundy Clean AI Assistant",
    status: "online",
    sdk: "z-ai-web-dev-sdk",
  });
}
