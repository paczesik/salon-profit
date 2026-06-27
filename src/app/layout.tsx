import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import { LanguageProvider } from '@/i18n/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 675, alt: siteDetails.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} bg-background`}>
      <body className={`${beVietnamPro.className} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <LanguageProvider>
          <LanguageToggle />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
