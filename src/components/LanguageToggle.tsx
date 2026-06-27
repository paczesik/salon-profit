'use client';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-1 text-sm font-semibold bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-md">
      <button
        onClick={() => setLanguage('pl')}
        className={`px-1 py-0.5 transition-colors ${language === 'pl' ? 'text-primary' : 'text-foreground-accent hover:text-foreground'}`}
      >
        PL
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-1 py-0.5 transition-colors ${language === 'en' ? 'text-primary' : 'text-foreground-accent hover:text-foreground'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
