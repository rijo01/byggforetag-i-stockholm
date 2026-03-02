import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";

const tjanster = [
  { slug: "badrumsrenovering", name: "Badrumsrenovering", icon: "🚿", desc: "Komplett badrumsrenovering med kakel, klinker, VVS och el.", price: "Från 80 000 kr" },
  { slug: "koksrenovering", name: "Köksrenovering", icon: "🍳", desc: "Nytt kök med montering, el, VVS och vitvaror.", price: "Från 100 000 kr" },
  { slug: "tillbyggnad", name: "Tillbyggnad", icon: "🏗️", desc: "Utöka din boyta med tillbyggnad eller påbyggnad.", price: "Från 200 000 kr" },
  { slug: "totalrenovering", name: "Totalrenovering", icon: "🔨", desc: "Helrenovering av lägenhet eller villa.", price: "Från 300 000 kr" },
  { slug: "fasadrenovering", name: "Fasadrenovering", icon: "🏠", desc: "Ny fasad, puts, målning och isolering.", price: "Från 150 000 kr" },
  { slug: "takrenovering", name: "Takrenovering", icon: "🏘️", desc: "Takbyte, takläggning och takisolering.", price: "Från 120 000 kr" },
  { slug: "malning", name: "Målning", icon: "🎨", desc: "Invändig och utvändig målning av professionella målare.", price: "Från 15 000 kr" },
  { slug: "golv", name: "Golvläggning", icon: "🪵", desc: "Parkettgolv, klinkergolv, laminat och vinylgolv.", price: "Från 20 000 kr" },
];

const omraden = [
  { slug: "sodermalm", name: "Södermalm", count: 34 },
  { slug: "ostermalm", name: "Östermalm", count: 28 },
  { slug: "norrmalm", name: "Norrmalm", count: 22 },
  { slug: "kungsholmen", name: "Kungsholmen", count: 19 },
  { slug: "vasastan", name: "Vasastan", count: 17 },
  { slug: "solna", name: "Solna", count: 31 },
  { slug: "nacka", name: "Nacka", count: 24 },
  { slug: "lidingo", name: "Lidingö", count: 16 },
  { slug: "taby", name: "Täby", count: 21 },
  { slug: "huddinge", name: "Huddinge", count: 18 },
];

const guider = [
  { slug: "valja-byggforetag", title: "Så väljer du rätt byggföretag – 7 tips", category: "Tips" },
  { slug: "badrumsrenovering-guide", title: "Komplett guide: Badrumsrenovering i Stockholm", category: "Badrum" },
  { slug: "rot-avdrag-guide", title: "ROT-avdrag 2025 – Allt du behöver veta", category: "Ekonomi" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Byggföretag i Stockholm",
    url: "https://byggforetag-i-stockholm.se",
    description: "Hitta pålitliga byggföretag i Stockholm. Jämför byggfirmor, läs omdömen och få offerter.",
  };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="container-site py-16 sm:py-24 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm font-medium border border-white/10">
                  <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Över 200 verifierade byggföretag
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight">
                  Hitta rätt<br />
                  <span className="text-accent-400">byggföretag</span><br />
                  i Stockholm
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                  Jämför kvalitetssäkrade byggfirmor, läs omdömen och få upp till 3 gratis offerter. Vi hjälper dig hitta rätt byggare för ditt projekt.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/hitta-expert" className="inline-flex items-center justify-center px-7 py-3.5 bg-accent-500 text-brand-900 font-bold rounded-xl hover:bg-accent-400 transition-all shadow-lg text-sm">
                    Få gratis offerter
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/tjanster" className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 text-sm">
                    Se alla tjänster
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="container-site -mt-8 relative z-10 mb-16">
          <TrustBadges />
        </section>

        {/* Mobile form */}
        <section className="lg:hidden container-site mb-16">
          <QuoteForm />
        </section>

        {/* Tjänster */}
        <section className="container-site mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-2">Populära byggtjänster</h2>
              <p className="text-gray-500 text-sm">Hitta specialister för alla typer av byggprojekt</p>
            </div>
            <Link href="/tjanster" className="hidden sm:inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-600">
              Alla tjänster →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tjanster.map((t) => (
              <Link key={t.slug} href={`/tjanster/${t.slug}`}
                className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all">
                <span className="text-3xl block mb-3">{t.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-brand-600 transition-colors">{t.name}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{t.desc}</p>
                <span className="text-xs font-medium text-brand-500">{t.price}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Områden */}
        <section className="bg-white py-16 sm:py-20 border-y border-gray-200">
          <div className="container-site">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-2">Byggföretag per område</h2>
              <p className="text-gray-500 text-sm">Hitta byggfirmor nära dig i Stockholmsområdet</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {omraden.map((o) => (
                <Link key={o.slug} href={`/stadsdelar/${o.slug}`}
                  className="group bg-gray-50 rounded-2xl p-4 hover:bg-brand-50 border border-transparent hover:border-brand-200 transition-all text-center">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors">{o.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{o.count} företag</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container-site py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-2">Så fungerar det</h2>
            <p className="text-gray-500 text-sm">Tre enkla steg till ditt nästa byggprojekt</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Beskriv ditt projekt", desc: "Fyll i formuläret med vad du behöver hjälp med. Det tar bara 2 minuter." },
              { step: "2", title: "Få offerter", desc: "Vi matchar dig med upp till 3 kvalitetssäkrade byggföretag som skickar offerter." },
              { step: "3", title: "Jämför & välj", desc: "Jämför offerter, läs omdömen och välj det företag som passar dig bäst." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-brand-500 text-white rounded-2xl flex items-center justify-center font-display text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guider */}
        <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-200">
          <div className="container-site">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-gray-900 mb-2">Byggguider</h2>
                <p className="text-gray-500 text-sm">Tips och råd inför ditt byggprojekt</p>
              </div>
              <Link href="/guider" className="hidden sm:inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-600">
                Alla guider →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {guider.map((g) => (
                <Link key={g.slug} href={`/guider/${g.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-200 hover:shadow-md transition-all">
                  <span className="text-xs font-medium bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full">{g.category}</span>
                  <h3 className="font-semibold text-gray-900 mt-3 group-hover:text-brand-600 transition-colors leading-snug">{g.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="container-site py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl text-gray-900 mb-4">Hitta byggföretag i Stockholm</h2>
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Att hitta rätt byggföretag i Stockholm kan vara en utmaning. Med hundratals byggfirmor att välja mellan
                är det viktigt att jämföra noggrant innan du bestämmer dig. Vi hjälper dig att hitta kvalitetssäkrade
                byggföretag som passar just ditt projekt och din budget.
              </p>
              <p>
                Oavsett om du planerar en badrumsrenovering på Södermalm, en tillbyggnad i Nacka eller en totalrenovering
                i Vasastan – våra verifierade byggföretag täcker hela Stockholmsområdet. Alla företag på vår plattform
                har F-skattsedel, ansvarsförsäkring och verifierade kundomdömen.
              </p>
              <p>
                Kom ihåg att alltid begära flera offerter, kontrollera referenser och säkerställa att ROT-avdrag kan
                tillämpas där det är möjligt. Med vår tjänst får du upp till 3 offerter helt gratis och utan förpliktelser.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
