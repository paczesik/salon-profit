import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Free',
        price: 0,
        features: [
            'The full service cost calculator',
            'Add unlimited products to a treatment',
            'Instant product cost breakdown',
            'Compare cost against your price',
        ],
    },
    {
        name: 'Pro',
        price: 49,
        features: [
            'Everything in Free',
            'Salon-wide costs: rent, energy & overheads',
            'Saved cosmetics price list with cost-per-use',
            'Reusable service library',
            'Full business management tools',
            'One-time payment, no subscription',
        ],
    },
]
