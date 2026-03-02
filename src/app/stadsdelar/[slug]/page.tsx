import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { getAllStadsdelar, getStadsdelBySlug, getAllTjanster } from "@/lib/content";
import { renderContent } from "@/lib/mdx-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStadsdelar().map((s) => ({ slug: s.meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stadsdel = getStadsdelBySlug(slug);
  if (!stadsdel) return {};

  return {
    title: stadsdel.meta.metaTitle,
    description: stadsdel.meta.metaDescription,
    alternates: { canonical: `https://byggforetag-i-stockholm.se/stadsdelar/${slug}` },
    openGraph: {
      title: stadsdel.meta.metaTitle,
      description: stadsdel.meta.metaDescription,
      url: `https://byggforetag-i-stockholm.se/stadsdelar/${slug}`,
      locale: "sv_SE",
      type: "article",
    },
  };
}

export default async function StadsdelPage({ params }: Props) {
  const { slug } = await params;
  const stadsdel = getStadsdelBySlug(slug);
  if (!stadsdel) notFound();

  const { meta, content } = stadsdel;
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
              <Link href="/stadsdelar" className="hover:text-brand-600">Stadsdelar</Link>
              <span className="mx-2">›</span>
              <span className="text-brand-700">{meta.name}</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16">
          <div className="container-site">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">{meta.h1}</h1>
            {meta.buildingTypes && (
              <p className="text-brand-200 text-lg max-w-2xl">{meta.buildingTypes}</p>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">{renderContent(content)}</article>
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-display font-bold text-brand-900 mb-4">Hitta byggföretag i {meta.name}</h3>
                    <QuoteForm compact district={meta.name} />
                  </div>
                  {allTjanster.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="font-display font-bold text-brand-900 mb-4">Tjänster i {meta.name}</h3>
                      <ul className="space-y-3">
                        {allTjanster.slice(0, 8).map((t) => (
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
                <h2 className="text-2xl font-display font-bold text-brand-900 mb-6">Vanliga frågor om renovering i {meta.name}</h2>
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
