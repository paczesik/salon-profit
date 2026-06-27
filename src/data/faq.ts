import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} really free?`,
        answer: `Yes. The service cost calculator is completely free to use, forever. If you want to manage your full salon, set overheads, and save your cosmetics catalog, you can unlock Pro with a single one-time payment.`,
    },
    {
        question: 'What is the difference between Free and Pro?',
        answer: 'The free version gives you the calculator so you can quickly add products and see what a service costs. Pro adds everything else: salon-wide costs like rent and energy, a saved cosmetics price list, service templates, and tools to manage your business profitably.',
    },
    {
        question: 'Is Pro a subscription?',
        answer: `No. ${siteDetails.siteName} Pro is a one-time payment that unlocks the full experience for good. There are no monthly fees and no recurring charges.`
    },
    {
        question: 'What kind of salons is it for?',
        answer: 'Salon Profit works for hair salons, nail studios, barbershops, beauty and aesthetics clinics, and any business that provides treatments using cosmetics and consumable products.',
    },
    {
        question: 'How does the calculator work?',
        answer: 'You add the cosmetics and products used for a treatment, enter how much of each is used, and Salon Profit instantly totals the product cost. With Pro, your overheads and labor are factored in too, so you can confidently set a price that stays profitable.'
    }
];
