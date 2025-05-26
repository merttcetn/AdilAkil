"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Otomatik olarak login sayfasına yönlendir
        router.push("/login");
    }, [router]);

    // Yönlendirme sırasında gösterilecek loading ekranı
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
                <p className="text-neutral-300 text-lg">Yönlendiriliyor...</p>
            </div>
        </div>
    );
}
