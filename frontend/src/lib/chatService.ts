"use client";

import type { Message } from "@/lib/types";

interface ChatService {
    sendMessage: (
        input: string,
        currentMessages: Message[],
        setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => Promise<void>;
}

export const useChatService = (): ChatService => {
    const sendMessage = async (
        input: string,
        currentMessages: Message[],
        setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: input,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ask?q=${encodeURIComponent(
                    input
                )}`
            );
            const data = await res.json();

            const aiMessage: Message = {
                id: Date.now() + 1,
                text: data.answer || "Üzgünüm, bir yanıt alamadım.",
                isUser: false,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: Date.now() + 1,
                text: "Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin.",
                isUser: false,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage };
};
