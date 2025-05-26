"use client";

import { useState, useEffect, FormEvent, useRef } from "react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: "user",
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setLoading(true);

        // Mock API call for /api/chat
        // In a real application, this would be a POST request to /api/chat
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: `Yanıt: "${userMessage.text}" (Bu bir mock yanıttır.)`,
            sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-neutral-900">
            <header className="p-4 text-white bg-indigo-600 shadow-md dark:bg-indigo-700">
                <h1 className="text-2xl font-bold text-center">AdilAkıl</h1>
            </header>

            <main className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-3xl mx-auto space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${
                                msg.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-xs px-4 py-2 rounded-lg shadow lg:max-w-md xl:max-w-lg ${
                                    msg.sender === "user"
                                        ? "bg-indigo-500 text-white dark:bg-indigo-600"
                                        : "bg-white text-gray-900 dark:bg-neutral-700 dark:text-white"
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                    {loading && (
                        <div className="flex justify-center">
                            <div className="w-8 h-8 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin dark:border-indigo-400 dark:border-t-transparent"></div>
                        </div>
                    )}
                </div>
            </main>

            <footer className="p-4 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
                <form
                    onSubmit={handleSubmit}
                    className="flex max-w-3xl mx-auto space-x-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Bir soru sorun..."
                        className="flex-1 px-4 py-2 text-gray-900 bg-white dark:bg-neutral-700 dark:text-white placeholder-gray-500 dark:placeholder-neutral-400 border border-gray-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="px-6 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-neutral-800"
                    >
                        Gönder
                    </button>
                </form>
            </footer>
        </div>
    );
}
