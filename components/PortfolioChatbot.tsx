"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, X, Loader2, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  const parseInline = (line: string): React.ReactNode[] => {
    const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**"))
        return React.createElement("strong", { key: i, className: "font-semibold text-white" }, part.slice(2, -2));
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
        return React.createElement("em", { key: i }, part.slice(1, -1));
      if (part.startsWith("`") && part.endsWith("`"))
        return React.createElement("code", { key: i, className: "rounded bg-zinc-700 px-1 py-0.5 font-mono text-[10px] text-emerald-300" }, part.slice(1, -1));
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (m) return React.createElement("a", { key: i, href: m[2], target: "_blank", rel: "noopener noreferrer", className: "text-emerald-400 underline underline-offset-2 hover:text-emerald-300" }, m[1]);
      return part;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "") {
      elements.push(React.createElement("div", { key: key++, className: "h-1.5" }));
      continue;
    }
    if (/^[\*\-]\s+/.test(line)) {
      elements.push(
        React.createElement("div", { key: key++, className: "flex items-start gap-1.5 my-0.5" },
          React.createElement("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" }),
          React.createElement("span", null, parseInline(line.replace(/^[\*\-]\s+/, "")))
        )
      );
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const num = line.match(/^(\d+)\./)?.[1];
      elements.push(
        React.createElement("div", { key: key++, className: "flex items-start gap-1.5 my-0.5" },
          React.createElement("span", { className: "shrink-0 font-mono text-[10px] text-emerald-400" }, num + "."),
          React.createElement("span", null, parseInline(line.replace(/^\d+\.\s+/, "")))
        )
      );
      continue;
    }
    elements.push(React.createElement("p", { key: key++, className: "leading-relaxed" }, parseInline(line)));
  }
  return elements;
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I am Sohaib's AI Assistant. Ask me anything about his projects or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const newMsgs: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "No response generated." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, unable to answer right now. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/40 sm:hidden" onClick={() => setIsOpen(false)} />}
      <div className="fixed z-50 font-sans bottom-0 right-0 left-0 sm:bottom-5 sm:right-5 sm:left-auto">
        {!isOpen && (
          <div className="flex justify-end p-4 sm:p-0">
            <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-zinc-950 font-semibold shadow-xl hover:bg-emerald-400 transition-all hover:scale-105 cursor-pointer">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Ask AI</span>
            </button>
          </div>
        )}
        {isOpen && (
          <div className="flex flex-col overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl w-full rounded-t-2xl h-[85svh] sm:w-[380px] sm:rounded-2xl sm:h-[500px]">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">Sohaib Portfolio AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={"flex gap-2 " + (m.role === "user" ? "justify-end" : "justify-start")}>
                  {m.role === "assistant" && (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
                      <Bot className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div className={"max-w-[82%] rounded-xl px-3 py-2 text-xs leading-relaxed " + (m.role === "user" ? "bg-emerald-600 text-white" : "bg-zinc-900 text-zinc-200 border border-zinc-800")}>
                    {m.role === "assistant" ? <div className="space-y-0.5">{renderMarkdown(m.content)}</div> : <p>{m.content}</p>}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-400" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} className="border-t border-zinc-800 bg-zinc-900/50 p-3 flex gap-2 shrink-0">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about my projects..." className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500" />
              <button type="submit" disabled={!input.trim() || loading} className="rounded-lg bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-500 disabled:opacity-40 transition-colors">
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}