import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    const isFree = price === 0;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border lg:max-w-full", { "border-primary shadow-lg shadow-primary/10": highlight, "border-gray-200": !highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    {highlight && (
                        <span className="text-xs font-semibold uppercase tracking-wide bg-accent-green text-foreground px-3 py-1 rounded-full">
                            Best value
                        </span>
                    )}
                </div>
                <p className="text-3xl md:text-5xl font-bold mb-2">
                    <span className={clsx({ "text-primary": highlight })}>
                        {isFree ? 'Free' : `$${price}`}
                    </span>
                </p>
                <p className="text-sm text-foreground-accent mb-6">
                    {isFree ? 'No credit card required' : 'One-time payment, no subscription'}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors font-medium", { "bg-primary hover:bg-primary-accent text-white": highlight, "bg-hero-background hover:bg-pink-100 text-foreground": !highlight })}>
                    {isFree ? 'Use the calculator' : 'Get Pro'}
                </button>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">FEATURES</p>
                <p className="text-foreground-accent mb-5">{isFree ? "What you get for free:" : "Everything in Free, plus:"}</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-primary mr-2 shrink-0" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
