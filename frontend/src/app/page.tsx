import Link from "next/link";

export default function Home() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 flex items-center justify-center p-4 relative"
            style={{
                backgroundImage: "url(/bg3.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Hero Section */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-30 h-30 br-gradient-to-br from-surface to-primary rounded-3xl mb-6 shadow-xl border border-border p-2">
                        <img
                            src="/logo.png"
                            alt="Adil Akıl Logo"
                            className="w-24 h-24"
                        />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                        Adil Akıl'a
                        <span className="block text-secondary">
                            Hoşgeldiniz
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Yapay zeka destekli asistan ile sohbet etmeye başlayın.
                        Hukukla ilgili sorularınızı sorun, fikirlerinizi
                        paylaşın.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="mb-12">
                    <Link
                        href="/chat"
                        className="group inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                    >
                        <span>Sohbete Başla</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">
                            Hızlı Yanıt
                        </h3>
                        <p className="text-text/70 text-sm">
                            Anında akıllı cevaplar alın
                        </p>
                    </div>

                    <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-secondary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">
                            Güvenilir
                        </h3>
                        <p className="text-text/70 text-sm">
                            Türk Anayasası ve Kanunları ile eğitilmiş yapay zeka
                            chat botu
                        </p>
                    </div>

                    <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <svg
                                className="w-6 h-6 text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">
                            Kullanıcı Dostu
                        </h3>
                        <p className="text-text/70 text-sm">
                            Kolay ve anlaşılır arayüz
                        </p>
                    </div>
                </div>

                {/* Additional Navigation */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 text-text/70 hover:text-primary px-6 py-3 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Kullanmaya başlamadan önce lütfen okuyun
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-16 text-text/50 text-sm">
                    <p>Beta sürümü</p>
                    <p>
                        Developed by{" "}
                        <a
                            href="https://github.com/merttcetn"
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            Mert Çetin
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
