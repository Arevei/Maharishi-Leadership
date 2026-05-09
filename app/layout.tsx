import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { ConsultationDrawerProvider } from "@/app/components/consultation/ConsultationDrawerProvider";
import { SmoothScrollProvider } from "@/app/components/providers/SmoothScrollProvider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maharishi-leadership.vercel.app";
const siteTitle =
  "Maharishi Center for Leadership | Transcendental Meditation for Executive Performance";
const siteDescription =
  "A four-month executive development programme that uses Transcendental Meditation to strengthen clarity, creativity, resilience, health, and sustained leadership performance.";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maharishi Center for Leadership",
    template: "%s | Maharishi Center for Leadership",
  },
  description: siteDescription,
  applicationName: "Maharishi Center for Leadership",
  keywords: [
    "Maharishi Center for Leadership",
    "Transcendental Meditation",
    "executive leadership programme",
    "stress reduction",
    "resilience training",
    "brain coherence",
    "leadership performance",
  ],
  authors: [{ name: "Maharishi Center for Leadership" }],
  creator: "Maharishi Center for Leadership",
  publisher: "Maharishi Center for Leadership",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Maharishi Center for Leadership",
    images: [
      {
        url: "/images/hero-meditation-tree.png",
        width: 1200,
        height: 630,
        alt: "Maharishi Center for Leadership",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero-meditation-tree.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} h-full bg-background`}
    >
      <body className="min-h-full flex flex-col text-foreground antialiased">
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        {/* <Script id="calendly-badge-init" strategy="afterInteractive">
          {`
            window.onload = function () {
              if (window.Calendly && window.Calendly.initBadgeWidget) {
                window.Calendly.initBadgeWidget({
                  url: 'https://calendly.com/maharishileadership/30min',
                  text: 'Schedule time with me',
                  color: '#0069ff',
                  textColor: '#ffffff',
                  branding: true
                });
              }
            };
          `}
        </Script> */}
        <SmoothScrollProvider>
          <ConsultationDrawerProvider>{children}</ConsultationDrawerProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
