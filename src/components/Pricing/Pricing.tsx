'use client';
import PricingColumn from "./PricingColumn";

const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <PricingColumn isFree={true} highlight={false} />
      <PricingColumn isFree={false} highlight={true} />
    </div>
  );
};

export default Pricing;
