import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { getAllTjanster, getTjanstBySlug } from "@/lib/content";
import { renderContent } from "@/lib/mdx-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tjanster = getAllTjanster();
  return tjanster.map((t) => ({ slug: t.meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tjanst = getTjanstBySlug(slug);
  if (!tjanst) return {};

  return {
    title: tjanst.meta.metaTitle,
    description: tjanst.meta.metaDescription,
    alternates: { canonical: `https://byggforetag-i-stockholm.se/tjanster/${slug}` },
    openGraph: {
      title: tjanst.meta.metaTitle,
      description: tjanst.meta.metaDescription,
      url: `https://byggforetag-i-stockholm.se/tjanster/${slug}`,
      locale: "sv_SE",
      type: "article",
    },
  };
}

export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const tjanst = getTjanstBySlug(slug);
  if (!tjanst) notFound();

  const { meta, content } = tjanst;
  const allTjanster = getAllTjanster().filter((t) => t.meta.slug !== slug);
  const relatedTjanster = allTjanster.filter((t) =>
    meta.relatedServices?.includes(t.meta.slug)
  );

  const faqSchema = meta.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: meta.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <Header />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <main className="flex-1">
        <div className="bg-gray-100 border-b">
          <div className="container-site py-3">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-brand-600">Hem</Link>
              <span className="mx-2">›</span>
              <Link href="/tjanster" className="hover:text-brand-600">Tjänster</Link>
              <span className="mx-2">›</span>
              <span className="text-brand-700">{meta.title}</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16">
          <div className="container-site">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">{meta.h1}</h1>
            <div className="flex flex-wrap gap-6 text-brand-200">
              {meta.priceRange && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{meta.priceRange}</span>
                </div>
              )}
              {meta.timeline && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{meta.timeline}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">{renderContent(content)}</article>
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-display font-bold text-brand-900 mb-4">Få offerter för {meta.title?.toLowerCase()}</h3>
                    <QuoteForm compact serviceType={meta.title} />
                  </div>
                  {meta.priceRange && (
                    <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
                      <h3 className="font-display font-bold text-brand-900 mb-3">Prisindikation</h3>
                      <p className="text-2xl font-bold text-brand-700 mb-2">{meta.priceRange}</p>
                      {meta.timeline && <p className="text-sm text-gray-600">Tidsåtgång: {meta.timeline}</p>}
                      <p className="text-xs text-gray-500 mt-3">Priserna är ungefärliga. ROT-avdrag på 30% av arbetskostnaden tillkommer.</p>
                    </div>
                  )}
                  {relatedTjanster.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="font-display font-bold text-brand-900 mb-4">Relaterade tjänster</h3>
                      <ul className="space-y-3">
                        {relatedTjanster.map((t) => (
                          <li key={t.meta.slug}>
                            <Link href={`/tjanster/${t.meta.slug}`} className="text-brand-600 hover:text-brand-800 flex items-center gap-2">
                              <span>→</span><span>{t.meta.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </aside>
            </div>

            {meta.faq && meta.faq.length > 0 && (
              <div className="mt-12 max-w-3xl">
                <h2 className="text-2xl font-display font-bold text-brand-900 mb-6">Vanliga frågor om {meta.title?.toLowerCase()}</h2>
                <div className="space-y-4">
                  {meta.faq.map((faq, idx) => (
                    <details key={idx} className="group bg-white border border-gray-200 rounded-lg">
                      <summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50">
                        <span className="font-semibold text-brand-800 pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
