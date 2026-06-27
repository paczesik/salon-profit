import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Maria Kowalski',
        role: 'Owner, Luxe Hair Studio',
        message: `${siteDetails.siteName} showed me that my most popular color service was barely breaking even. I adjusted my prices in minutes and my margins have never been healthier.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sophie Bennett',
        role: 'Founder, Glow Beauty Bar',
        message: `I used to guess my prices. Now I add the products into the calculator and know exactly what every treatment costs me. It completely changed how I run my salon.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Daniel Reyes',
        role: 'Master Barber, The Cut Co.',
        message: `The free calculator alone is brilliant, but Pro is what made the difference. Tracking rent, energy and cosmetics in one place finally gave me a clear picture of my profit.`,
        avatar: '/images/testimonial-3.webp',
    },
];
