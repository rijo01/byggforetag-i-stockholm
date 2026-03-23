import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBlogg } from "@/lib/content";

export const metadata: Metadata = {
  title: "Byggblogg – Nyheter, tips och trender från Stockholm",
  description: "Läs vår byggblogg för senaste nyheterna, tips och trender inom renovering och byggkvalitet i Stockholm.",
  alternates: { canonical: "https://byggforetag-i-stockholm.se/blogg" },
};

export default function BloggPage() {
  const blogg = getAllBlogg().sort((a, b) => 
    b.meta.publishedAt.localeCompare(a.meta.publishedAt)
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-12 sm:py-16 border-b border-gray-200">
          <div className="container-site">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Byggblogg</span>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">Byggblogg</h1>
            <p className="text-gray-500 max-w-2xl">Senaste nyheterna, tips och trender inom renovering och byggkvalitet i Stockholm.</p>
          </div>
        </section>

        <section className="container-site py-12 sm:py-16">
          {blogg.length > 0 ? (
            <div className="space-y-5">
              {blogg.map((b) => (
                <Link key={b.meta.slug} href={`/blogg/${b.meta.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {b.meta.category && (
                          <span className="text-xs font-medium bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full">{b.meta.category}</span>
                        )}
                        <span className="text-xs text-gray-400">{new Date(b.meta.publishedAt).toLocaleDateString("sv-SE")}</span>
                      </div>
                      <h2 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{b.meta.title}</h2>
                      {b.meta.metaDescription && (
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{b.meta.metaDescription}</p>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-brand-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Inga bloggartiklar än. Kom tillbaka snart!</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
