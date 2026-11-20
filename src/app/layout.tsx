import type { Metadata } from "next";
import { Anton, Barlow, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Barlow({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.vercelProjectUrl),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Bruno Gadelha",
    "DBA em formação",
    "banco de dados",
    "PostgreSQL",
    "MySQL",
    "IA local",
    "portfólio profissional",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "web design",
    "landing pages",
    "automações",
    "IA",
    "infraestrutura local",
    "homelab",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: site.name,
    description: site.description,
    locale: "pt_BR",
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
  <body className="min-h-screen bg-ink text-bone">
        <div id="top" className="relative z-10 flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
