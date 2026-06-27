'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroDetails } from '@/data/hero';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  return (
    <section id="hero" className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5">
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>
      <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" />
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{t.heading}</h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">{t.subheading}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-fit mx-auto">
          <Link href="#pricing" className="flex items-center justify-center min-w-[205px] px-8 h-14 rounded-full text-white bg-primary hover:bg-primary-accent transition-colors font-medium">
            {t.primaryButton}
          </Link>
          <Link href="#features" className="flex items-center justify-center min-w-[205px] px-8 h-14 rounded-full text-foreground bg-white border border-gray-200 hover:border-primary transition-colors font-medium">
            {t.secondaryButton}
          </Link>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={heroDetails.appStoreUrl} className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t.appStore}
          </a>
          <a href={heroDetails.googlePlayUrl} className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.75-2.75-10.84 9.82zM.22 1.7C.08 2.01 0 2.37 0 2.78v18.44c0 .41.08.77.22 1.08l.06.06 10.33-10.33v-.24L.28 1.64l-.06.06zM20.49 10.65l-2.89-1.67-3.07 3.07 3.07 3.07 2.91-1.68c.83-.48.83-1.26-.02-1.79zM3.18.24l12.6 7.27-2.75 2.75L2.19.44A1.13 1.13 0 013.18.24z"/></svg>
            {t.googlePlay}
          </a>
        </div>
        <Image src={heroDetails.centerImageSrc} width={384} height={340} quality={100} sizes="(max-width: 768px) 100vw, 384px" priority={true} unoptimized={true} alt="app mockup" className='relative mt-12 md:mt-16 mx-auto z-10' />
      </div>
    </section>
  );
};

export default Hero;
