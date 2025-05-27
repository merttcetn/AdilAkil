import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "AdilAkıl - Hakkında",
    description:
        "AdilAkıl uygulaması hakkında önemli bilgiler, kullanım koşulları ve sorumluluk reddi beyanları",
    openGraph: {
        title: "AdilAkıl - Hakkında",
        description:
            "AdilAkıl uygulaması hakkında önemli bilgiler, kullanım koşulları ve sorumluluk reddi beyanları",
        images: ["/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "AdilAkıl - Hakkında",
        description:
            "AdilAkıl uygulaması hakkında önemli bilgiler, kullanım koşulları ve sorumluluk reddi beyanları",
        images: ["/logo.png"],
    },
};

export default function About() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative"
            style={{
                backgroundImage: "url(/bg1.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>

            <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-surface/50 border border-border rounded-lg px-6 py-3 mb-6">
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
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">
                            AdilAkıl Hakkında
                        </h1>
                    </div>
                    <p className="text-lg text-text/80 max-w-2xl mx-auto leading-relaxed">
                        AdilAkıl hakkında önemli bilgiler, kullanım koşulları ve
                        sorumluluk reddi beyanları
                    </p>
                </div>

                <div className="space-y-8">
                    {/* App Description */}
                    <section className="bg-surface/30 border border-border rounded-xl p-8">
                        <div className="flex items-center justify-center gap-3 mb-6">
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
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <h2 className="text-2xl font-bold text-primary">
                                Uygulamanın Niteliği
                            </h2>
                        </div>
                        <p className="text-text leading-relaxed text-lg text-center">
                            <span className="font-semibold text-primary">
                                AdilAkıl
                            </span>
                            , Türkiye Cumhuriyeti Anayasası'nı ve Çeşitli
                            Kanunları'nı temel alarak kullanıcıların hukuki
                            sorularına yapay zeka tabanlı yanıt veren bir
                            sistemdir.
                        </p>
                        <span className="font-semibold text-red-700 bg-red-50 px-4 py-2 rounded text-center block text-2xl">
                            AdilAkıl, bir avukat, hukuk müşaviri veya resmi
                            danışman değildir.
                        </span>
                    </section>

                    {/* Important Warnings */}
                    <section className="bg-red-50 border border-red-200 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <svg
                                className="w-6 h-6 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                            <h2 className="text-2xl font-bold !text-red-900">
                                Önemli Uyarılar ve Kullanım Koşulları
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {/* Warning Items */}
                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            1
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                                            />
                                        </svg>
                                        Danışmanlık Sağlamaz
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Bu uygulama,{" "}
                                        <strong>
                                            gerçek bir avukat veya hukuk
                                            müşaviri değildir
                                        </strong>{" "}
                                        ve{" "}
                                        <strong>
                                            profesyonel hukuki danışmanlık
                                            sağlamaz
                                        </strong>
                                        . Kullanıcılara verilen yanıtlar
                                        yalnızca bilgi amaçlıdır ve hukuki
                                        bağlayıcılığı bulunmamaktadır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            2
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
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
                                        Bilgilendirme Amacı Taşır
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        AdilAkıl tarafından sunulan yanıtlar{" "}
                                        <strong>bilgilendirme amacıyla</strong>{" "}
                                        oluşturulmuştur.{" "}
                                        <strong>
                                            Resmi veya bağlayıcı nitelikte
                                            değildir
                                        </strong>{" "}
                                        ve hukuki kararların alınması için
                                        kullanılmamalıdır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            3
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        Hukuki Sorumluluk Reddi
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Bu uygulama tarafından sağlanan bilgiler
                                        nedeniyle ortaya çıkabilecek{" "}
                                        <strong>
                                            herhangi bir zarardan geliştirici,
                                            iş ortakları veya platform sorumlu
                                            tutulamaz
                                        </strong>
                                        . Kullanıcılar, bu uygulamanın
                                        yanıtlarını kullanmadan önce bağımsız
                                        hukuki tavsiye almalıdır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            4
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Kullanıcı Sorumluluğu
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Kullanıcılar, uygulamadan alınan
                                        bilgiler doğrultusunda verdikleri
                                        kararlardan{" "}
                                        <strong>kendileri sorumludur</strong>.{" "}
                                        <strong>
                                            Hukuki kararlar almadan önce bir
                                            avukata danışılması önerilir.
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            5
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        Veri Kaynakları ve Güncellik
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Uygulama,{" "}
                                        <strong>
                                            Türkiye Cumhuriyeti Anayasası
                                        </strong>{" "}
                                        ve belirli hukuki kaynaklardan alınan
                                        metinlere dayalıdır. Ancak,{" "}
                                        <strong>
                                            mevzuatlar zamanla değişebilir
                                        </strong>{" "}
                                        ve AdilAkıl bu değişiklikleri otomatik
                                        olarak güncellemez. Kullanıcıların en
                                        güncel mevzuata erişmek için{" "}
                                        <strong>
                                            resmi kaynakları kontrol etmesi
                                            önerilir.
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            6
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                        Ticari Kullanım Yasağı
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        AdilAkıl,{" "}
                                        <strong>
                                            ticari veya kurumsal kullanım için
                                            tasarlanmamıştır
                                        </strong>
                                        .{" "}
                                        <strong>
                                            Sadece bireysel, eğitim ve araştırma
                                            amaçlı kullanım
                                        </strong>{" "}
                                        için uygundur. Ticari kullanım durumunda
                                        geliştirici sorumluluk kabul etmez.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            7
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        Gizlilik ve Güvenlik
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        AdilAkıl, kullanıcıların sağladığı
                                        bilgileri yalnızca{" "}
                                        <strong>uygulama içinde</strong>{" "}
                                        kullanır ve üçüncü taraflarla paylaşmaz.
                                        Ancak,{" "}
                                        <strong>
                                            veri güvenliği tam olarak garanti
                                            edilemez
                                        </strong>{" "}
                                        ve kullanıcıların kişisel bilgileri
                                        paylaşmadan önce bu riski göz önünde
                                        bulundurması önerilir.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            8
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        Beta ve Geliştirme Süreci
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        AdilAkıl henüz{" "}
                                        <strong>
                                            geliştirme/beta aşamasında
                                        </strong>{" "}
                                        olabilir ve hata veya eksiklikler
                                        içerebilir. Kullanıcılar bu durumu kabul
                                        ederek uygulamayı kullanır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            9
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-3m3 3l3-3"
                                            />
                                        </svg>
                                        Yetkili Merciler
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Herhangi bir hukuki uyuşmazlık durumunda{" "}
                                        <strong>
                                            Türkiye Cumhuriyeti yasaları ve
                                            mahkemeleri yetkilidir.
                                        </strong>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-6 bg-gray-50 border border-red-100 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                        <span className="text-red-700 font-bold text-sm">
                                            10
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold !text-red-900 mb-2 flex items-center gap-2 text-xl">
                                        <svg
                                            className="w-4 h-4 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                        Sorumluluk Reddi ve Güncelleme Hakkı
                                    </h3>
                                    <p className="text-red-800 leading-relaxed">
                                        Bu sayfa{" "}
                                        <strong>
                                            bilgilendirme amacıyla
                                            hazırlanmıştır
                                        </strong>{" "}
                                        ve{" "}
                                        <strong>
                                            zaman zaman güncellenebilir
                                        </strong>
                                        . Geliştirici, içeriği değiştirme
                                        hakkını saklı tutar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Highlighted Warning Box */}
                    <section className="bg-amber-50 border-2 border-amber-300 rounded-xl p-8 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-amber-200 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-amber-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <svg
                                        className="w-5 h-5 text-amber-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                    <h3 className="text-xl font-bold !text-red-900">
                                        Önemli Hatırlatma
                                    </h3>
                                </div>
                                <p className="text-amber-900 text-lg leading-relaxed">
                                    <strong>
                                        AdilAkıl bir avukat değildir.
                                    </strong>{" "}
                                    Sağlanan bilgiler yalnızca bilgilendirme
                                    amacıyla sunulmaktadır. Resmi hukuki
                                    danışmanlık için lütfen bir avukata
                                    başvurunuz.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Last Update */}
                    <section className="bg-surface/30 border border-border rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="font-semibold text-primary">
                                    Son Güncelleme
                                </span>
                            </div>
                            <span className="text-text/70 font-medium">
                                27 Mayıs 2025
                            </span>
                        </div>
                    </section>

                    {/* Developer Info */}
                    <section className="bg-gradient-to-br from-surface/20 to-surface/10 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="flex flex-col items-center space-y-6">
                            {/* Header */}
                            <div className="text-center">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold !text-primary">
                                        Geliştirici
                                    </h3>
                                </div>
                                <p className="text-text/90 text-lg leading-relaxed max-w-md mx-auto">
                                    Bu proje
                                    <span className="font-semibold text-secondary mx-1">
                                        Mert Çetin
                                    </span>
                                    tarafından geliştirilmiştir.
                                </p>
                            </div>

                            {/* Contact Card */}
                            <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg">
                                <div className="flex justify-center gap-6">
                                    {/* Email */}
                                    <a
                                        href="mailto:mert.cetin20@gmail.com"
                                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors group"
                                    >
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/merttcetn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-700"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/mertcetin20/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                                    >
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Beta Badge */}
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full px-6 py-3 shadow-sm">
                                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse shadow-sm"></div>
                                <span className="text-sm font-semibold text-orange-800">
                                    Beta Sürümü
                                </span>
                                <div className="w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
                                <span className="text-xs text-orange-700">
                                    v1.0.0
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Back to Home Button */}
                    <div className="text-center pt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
                        >
                            <svg
                                className="w-5 h-5"
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
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
