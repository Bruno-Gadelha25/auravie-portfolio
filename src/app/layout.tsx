import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    "Auravie Portfolio",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web design",
    "IA",
    "Infraestrutura",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: site.name,
    description: site.description,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#02040d] text-slate-100">
        <div id="top" className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-12%] top-[-8%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-[-10%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute bottom-[-12%] left-[18%] h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl" />
          </div>
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
