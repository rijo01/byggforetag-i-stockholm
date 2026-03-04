import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Byggföretag i Stockholm – Hitta rätt byggfirma",
    template: "%s | Byggföretag i Stockholm",
  },
  description:
    "Hitta pålitliga byggföretag i Stockholm. Jämför byggfirmor, läs omdömen och få offerter. Renovering, nybyggnation, badrum, kök och mer.",
  keywords: [
    "byggföretag stockholm",
    "byggfirma stockholm",
    "byggföretag i stockholm",
    "renovering stockholm",
    "byggare stockholm",
    "hantverkare stockholm",
    "badrumsrenovering stockholm",
    "köksrenovering stockholm",
    "totalentreprenad stockholm",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Byggföretag i Stockholm – Hitta rätt byggfirma",
    description: "Hitta pålitliga byggföretag i Stockholm. Jämför, läs omdömen och få offerter gratis.",
    url: "https://byggforetag-i-stockholm.se",
    siteName: "Byggföretag i Stockholm",
    locale: "sv_SE",
    type: "website",
    images: [{ url: "https://byggforetag-i-stockholm.se/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://byggforetag-i-stockholm.se" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
