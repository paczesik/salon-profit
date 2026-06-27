import { FiClock, FiDroplet, FiHome, FiLayers, FiTag, FiTrendingUp, FiZap } from "react-icons/fi";
import { LuCalculator } from "react-icons/lu";
import { TbReceipt2, TbPigMoney } from "react-icons/tb";
import { BsFillStarFill } from "react-icons/bs";
import { PiScissorsFill } from "react-icons/pi";

import { IBenefit, IPricing, IStats, ITestimonial, IFAQ } from "@/types";

export type Language = "pl" | "en";

// Shared, non-translatable assets
const benefitIcons = [
    [<LuCalculator size={26} key="i0" />, <TbReceipt2 size={26} key="i1" />, <FiTrendingUp size={26} key="i2" />],
    [<FiHome size={26} key="i3" />, <FiZap size={26} key="i4" />, <FiLayers size={26} key="i5" />],
    [<FiTag size={26} key="i6" />, <FiDroplet size={26} key="i7" />, <FiClock size={26} key="i8" />],
];
const benefitImages = ["/images/mockup-1.webp", "/images/mockup-2.webp", "/images/mockup-1.webp"];

const statIcons = [
    <TbPigMoney size={34} className="text-primary" key="s0" />,
    <BsFillStarFill size={34} className="text-primary" key="s1" />,
    <PiScissorsFill size={34} className="text-primary" key="s2" />,
];

const testimonialAvatars = ["/images/testimonial-1.webp", "/images/testimonial-2.webp", "/images/testimonial-3.webp"];
const testimonialNames = ["Maria Kowalski", "Sophie Bennett", "Daniel Reyes"];

type BenefitText = {
    title: string;
    description: string;
    bullets: { title: string; description: string }[];
};

type TranslationShape = {
    nav: { features: string; pricing: string; testimonials: string; tryFree: string };
    hero: { heading: string; subheading: string };
    sections: {
        pricingTitle: string;
        pricingDescription: string;
        testimonialsTitle: string;
        testimonialsDescription: string;
    };
    benefitsText: BenefitText[];
    pricing: {
        freeLabel: string;
        bestValue: string;
        freeNote: string;
        proNote: string;
        freeCta: string;
        proCta: string;
        featuresLabel: string;
        freeFeaturesSub: string;
        proFeaturesSub: string;
        proPrice: string;
    };
    tiersText: { name: string; price: number | string; features: string[] }[];
    testimonialsText: { role: string; message: string }[];
    statsText: { title: string; description: string }[];
    faq: { tag: string; title: string; askAnything: string; email: string };
    faqItems: IFAQ[];
    cta: { heading: string; subheading: string };
    footer: { contactTitle: string; emailLabel: string; phoneLabel: string; rights: string };
    storeButtons: { downloadOn: string; appStore: string; getItOn: string; googlePlay: string };
};

