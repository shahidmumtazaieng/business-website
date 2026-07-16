"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, RotateCcw } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// WhatsApp SVG brand icon (lucide doesn't ship WhatsApp brand)
// ============================================================
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

// ============================================================
// Types
// ============================================================
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};

type ChatApiResponse = {
  success: boolean;
  response?: string;
  error?: string;
  sessionId?: string;
};

// ============================================================
// Quick-reply suggestion chips
// ============================================================
const QUICK_REPLIES = [
  "How much is a recurring clean?",
  "Do you cover Edinburgh?",
  "What's included in a deep clean?",
  "Are your cleaners insured?",
  "Book a quote",
];

// ============================================================
// Session ID — persisted per browser session
// ============================================================
function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  const KEY = "maundy-chat-session";
  let id = window.sessionStorage.getItem(KEY);
  if (!id) {
    id = `sess-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    window.sessionStorage.setItem(KEY, id);
  }
  return id;
}

// ============================================================
// Main FloatingButtons component
// ============================================================
export function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm Maundy — your AI cleaning assistant. Ask me about our services, pricing, or coverage across Scotland. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // WhatsApp deep link — uses phone number from contactInfo
  const whatsappNumber = contactInfo.phone.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Maundy Clean, I'd like to enquire about your cleaning services."
  )}`;

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (chatOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setHasNewMessage(false);
    }
  }, [chatOpen]);

  // Send message to /api/chat
  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Build history (last 8 messages) to send to API
      const history = messages.slice(-8).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          sessionId: getSessionId(),
          history,
        }),
      });

      const data: ChatApiResponse = await res.json();

      const aiMsg: ChatMessage = {
        role: "assistant",
        content:
          data.response ||
          "I'm having trouble right now. Please call us on " +
            contactInfo.phone +
            " or visit /quote.",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMsg]);

      // If chat is closed, flag that there's a new message
      if (!chatOpen) setHasNewMessage(true);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having trouble connecting. Please call us on ${contactInfo.phone} or visit /quote for an instant quote.`,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (text: string) => {
    sendMessage(text);
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi, I'm Maundy — your AI cleaning assistant. How can I help you today?",
        timestamp: Date.now(),
      },
    ]);
    setInput("");
  };

  return (
    <>
      {/* ============================================================ */}
      {/* Floating buttons — fixed bottom-right                        */}
      {/* ============================================================ */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
        {/* WhatsApp button — always visible */}
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", damping: 14, stiffness: 200 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        >
          <WhatsAppIcon className="w-7 h-7 lg:w-9 lg:h-9" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--ink)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </motion.a>

        {/* Chatbot toggle button */}
        <motion.button
          onClick={() => setChatOpen((v) => !v)}
          aria-label={chatOpen ? "Close AI chat assistant" : "Open AI chat assistant"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", damping: 14, stiffness: 200 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] shadow-brand flex items-center justify-center text-white"
        >
          <AnimatePresence mode="wait">
            {chatOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 lg:w-7 lg:h-7" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="w-6 h-6 lg:w-7 lg:h-7" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* New-message indicator badge */}
          {hasNewMessage && !chatOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--gold)] border-2 border-white"
            />
          )}

          {/* Pulse ring (only when closed) */}
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-[var(--brand)] animate-ping opacity-20 group-hover:opacity-0" />
          )}

          {/* Tooltip */}
          {!chatOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[var(--ink)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Ask Maundy AI
            </span>
          )}
        </motion.button>
      </div>

      {/* ============================================================ */}
      {/* Chat panel                                                   */}
      {/* ============================================================ */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-[var(--border)] flex flex-col overflow-hidden"
            style={{
              bottom: "calc(5rem + 5rem + 1rem)",
              right: "1.25rem",
              left: "1.25rem",
              maxWidth: "24rem",
              maxHeight: "min(70vh, 600px)",
              height: "min(70vh, 600px)",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand)] text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[var(--gold)]" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#22c55e] border-2 border-[var(--brand-dark)]" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm leading-tight">
                    Maundy AI Assistant
                  </div>
                  <div className="text-[11px] text-white/75 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                    Online · replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={resetChat}
                aria-label="Reset chat"
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Messages scroll area */}
            <div className="flex-1 overflow-y-auto bg-[var(--cream)] px-3 py-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    msg.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "max-w-[80%] bg-[var(--brand)] text-white rounded-2xl rounded-br-md px-3.5 py-2.5 text-sm leading-relaxed shadow-sm"
                        : "max-w-[85%] bg-white text-[var(--ink)] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-sm leading-relaxed shadow-sm border border-[var(--border)]"
                    }
                  >
                    {/* Render assistant response with light markdown (URLs as links) */}
                    {msg.role === "assistant" ? (
                      <FormattedBotText text={msg.content} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-[var(--ink)] rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-[var(--border)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="text-xs text-[var(--muted-foreground)] ml-1">Maundy is typing…</span>
                  </div>
                </motion.div>
              )}

              {/* Quick replies — only show when chat is fresh (≤2 messages) and not loading */}
              {messages.length <= 2 && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => handleQuickReply(qr)}
                      className="text-xs font-medium bg-white border border-[var(--brand)]/30 text-[var(--brand-dark)] hover:bg-[var(--brand-light)]/50 hover:border-[var(--brand)]/60 rounded-full px-3 py-1.5 transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border-t border-[var(--border)] p-3 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, pricing, coverage…"
                disabled={loading}
                maxLength={500}
                className="flex-1 h-11 px-4 rounded-full bg-[var(--cream)] border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)]/40 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-11 h-11 rounded-full bg-[var(--brand)] hover:bg-[var(--brand-dark)] disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-sm transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Footer — small disclaimer */}
            <div className="bg-[var(--cream)] border-t border-[var(--border)] px-3 py-2 text-center shrink-0">
              <p className="text-[10px] text-[var(--muted-foreground)] leading-tight">
                Powered by Maundy AI · For bookings call{" "}
                <a
                  href={contactInfo.phoneHref}
                  className="font-semibold text-[var(--brand)] hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================
// FormattedBotText — render URLs as clickable links and
// preserve line breaks in the bot's response.
// ============================================================
function FormattedBotText({ text }: { text: string }) {
  // Split by lines, render <br/> between, and linkify anything matching /path or URLs
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </span>
      ))}
    </>
  );
}

// Linkify — turn anything that looks like an internal path /services/x, /quote, /locations
// or external URL into a clickable link
function linkify(text: string): React.ReactNode {
  // Match /word paths OR full URLs
  const regex = /((?:\/(?:services|locations|quote|contact|blog)[^\s)]*)|(?:https?:\/\/[^\s)]+))/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (part.match(regex) && part.length > 0) {
      const isExternal = part.startsWith("http");
      const href = isExternal ? part : part;
      return (
        <a
          key={i}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[var(--brand)] font-semibold hover:underline"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
