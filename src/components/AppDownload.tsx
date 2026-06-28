'use client';
import { useLanguage } from '@/i18n/LanguageContext';
import { ctaDetails } from '@/data/cta';

const AppDownload: React.FC = () => {
    const { t } = useLanguage();
    const isPolish = t.storeButtons.downloadOn === 'Pobierz w';

    return (
        <section className="py-12 flex flex-col items-center text-center px-5">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                {isPolish ? 'Aplikacja mobilna' : 'Mobile App'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground max-w-md">
                {isPolish
                    ? 'Wyceniaj usługi gdziekolwiek jesteś'
                    : 'Price Your Services Wherever You Are'}
            </h2>
            <p className="mt-3 text-foreground-accent max-w-sm">
                {isPolish
                    ? 'Pobierz aplikację Salon Profit na swój telefon i zarządzaj kosztami usług w dowolnym miejscu.'
                    : 'Download the Salon Profit app and calculate your service costs on the go, right from your phone.'}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                
                   <a href={ctaDetails.appStoreUrl}
                    className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span>
                        <span className="block text-xs opacity-75">{t.storeButtons.downloadOn}</span>
                        <span className="block font-semibold leading-tight">{t.storeButtons.appStore}</span>
                    </span>
                </a>
                
                    <a href={ctaDetails.googlePlayUrl}
                    className="flex items-center justify-center gap-2 min-w-[180px] px-6 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.75-2.75-10.84 9.82zM.22 1.7C.08 2.01 0 2.37 0 2.78v18.44c0 .41.08.77.22 1.08l.06.06 10.33-10.33v-.24L.28 1.64l-.06.06zM20.49 10.65l-2.89-1.67-3.07 3.07 3.07 3.07 2.91-1.68c.83-.48.83-1.26-.02-1.79zM3.18.24l12.6 7.27-2.75 2.75L2.19.44A1.13 1.13 0 013.18.24z" />
                    </svg>
                    <span>
                        <span className="block text-xs opacity-75">{t.storeButtons.getItOn}</span>
                        <span className="block font-semibold leading-tight">{t.storeButtons.googlePlay}</span>
                    </span>
                </a>
            </div>
        </section>
    );
};

export default AppDownload;
