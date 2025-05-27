"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useChatService } from "@/lib/chatService";
import type { Message } from "@/lib/types";

export default function ChatPage() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Merhaba! Ben Adil Akıl, size nasıl yardımcı olabilirim?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const { sendMessage } = useChatService();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        await sendMessage(input, messages, setMessages, setLoading);
        setInput("");
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="h-screen flex flex-col bg-background rounded-3xl overflow-hidden">
            {/* Header */}
            <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-muted hover:text-accent transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 from-surface to-primary rounded-2xl flex items-center justify-center border border-border p-1">
                            <img
                                src="/logo.png"
                                alt="Adil Akıl Logo"
                                className="w-8 h-8"
                            />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-primary">
                                Adil Akıl
                            </h1>
                            <p className="text-sm text-muted">
                                AI Hukuk Asistanı
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`py-6 px-6 mx-4 my-2 ${
                                message.isUser
                                    ? "ml-auto max-w-2xl"
                                    : "mr-auto max-w-3xl"
                            }`}
                        >
                            <div
                                className={`flex gap-4 ${
                                    message.isUser
                                        ? "flex-row-reverse bg-accent/10 rounded-3xl p-4 border border-accent/20"
                                        : "bg-surface rounded-3xl p-4 border border-border/50"
                                }`}
                            >
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    {message.isUser ? (
                                        <div className="w-8 h-8 bg-accent rounded-2xl flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 bg-gradient-to-bg from-surface to-primary rounded-2xl flex items-center justify-center border border-border p-1">
                                            <img
                                                src="/logo.png"
                                                alt="Adil Akıl Logo"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Message Content */}
                                <div className="flex-1 min-w-0">
                                    <div
                                        className={`flex items-center gap-2 mb-1 ${
                                            message.isUser
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <span className="font-semibold text-primary">
                                            {message.isUser
                                                ? "Siz"
                                                : "Adil Akıl"}
                                        </span>
                                        <span className="text-xs text-muted">
                                            {message.timestamp.toLocaleTimeString(
                                                "tr-TR",
                                                {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                }
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={`text-text leading-relaxed whitespace-pre-wrap ${
                                            message.isUser
                                                ? "text-right"
                                                : "text-left"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Loading indicator */}
                    {loading && (
                        <div className="py-6 px-6 mx-4 my-2 mr-auto max-w-3xl">
                            <div className="flex gap-4 bg-surface rounded-3xl p-4 border border-border/50">
                                <div className="w-8 h-8 bg-gradient-to-bg from-surface to-primary rounded-2xl flex items-center justify-center border border-border p-1">
                                    <img
                                        src="/logo.png"
                                        alt="Adil Akıl Logo"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-primary">
                                            Adil Akıl
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                                        <div
                                            className="w-2 h-2 bg-accent rounded-full animate-bounce"
                                            style={{ animationDelay: "0.1s" }}
                                        ></div>
                                        <div
                                            className="w-2 h-2 bg-accent rounded-full animate-bounce"
                                            style={{ animationDelay: "0.2s" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-surface border-t border-border p-4 rounded-b-3xl">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-background border border-border rounded-3xl">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Hukuki sorunuzu buraya yazın..."
                            className="w-full bg-transparent text-text placeholder-muted resize-none border-0 outline-0 p-4 pr-12 max-h-32 min-h-[24px]"
                            rows={1}
                            style={{ height: "auto" }}
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = "auto";
                                target.style.height =
                                    target.scrollHeight + "px";
                            }}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!input.trim() || loading}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-secondary text-white text-sm disabled:bg-muted disabled:cursor-not-allowed rounded-xl"
                        >
                            Gönder
                        </button>
                    </div>
                    <p className="text-xs text-muted mt-2 text-center">
                        Adil Akıl Beta sürümü
                    </p>
                </div>
            </div>
        </div>
    );
}
