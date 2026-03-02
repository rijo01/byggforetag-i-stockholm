import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllGuider, getGuideBySlug, getAllTjanster } from "@/lib/content";
import { renderContent } from "@/lib/mdx-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuider().map((g) => ({ slug: g.meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.meta.metaTitle,
    description: guide.meta.metaDescription,
    alternates: { canonical: `https://byggforetag-i-stockholm.se/guider/${slug}` },
    openGraph: {
      title: guide.meta.metaTitle,
      description: guide.meta.metaDescription,
      url: `https://byggforetag-i-stockholm.se/guider/${slug}`,
      locale: "sv_SE",
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const { meta, content } = guide;
  const allGuider = getAllGuider().filter((g) => g.meta.slug !== slug);
  const relatedGuider = allGuider.filter((g) =>
    meta.relatedGuides?.includes(g.meta.slug)
  );
  const allTjanster = getAllTjanster();
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
              <Link href="/guider" className="hover:text-brand-600">Guider</Link>
              <span className="mx-2">›</span>
              <span className="text-brand-700">{meta.title}</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16">
          <div className="container-site">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">{meta.h1}</h1>
            {meta.publishedAt && (
              <p className="mt-4 text-brand-300 text-sm">Uppdaterad: {meta.updatedAt || meta.publishedAt}</p>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">{renderContent(content)}</article>
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {relatedGuider.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="font-display font-bold text-brand-900 mb-4">Relaterade guider</h3>
                      <ul className="space-y-3">
                        {relatedGuider.map((g) => (
                          <li key={g.meta.slug}>
                            <Link href={`/guider/${g.meta.slug}`} className="text-brand-600 hover:text-brand-800 flex items-center gap-2">
                              <span>→</span><span>{g.meta.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
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
                  <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                    <h3 className="font-display font-bold text-brand-900 mb-3">Behöver du hjälp?</h3>
                    <p className="text-gray-600 text-sm mb-4">Få offerter från verifierade byggföretag i Stockholm – gratis och utan förbindelser.</p>
                    <Link href="/hitta-expert" className="inline-block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Jämför offerter →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {meta.faq && meta.faq.length > 0 && (
              <div className="mt-12 max-w-3xl">
                <h2 className="text-2xl font-display font-bold text-brand-900 mb-6">Vanliga frågor</h2>
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
