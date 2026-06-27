'use client';
import Link from "next/link";
import { ctaDetails } from "@/data/cta";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const CTA: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].cta;
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="rounded-3xl absolute inset-0 -z-10 h-full w-full bg-pink-50 border border-pink-200" />
        <div className="h-full flex flex-col items-center justify-center text-center px-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl text-foreground">{t.heading}</h2>
          <p className="mx-auto max-w-xl md:px-5 text-foreground-accent">{t.subheading}</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link href="#pricing" className="flex items-center justify-center min-w-[205px] px-8 h-14 rounded-full text-white bg-primary hover:bg-primary-accent transition-colors font-medium">
              {t.primaryButton}
            </Link>
            <Link href="#pricing" className="flex items-center justify-center min-w-[205px] px-8 h-14 rounded-full text-foreground bg-white hover:bg-pink-100 transition-colors font-medium border border-gray-200">
              {t.secondaryButton}
            </Link>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={ctaDetails.appStoreUrl} className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {t.appStore}
            </a>
            <a href={ctaDetails.googlePlayUrl} className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.75-2.75-10.84 9.82zM.22 1.7C.08 2.01 0 2.37 0 2.78v18.44c0 .41.08.77.22 1.08l.06.06 10.33-10.33v-.24L.28 1.64l-.06.06zM20.49 10.65l-2.89-1.67-3.07 3.07 3.07 3.07 2.91-1.68c.83-.48.83-1.26-.02-1.79zM3.18.24l12.6 7.27-2.75 2.75L2.19.44A1.13 1.13 0 013.18.24z"/></svg>
              {t.googlePlay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
