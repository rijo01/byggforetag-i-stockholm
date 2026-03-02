import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Om oss – Byggföretag i Stockholm",
  description: "Vi hjälper stockholmare hitta rätt byggföretag. Läs om vår tjänst och hur vi kvalitetssäkrar alla byggfirmor.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/om-oss" },
};

export default function OmOssPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Om oss</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Om Byggföretag i Stockholm</h1>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-display text-xl text-gray-900 mb-3">Vår mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Vi startade Byggföretag i Stockholm med en enkel idé: att göra det enklare att hitta pålitliga
                byggföretag. Att renovera eller bygga nytt är en stor investering, och att välja fel företag
                kan bli kostsamt. Vi vill eliminera den osäkerheten.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gray-900 mb-3">Så kvalitetssäkrar vi</h2>
              <p className="text-gray-600 leading-relaxed">
                Alla byggföretag på vår plattform genomgår en kontroll. Vi verifierar F-skattsedel,
                ansvarsförsäkring, kreditvärdighet och kundomdömen. Det innebär att du kan känna dig
                trygg med att företagen du får offerter från håller hög standard.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gray-900 mb-3">Så tjänar vi pengar</h2>
              <p className="text-gray-600 leading-relaxed">
                Vår tjänst är helt gratis för dig som privatperson. Vi tar en avgift från byggföretagen
                för varje offertförfrågan vi förmedlar. Det innebär att det aldrig kostar dig något att
                använda vår tjänst.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-gray-900 mb-3">Kontakt</h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <p className="text-sm text-gray-600">
                  📧 E-post: <a href="mailto:hej@byggforetag-i-stockholm.se" className="text-brand-600 hover:underline">hej@byggforetag-i-stockholm.se</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
