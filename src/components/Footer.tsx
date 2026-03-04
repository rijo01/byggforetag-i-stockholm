import Link from "next/link";

const footerLinks = {
  tjanster: [
    { href: "/tjanster/badrumsrenovering-stockholm", label: "Badrumsrenovering" },
    { href: "/tjanster/koksrenovering-stockholm", label: "Köksrenovering" },
    { href: "/tjanster/tillbyggnad-stockholm", label: "Tillbyggnad" },
    { href: "/tjanster/nybyggnation-stockholm", label: "Nybyggnation" },
    { href: "/tjanster/fasadrenovering-stockholm", label: "Fasadrenovering" },
    { href: "/tjanster/takrenovering-stockholm", label: "Takrenovering" },
  ],
  omraden: [
    { href: "/stadsdelar/sodermalm", label: "Södermalm" },
    { href: "/stadsdelar/ostermalm", label: "Östermalm" },
    { href: "/stadsdelar/kungsholmen", label: "Kungsholmen" },
    { href: "/stadsdelar/vasastan", label: "Vasastan" },
    { href: "/stadsdelar/solna", label: "Solna" },
    { href: "/stadsdelar/nacka", label: "Nacka" },
  ],
  info: [
    { href: "/om-oss", label: "Om oss" },
    { href: "/hitta-expert", label: "Hitta expert" },
    { href: "/guider", label: "Byggguider" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/integritetspolicy", label: "Integritetspolicy" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300 mt-auto">
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg text-white font-semibold">Byggföretag</div>
                <div className="text-xs text-brand-300">i Stockholm</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Stockholms mest kompletta guide för att hitta pålitliga byggföretag. Jämför, läs omdömen och få offerter gratis.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Tjänster</h3>
            <ul className="space-y-2.5">
              {footerLinks.tjanster.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Områden</h3>
            <ul className="space-y-2.5">
              {footerLinks.omraden.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Information</h3>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} byggforetag-i-stockholm.se – Alla rättigheter förbehållna.</p>
          <p className="text-xs text-gray-600">Hjälper stockholmare hitta rätt byggfirma</p>
        </div>
      </div>
    </footer>
  );
}