export const translations: Record<Language, TranslationShape> = {
    pl: {
        nav: { features: "Funkcje", pricing: "Cennik", testimonials: "Opinie", tryFree: "Wypróbuj za darmo" },
        hero: {
            heading: "Poznaj rzeczywisty koszt każdej usługi",
            subheading:
                "Salon Profit pozwala salonom fryzjerskim i kosmetycznym dokładnie obliczyć, ile kosztuje każdy zabieg. Dodaj swoje produkty, uwzględnij koszty stałe i ustal ceny, które zapewnią Ci zysk.",
        },
        sections: {
            pricingTitle: "Cennik",
            pricingDescription: "Zacznij za darmo. Jedna prosta, jednorazowa płatność, aby przejść na Pro.",
            testimonialsTitle: "Uwielbiane przez właścicieli salonów",
            testimonialsDescription: "Posłuchaj salonów, które wyceniają każdą usługę z myślą o zysku.",
        },
        benefitsText: [
            {
                title: "Kalkulator kosztów usługi",
                description:
                    "Serce Salon Profit. Dodaj produkty używane przy dowolnym zabiegu i od razu zobacz, ile Cię kosztuje, aby z pewnością wycenić każdą usługę. Darmowy dla wszystkich.",
                bullets: [
                    { title: "Dodawaj produkty w kilka sekund", description: "Zbuduj zabieg, dodając kosmetyki i materiały oraz zużytą ilość." },
                    { title: "Natychmiastowy rozkład kosztów", description: "Zobacz dokładny koszt produktów każdej usługi w chwili dodania pozycji." },
                    { title: "Wyceniaj z zyskiem", description: "Porównaj koszt z ceną, aby żaden zabieg nie był sprzedawany ze stratą." },
                ],
            },
            {
                title: "Skonfiguruj koszty salonu",
                description:
                    "Wyjdź poza produkty. Dzięki Pro uwzględnisz rzeczywiste koszty prowadzenia salonu, aby każde obliczenie odzwierciedlało faktyczne wydatki.",
                bullets: [
                    { title: "Czynsz i koszty stałe", description: "Dodaj czynsz, energię i koszty stałe, aby wliczały się w każdą usługę." },
                    { title: "Energia i media", description: "Uwzględnij wodę, prąd i koszt eksploatacji sprzętu." },
                    { title: "Biblioteka usług", description: "Zapisz oferowane usługi i używaj ich w całym zespole." },
                ],
            },
            {
                title: "Zarządzaj katalogiem kosmetyków",
                description:
                    "Skonfiguruj ceny każdego kosmetyku i produktu raz, a Salon Profit zadba o dokładność kosztów wszędzie. Funkcja Pro stworzona dla zapracowanych salonów.",
                bullets: [
                    { title: "Cennik produktów", description: "Przechowuj cenę i wielkość opakowania każdego kosmetyku w jednym miejscu." },
                    { title: "Koszt jednego użycia", description: "Salon Profit wyliczy dokładny koszt za ml, gram lub aplikację." },
                    { title: "Zawsze aktualne", description: "Zaktualizuj cenę raz, a każda usługa z tym produktem przeliczy się ponownie." },
                ],
            },
        ],
        pricing: {
            freeLabel: "Za darmo",
            bestValue: "Najlepszy wybór",
            freeNote: "Bez karty kredytowej",
            proNote: "Płatność jednorazowa, bez abonamentu",
            freeCta: "Użyj kalkulatora",
            proCta: "Kup Pro",
            featuresLabel: "FUNKCJE",
            freeFeaturesSub: "Co dostajesz za darmo:",
            proFeaturesSub: "Wszystko z wersji darmowej oraz:",
            proPrice: "29 zł",
        },
        tiersText: [
            {
                name: "Darmowy",
                price: 0,
                features: [
                    "Pełny kalkulator kosztów usług",
                    "Dodawaj nieograniczoną liczbę produktów do zabiegu",
                    "Natychmiastowy rozkład kosztów produktów",
                    "Porównaj koszt z Twoją ceną",
                ],
            },
            {
                name: "Pro",
                price: "29 zł",
                features: [
                    "Wszystko z wersji darmowej",
                    "Koszty całego salonu: czynsz, energia i koszty stałe",
                    "Zapisany cennik kosmetyków z kosztem użycia",
                    "Biblioteka usług do wielokrotnego użytku",
                    "Pełne narzędzia do zarządzania biznesem",
                    "Płatność jednorazowa, bez abonamentu",
                ],
            },
        ],
        testimonialsText: [
            {
                role: "Właścicielka, Luxe Hair Studio",
                message:
                    "Salon Profit pokazał mi, że moja najpopularniejsza usługa koloryzacji ledwo wychodziła na zero. Skorygowałam ceny w kilka minut, a moje marże nigdy nie były lepsze.",
            },
            {
                role: "Założycielka, Glow Beauty Bar",
                message:
                    "Kiedyś zgadywałam ceny. Teraz dodaję produkty do kalkulatora i dokładnie wiem, ile kosztuje mnie każdy zabieg. To całkowicie zmieniło sposób prowadzenia salonu.",
            },
            {
                role: "Mistrz barberingu, The Cut Co.",
                message:
                    "Sam darmowy kalkulator jest świetny, ale to Pro zrobiło różnicę. Śledzenie czynszu, energii i kosmetyków w jednym miejscu w końcu dało mi jasny obraz zysku.",
            },
        ],
        statsText: [
            { title: "30%", description: "Średni wzrost marży, jaki salony odkrywają po wycenie usług z uwzględnieniem rzeczywistych kosztów." },
            { title: "5.0", description: "Ocena w gwiazdkach od właścicieli salonów, którzy przeszli od zgadywania do Salon Profit." },
            { title: "60s", description: "Tyle wystarczy, aby dodać produkty i obliczyć rzeczywisty koszt zabiegu." },
        ],
        faq: {
            tag: "FAQ",
            title: "Najczęściej zadawane pytania",
            askAnything: "Zapytaj nas o cokolwiek!",
            email: "pomoc@salonprofit.app",
        },
        faqItems: [
            {
                question: "Czy Salon Profit jest naprawdę darmowy?",
                answer:
                    "Tak. Kalkulator kosztów usług jest całkowicie darmowy, na zawsze. Jeśli chcesz zarządzać całym salonem, ustawić koszty stałe i zapisać katalog kosmetyków, możesz odblokować Pro jedną jednorazową płatnością.",
            },
            {
                question: "Jaka jest różnica między wersją darmową a Pro?",
                answer:
                    "Wersja darmowa daje Ci kalkulator, dzięki któremu szybko dodasz produkty i zobaczysz, ile kosztuje usługa. Pro dodaje całą resztę: koszty całego salonu jak czynsz i energia, zapisany cennik kosmetyków, szablony usług oraz narzędzia do rentownego zarządzania biznesem.",
            },
            {
                question: "Czy Pro to abonament?",
                answer:
                    "Nie. Salon Profit Pro to jednorazowa płatność, która na stałe odblokowuje pełne możliwości. Brak opłat miesięcznych i cyklicznych.",
            },
            {
                question: "Dla jakich salonów jest ta aplikacja?",
                answer:
                    "Salon Profit sprawdza się w salonach fryzjerskich, studiach paznokci, barbershopach, gabinetach kosmetycznych i estetycznych oraz w każdej firmie świadczącej zabiegi z użyciem kosmetyków i materiałów eksploatacyjnych.",
            },
            {
                question: "Jak działa kalkulator?",
                answer:
                    "Dodajesz kosmetyki i produkty użyte do zabiegu, wpisujesz, ile każdego zużyto, a Salon Profit natychmiast sumuje koszt produktów. W wersji Pro uwzględniane są też koszty stałe i robocizna, dzięki czemu pewnie ustalisz cenę, która pozostaje rentowna.",
            },
        ],
        cta: {
            heading: "Zacznij wyceniać swoje usługi z pewnością",
            subheading:
                "Skorzystaj z darmowego kalkulatora już dziś lub odblokuj pełne Pro jedną jednorazową płatnością. Bez abonamentów, bez niespodzianek.",
        },
        footer: { contactTitle: "Kontakt", emailLabel: "E-mail", phoneLabel: "Telefon", rights: "Wszelkie prawa zastrzeżone." },
        storeButtons: { downloadOn: "Pobierz w", appStore: "App Store", getItOn: "Pobierz z", googlePlay: "Google Play" },
    },
    en: {
        nav: { features: "Features", pricing: "Pricing", testimonials: "Testimonials", tryFree: "Try it free" },
        hero: {
            heading: "Know the True Cost of Every Service You Offer",
            subheading:
                "Salon Profit lets hair and beauty salons calculate exactly what each treatment costs. Add your products, factor in overheads, and set prices that keep you profitable.",
        },
        sections: {
            pricingTitle: "Pricing",
            pricingDescription: "Free to start. One simple one-time payment to go Pro.",
            testimonialsTitle: "Loved by Salon Owners",
            testimonialsDescription: "Hear from the salons pricing every service for profit.",
        },
        benefitsText: [
            {
                title: "The Service Cost Calculator",
                description:
                    "The heart of Salon Profit. Add the products you use for any treatment and instantly see what it costs you, so you can price every service with confidence. Free for everyone.",
                bullets: [
                    { title: "Add Products in Seconds", description: "Build a treatment by adding cosmetics and consumables and the amount used." },
                    { title: "Instant Cost Breakdown", description: "See the exact product cost of every service the moment you add an item." },
                    { title: "Price for Profit", description: "Compare your cost against your price so no treatment is ever sold at a loss." },
                ],
            },
            {
                title: "Set Up Your Salon Costs",
                description:
                    "Go beyond products. With Pro, capture the real overheads of running your salon so every calculation reflects what it actually costs to keep the lights on.",
                bullets: [
                    { title: "Rent & Overheads", description: "Add your rent, energy and fixed costs so they factor into every service." },
                    { title: "Energy & Utilities", description: "Account for water, electricity and the running cost of your equipment." },
                    { title: "Service Library", description: "Save the services you offer and reuse them across your whole team." },
                ],
            },
            {
                title: "Manage Your Cosmetics Catalog",
                description:
                    "Configure prices for every cosmetic and product you use once, and Salon Profit keeps your costs accurate everywhere. A Pro feature built for busy salons.",
                bullets: [
                    { title: "Product Price List", description: "Store the price and pack size of every cosmetic you buy in one place." },
                    { title: "Cost Per Use", description: "Salon Profit works out the exact cost per ml, gram or application for you." },
                    { title: "Always Up to Date", description: "Update a price once and every service using that product recalculates." },
                ],
            },
        ],
        pricing: {
            freeLabel: "Free",
            bestValue: "Best value",
            freeNote: "No credit card required",
            proNote: "One-time payment, no subscription",
            freeCta: "Use the calculator",
            proCta: "Get Pro",
            featuresLabel: "FEATURES",
            freeFeaturesSub: "What you get for free:",
            proFeaturesSub: "Everything in Free, plus:",
            proPrice: "$8",
        },
        tiersText: [
            {
                name: "Free",
                price: 0,
                features: [
                    "The full service cost calculator",
                    "Add unlimited products to a treatment",
                    "Instant product cost breakdown",
                    "Compare cost against your price",
                ],
            },
            {
                name: "Pro",
                price: "$8",
                features: [
                    "Everything in Free",
                    "Salon-wide costs: rent, energy & overheads",
                    "Saved cosmetics price list with cost-per-use",
                    "Reusable service library",
                    "Full business management tools",
                    "One-time payment, no subscription",
                ],
            },
        ],
        testimonialsText: [
            {
                role: "Owner, Luxe Hair Studio",
                message:
                    "Salon Profit showed me that my most popular color service was barely breaking even. I adjusted my prices in minutes and my margins have never been healthier.",
            },
            {
                role: "Founder, Glow Beauty Bar",
                message:
                    "I used to guess my prices. Now I add the products into the calculator and know exactly what every treatment costs me. It completely changed how I run my salon.",
            },
            {
                role: "Master Barber, The Cut Co.",
                message:
                    "The free calculator alone is brilliant, but Pro is what made the difference. Tracking rent, energy and cosmetics in one place finally gave me a clear picture of my profit.",
            },
        ],
        statsText: [
            { title: "30%", description: "Average margin uplift salons find after pricing services with their real costs." },
            { title: "5.0", description: "Star rating from salon owners who switched from guesswork to Salon Profit." },
            { title: "60s", description: "All it takes to add your products and calculate the true cost of a treatment." },
        ],
        faq: {
            tag: "FAQ'S",
            title: "Frequently Asked Questions",
            askAnything: "Ask us anything!",
            email: "help@salonprofit.app",
        },
        faqItems: [
            {
                question: "Is Salon Profit really free?",
                answer:
                    "Yes. The service cost calculator is completely free to use, forever. If you want to manage your full salon, set overheads, and save your cosmetics catalog, you can unlock Pro with a single one-time payment.",
            },
            {
                question: "What is the difference between Free and Pro?",
                answer:
                    "The free version gives you the calculator so you can quickly add products and see what a service costs. Pro adds everything else: salon-wide costs like rent and energy, a saved cosmetics price list, service templates, and tools to manage your business profitably.",
            },
            {
                question: "Is Pro a subscription?",
                answer:
                    "No. Salon Profit Pro is a one-time payment that unlocks the full experience for good. There are no monthly fees and no recurring charges.",
            },
            {
                question: "What kind of salons is it for?",
                answer:
                    "Salon Profit works for hair salons, nail studios, barbershops, beauty and aesthetics clinics, and any business that provides treatments using cosmetics and consumable products.",
            },
            {
                question: "How does the calculator work?",
                answer:
                    "You add the cosmetics and products used for a treatment, enter how much of each is used, and Salon Profit instantly totals the product cost. With Pro, your overheads and labor are factored in too, so you can confidently set a price that stays profitable.",
            },
        ],
        cta: {
            heading: "Start Pricing Your Services With Confidence",
            subheading:
                "Use the free calculator today, or unlock the full Pro experience with a single one-time payment. No subscriptions, no surprises.",
        },
        footer: { contactTitle: "Contact Us", emailLabel: "Email", phoneLabel: "Phone", rights: "All rights reserved." },
        storeButtons: { downloadOn: "Download on the", appStore: "App Store", getItOn: "GET IT ON", googlePlay: "Google Play" },
    },
};

export const getBenefits = (lang: Language): IBenefit[] =>
    translations[lang].benefitsText.map((b, i) => ({
        title: b.title,
        description: b.description,
        imageSrc: benefitImages[i],
        bullets: b.bullets.map((bl, j) => ({ ...bl, icon: benefitIcons[i][j] })),
    }));

export const getTiers = (lang: Language): IPricing[] => translations[lang].tiersText;

export const getStats = (lang: Language): IStats[] =>
    translations[lang].statsText.map((s, i) => ({ ...s, icon: statIcons[i] }));

export const getTestimonials = (lang: Language): ITestimonial[] =>
    translations[lang].testimonialsText.map((t, i) => ({
        name: testimonialNames[i],
        role: t.role,
        message: t.message,
        avatar: testimonialAvatars[i],
    }));
