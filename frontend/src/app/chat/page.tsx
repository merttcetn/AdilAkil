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
            text: "Merhaba! Ben AdilAkıl, size nasıl yardımcı olabilirim?",
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
        if (!input.trim() || loading) return;

        const currentInput = input;
        setInput(""); // Input'u hemen temizle

        // Textarea'nın yüksekliğini reset et
        if (inputRef.current) {
            inputRef.current.style.height = "auto";
        }

        await sendMessage(currentInput, messages, setMessages, setLoading);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 via-stone-50 to-slate-100 dark:from-gray-900 dark:via-stone-900 dark:to-slate-900 overflow-hidden relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 blur-sm"
                style={{
                    backgroundImage: "url(/bg2.jpeg)",
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>

            {/* Header with glassmorphism effect */}
            <header className="relative z-10 backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border-b border-white/30 dark:border-gray-700/40 px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="group p-2 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 text-gray-600 hover:text-green-700 dark:text-gray-400 dark:hover:text-green-400"
                    >
                        <svg
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
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
                        <div className="relative w-12 h-12 bg-gradient-to-tr from-red-900 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="AdilAkıl Logo"
                                    className="w-9 h-9"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-900/20 to-red-800/20 animate-pulse"></div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-transparent">
                                AdilAkıl
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                Yapay Zeka Hukuk Asistanı
                            </p>
                        </div>
                    </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-400">
                        Çevrimiçi
                    </span>
                </div>
            </header>

            {/* Messages with improved animations */}
            <div className="relative z-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="max-w-4xl mx-auto py-6 space-y-6">
                    {messages.map((message, index) => (
                        <div
                            key={message.id}
                            className={`animate-fade-in-up px-4 ${
                                message.isUser
                                    ? "ml-auto max-w-2xl"
                                    : "mr-auto max-w-3xl"
                            }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: "both",
                            }}
                        >
                            <div
                                className={`group relative ${
                                    message.isUser
                                        ? "flex flex-row-reverse"
                                        : "flex"
                                } gap-3`}
                            >
                                {/* Avatar with improved design */}
                                <div className="flex-shrink-0">
                                    {message.isUser ? (
                                        <div className="w-10 h-10 bg-gradient-to-tr from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 bg-gradient-to-tr from-red-900 to-red-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative">
                                            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                                                <img
                                                    src="/logo.png"
                                                    alt="AdilAkıl Logo"
                                                    className="w-4 h-4"
                                                />
                                            </div>
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-900/20 to-red-800/20 group-hover:animate-pulse"></div>
                                        </div>
                                    )}
                                </div>

                                {/* Message Content with glassmorphism */}
                                <div className="flex-1 min-w-0">
                                    <div
                                        className={`backdrop-blur-2xl rounded-3xl shadow-xl border transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 ${
                                            message.isUser
                                                ? "bg-gradient-to-br from-gray-600 to-gray-700 text-white border-gray-500/30 ml-4"
                                                : "bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 border-white/30 dark:border-gray-700/40 mr-4"
                                        }`}
                                    >
                                        <div className="p-4">
                                            <div
                                                className={`flex items-center gap-2 mb-2 ${
                                                    message.isUser
                                                        ? "justify-end"
                                                        : "justify-start"
                                                }`}
                                            >
                                                <span
                                                    className={`font-semibold text-sm ${
                                                        message.isUser
                                                            ? "text-gray-100"
                                                            : "text-gray-700 dark:text-gray-300"
                                                    }`}
                                                >
                                                    {message.isUser
                                                        ? "Siz"
                                                        : "AdilAkıl"}
                                                </span>
                                                <span
                                                    className={`text-xs ${
                                                        message.isUser
                                                            ? "text-gray-200"
                                                            : "text-gray-500 dark:text-gray-400"
                                                    }`}
                                                >
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
                                                className={`leading-relaxed whitespace-pre-wrap ${
                                                    message.isUser
                                                        ? "text-right text-white"
                                                        : "text-left"
                                                }`}
                                            >
                                                {message.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Enhanced loading indicator */}
                    {loading && (
                        <div className="animate-fade-in px-4 mr-auto max-w-3xl">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-gradient-to-tr from-red-900 to-red-800 rounded-2xl flex items-center justify-center shadow-lg relative">
                                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                                        <img
                                            src="/logo.png"
                                            alt="AdilAkıl Logo"
                                            className="w-4 h-4"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-900/20 to-red-800/20 animate-pulse"></div>
                                </div>
                                <div className="backdrop-blur-2xl bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl border border-white/30 dark:border-gray-700/40 mr-4 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                                            AdilAkıl
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            düşünüyor...
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-red-800 rounded-full animate-bounce"></div>
                                            <div
                                                className="w-2 h-2 bg-green-700 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: "0.1s",
                                                }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: "0.2s",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="ml-4 flex items-center gap-3">
                                            <div className="w-12 h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 rounded-full overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-r from-red-800 to-green-700 rounded-full animate-pulse-scale"></div>
                                            </div>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 animate-pulse">
                                                Analiz ediliyor
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Enhanced Input Area */}
            <div className="relative z-10 backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border-t border-white/30 dark:border-gray-700/40 p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-green-800 rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="relative backdrop-blur-2xl bg-white/95 dark:bg-gray-800/95 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Hukuki sorunuzu buraya yazın..."
                                className="w-full bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none border-0 outline-0 p-4 pr-16 max-h-32 min-h-[24px] text-sm leading-relaxed"
                                rows={1}
                                style={{ height: "auto" }}
                                onInput={(e) => {
                                    const target =
                                        e.target as HTMLTextAreaElement;
                                    target.style.height = "auto";
                                    target.style.height =
                                        target.scrollHeight + "px";
                                }}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!input.trim() || loading}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2.5 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white text-sm disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                            >
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            <span className="inline-flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                                AdilAkıl Beta Sürümü
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                            Enter ile gönder • Shift+Enter ile yeni satır
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes pulse-scale {
                    0%,
                    100% {
                        transform: scaleX(0.8);
                        opacity: 0.8;
                    }
                    50% {
                        transform: scaleX(1);
                        opacity: 1;
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 0.4s ease-out;
                }

                .animate-pulse-scale {
                    animation: pulse-scale 2s ease-in-out infinite;
                }

                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }

                .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
                    background-color: rgb(209 213 219);
                    border-radius: 3px;
                }

                .scrollbar-track-transparent::-webkit-scrollbar-track {
                    background: transparent;
                }
            `}</style>
        </div>
    );
}
