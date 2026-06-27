'use client';
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

interface Props {
  isFree: boolean;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ isFree, highlight }) => {
  const { language } = useLanguage();
  const t = translations[language].pricing;
  const plan = isFree ? t.free : t.pro;

  return (
    <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border lg:max-w-full", { "border-primary shadow-lg shadow-primary/10": highlight, "border-gray-200": !highlight })}>
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{plan.name}</h3>
          {highlight && (
            <span className="text-xs font-semibold uppercase tracking-wide bg-accent-green text-foreground px-3 py-1 rounded-full">
              {t.pro.bestValue}
            </span>
          )}
        </div>
        <p className="text-3xl md:text-5xl font-bold mb-2">
          <span className={clsx({ "text-primary": highlight })}>{plan.price}</span>
        </p>
        <p className="text-sm text-foreground-accent mb-6">
          {isFree ? t.free.noCard : t.pro.oneTime}
        </p>
        <button className={clsx("w-full py-3 px-4 rounded-full transition-colors font-medium", { "bg-primary hover:bg-primary-accent text-white": highlight, "bg-hero-background hover:bg-pink-100 text-foreground": !highlight })}>
          {plan.button}
        </button>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-0">{t.featuresHeader}</p>
        <p className="text-foreground-accent mb-5">{plan.featuresLabel}</p>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-primary mr-2 shrink-0" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumn;
