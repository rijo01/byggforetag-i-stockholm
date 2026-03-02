import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Byggguider – Tips och råd inför ditt byggprojekt",
  description: "Läs våra byggguider innan du startar ditt projekt. ROT-avdrag, välja byggföretag, badrumsrenovering, köksrenovering och mer.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/guider" },
};

const guider = [
  { slug: "valja-byggforetag", title: "Så väljer du rätt byggföretag – 7 tips", date: "2025-02-15", category: "Tips" },
  { slug: "badrumsrenovering-guide", title: "Komplett guide: Badrumsrenovering i Stockholm", date: "2025-02-10", category: "Badrum" },
  { slug: "rot-avdrag-guide", title: "ROT-avdrag 2025 – Allt du behöver veta", date: "2025-02-08", category: "Ekonomi" },
  { slug: "koksrenovering-planering", title: "Planera din köksrenovering – Steg för steg", date: "2025-02-01", category: "Kök" },
  { slug: "bygglov-stockholm", title: "Bygglov i Stockholm – Så ansöker du", date: "2025-01-28", category: "Juridik" },
  { slug: "totalrenovering-checklista", title: "Checklista för totalrenovering av lägenhet", date: "2025-01-22", category: "Renovering" },
  { slug: "attefallshus-regler", title: "Attefallshus – Regler, pris och tips 2025", date: "2025-01-15", category: "Nybyggnation" },
  { slug: "vanliga-misstag-renovering", title: "10 vanliga misstag vid renovering – Så undviker du dem", date: "2025-01-10", category: "Tips" },
];

export default function GuiderPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Byggguider</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Byggguider</h1>
            <p className="text-gray-500 max-w-2xl">Tips, råd och guider för att lyckas med ditt byggprojekt. Allt du behöver veta innan du startar.</p>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          <div className="space-y-5">
            {guider.map((g) => (
              <Link key={g.slug} href={`/guider/${g.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full">{g.category}</span>
                      <span className="text-xs text-gray-400">{new Date(g.date).toLocaleDateString("sv-SE")}</span>
                    </div>
                    <h2 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{g.title}</h2>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-brand-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
