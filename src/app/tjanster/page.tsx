import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Byggtjänster i Stockholm – Alla typer av byggprojekt",
  description: "Se alla byggtjänster vi täcker i Stockholm. Badrumsrenovering, köksrenovering, tillbyggnad, nybyggnation, fasad, tak och mer. Få gratis offerter.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/tjanster" },
};

const tjanster = [
  { slug: "badrumsrenovering", name: "Badrumsrenovering", icon: "🚿", desc: "Komplett badrumsrenovering inklusive rivning, tätskikt, kakel, klinker, VVS och el. Vi hjälper dig hitta specialister som levererar våtrum med garanti.", price: "80 000 – 250 000 kr", time: "3–6 veckor" },
  { slug: "koksrenovering", name: "Köksrenovering", icon: "🍳", desc: "Nytt kök från planering till färdigt resultat. Inkluderar demontering, el, VVS, montering av köksinredning och vitvaror.", price: "100 000 – 400 000 kr", time: "4–8 veckor" },
  { slug: "tillbyggnad", name: "Tillbyggnad", icon: "🏗️", desc: "Utöka din boyta med tillbyggnad, påbyggnad eller inglasning. Från bygglov till inflyttning.", price: "200 000 – 800 000 kr", time: "8–16 veckor" },
  { slug: "nybyggnation", name: "Nybyggnation", icon: "🏠", desc: "Bygga nytt hus eller villa? Vi matchar dig med erfarna totalentreprenörer i Stockholm.", price: "Från 2 000 000 kr", time: "6–12 månader" },
  { slug: "totalrenovering", name: "Totalrenovering", icon: "🔨", desc: "Helrenovering av lägenhet eller villa. Allt från stomme till ytskikt i en komplett lösning.", price: "300 000 – 1 500 000 kr", time: "8–20 veckor" },
  { slug: "fasadrenovering", name: "Fasadrenovering", icon: "🏘️", desc: "Ny fasad, puts, målning och tilläggsisolering. Förbättra husets utseende och energieffektivitet.", price: "150 000 – 500 000 kr", time: "4–8 veckor" },
  { slug: "takrenovering", name: "Takrenovering", icon: "🛖", desc: "Takbyte, omläggning av taktegel, plåttak eller takpapp. Inklusive underlagstak och isolering.", price: "120 000 – 400 000 kr", time: "2–6 veckor" },
  { slug: "malning", name: "Målning", icon: "🎨", desc: "Invändig och utvändig målning av professionella målare. Väggar, tak, fönster, fasad och snickerier.", price: "15 000 – 80 000 kr", time: "1–3 veckor" },
  { slug: "golv", name: "Golvläggning", icon: "🪵", desc: "Parkettgolv, laminat, vinyl, klinker eller trägolv. Slipning och renovering av befintliga golv.", price: "20 000 – 100 000 kr", time: "1–2 veckor" },
  { slug: "el", name: "Elarbeten", icon: "⚡", desc: "Elinstallationer, gruppcentraler, belysning, laddboxar och smarta hem-lösningar av behöriga elektriker.", price: "10 000 – 150 000 kr", time: "1–4 veckor" },
  { slug: "vvs", name: "VVS", icon: "🔧", desc: "Vattenledningar, avlopp, golvvärme, värmepumpar och ventilation av certifierade VVS-tekniker.", price: "15 000 – 200 000 kr", time: "1–4 veckor" },
  { slug: "attefallshus", name: "Attefallshus", icon: "🏡", desc: "Bygglovsbefriade attefallshus som gäststuga, kontor eller uthyrningsobjekt. Nyckelfärdigt.", price: "300 000 – 700 000 kr", time: "6–12 veckor" },
];

export default function TjansterPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Tjänster</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Byggtjänster i Stockholm</h1>
            <p className="text-gray-500 max-w-2xl">Hitta specialister för alla typer av byggprojekt. Välj tjänst för att se företag och få offerter.</p>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tjanster.map((t) => (
              <Link key={t.slug} href={`/tjanster/${t.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all">
                <span className="text-3xl block mb-3">{t.icon}</span>
                <h2 className="font-display text-lg text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{t.name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-brand-600">{t.price}</span>
                  <span className="text-gray-400">⏱ {t.time}</span>
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
