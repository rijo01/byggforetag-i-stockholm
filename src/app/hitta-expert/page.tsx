import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Hitta byggexpert – Få gratis offerter i Stockholm",
  description: "Beskriv ditt byggprojekt och få upp till 3 gratis offerter från kvalitetssäkrade byggföretag i Stockholm. Helt utan förpliktelser.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/hitta-expert" },
};

export default function HittaExpertPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Hitta expert</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Hitta rätt byggexpert</h1>
            <p className="text-gray-500 max-w-2xl">
              Beskriv ditt projekt och få upp till 3 offerter från verifierade byggföretag. Gratis och utan förpliktelser.
            </p>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-display text-lg text-gray-900 mb-4">Varför använda oss?</h3>
                <ul className="space-y-3">
                  {[
                    "Helt gratis – inga dolda kostnader",
                    "Upp till 3 offerter att jämföra",
                    "Alla företag är kvalitetssäkrade",
                    "Verifierade omdömen från riktiga kunder",
                    "F-skattsedel och försäkring kontrollerade",
                    "ROT-avdrag kan tillämpas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent-400/10 rounded-2xl p-6 border border-accent-400/20">
                <h3 className="font-display text-lg text-gray-900 mb-2">💡 Tips</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ju mer detaljer du ger om ditt projekt, desto bättre offerter kan du förvänta dig.
                  Beskriv gärna yta, material-önskemål och tidsplan.
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
