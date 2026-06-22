import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: {
    default: "ToolsAtZero | 100+ Free Developer & Office Tools | 100% Client-Side",
    template: "%s | ToolsAtZero",
  },
  description:
    "100% free, client-side web tools for developers and professionals. JSON formatter, Base64 encoder, case converter, and more. Your data never leaves your browser.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "free online tools",
    "developer tools",
    "free pdf tools",
    "free image tools",
    "free text tools",
    "client-side tools",
    "privacy first tools",
    "browser based tools",
    "no upload tools",
    "offline tools",
    "JSON formatter",
    "Base64 encoder",
    "PDF compressor",
    "PDF merger",
    "case converter",
    "hash generator",
    "JWT decoder",
    "image compressor",
    "image resizer",
    "word counter",
    "CSV to JSON",
    "free AI tools",
    "local AI processing",
    "100% client side",
    "zero server upload",
    "ToolsAtZero",
  ],
  metadataBase: new URL("https://toolsatzero.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ToolsAtZero",
    title: "ToolsAtZero | 100+ Free Developer & Office Tools",
    description:
      "100% free, client-side web tools. Zero cost, zero server uploads, zero friction.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolsAtZero | 100+ Free Developer & Office Tools",
    description:
      "100% free, client-side web tools. Zero cost, zero server uploads, zero friction.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ToolsAtZero",
              url: "https://toolsatzero.com",
              description:
                "Free, privacy-first online tools for developers and professionals. 100% client-side processing.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased" suppressHydrationWarning>
        <Header />
        <div className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
