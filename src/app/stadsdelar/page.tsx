import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Byggföretag per område i Stockholm",
  description: "Hitta byggföretag i ditt område. Vi täcker hela Stockholmsregionen med verifierade byggfirmor. Södermalm, Östermalm, Solna, Nacka och fler.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/stadsdelar" },
};

const omraden = [
  { slug: "sodermalm", name: "Södermalm", count: 34, desc: "Renoveringar i äldre fastigheter, badrum och kök i sekelskifteshus." },
  { slug: "ostermalm", name: "Östermalm", count: 28, desc: "Exklusiva renoveringar och ombyggnationer i Stockholms finaste kvarter." },
  { slug: "norrmalm", name: "Norrmalm", count: 22, desc: "Kontorsrenoveringar och lägenhetsrenoveringar i city." },
  { slug: "kungsholmen", name: "Kungsholmen", count: 19, desc: "Blandad bebyggelse med både äldre och nyare fastigheter." },
  { slug: "vasastan", name: "Vasastan", count: 17, desc: "Sekelskiftesrenovering och badrumsrenoveringar i klassiska fastigheter." },
  { slug: "solna", name: "Solna", count: 31, desc: "Villarenoveringar och tillbyggnader i populära villaområden." },
  { slug: "nacka", name: "Nacka", count: 24, desc: "Nybyggnation, tillbyggnad och renovering i expansivt område." },
  { slug: "lidingo", name: "Lidingö", count: 16, desc: "Villarenoveringar och exklusiva tillbyggnadsprojekt." },
  { slug: "taby", name: "Täby", count: 21, desc: "Villaområde med stort behov av tillbyggnader och moderniseringar." },
  { slug: "huddinge", name: "Huddinge", count: 18, desc: "Blandad bebyggelse med villor, radhus och flerfamiljshus." },
  { slug: "bromma", name: "Bromma", count: 26, desc: "Stockholms största villaområde med löpande renoveringsbehov." },
  { slug: "enskede", name: "Enskede", count: 15, desc: "Småhusområde med stor potential för tillbyggnad och renovering." },
];

export default function StadsdelarPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Områden</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Byggföretag per område</h1>
            <p className="text-gray-500 max-w-2xl">Hitta verifierade byggföretag nära dig. Vi täcker hela Stockholmsregionen.</p>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {omraden.map((o) => (
              <Link key={o.slug} href={`/stadsdelar/${o.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-display text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
                    Byggföretag i {o.name}
                  </h2>
                  <span className="text-xs font-medium bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full whitespace-nowrap">{o.count} företag</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
