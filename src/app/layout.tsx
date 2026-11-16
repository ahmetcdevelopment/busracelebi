import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Samsun Avukat`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0a1422",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+903622337020",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: "TR",
  },
  sameAs: [site.social.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#icerik"
          className="sr-only z-[60] bg-brass-500 px-4 py-2 text-navy-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
