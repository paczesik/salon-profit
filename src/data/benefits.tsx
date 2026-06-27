import { FiClock, FiDroplet, FiHome, FiLayers, FiTag, FiTrendingUp, FiZap } from "react-icons/fi";
import { LuCalculator } from "react-icons/lu";
import { TbReceipt2 } from "react-icons/tb";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "The Service Cost Calculator",
        description: "The heart of Salon Profit. Add the products you use for any treatment and instantly see what it costs you, so you can price every service with confidence. Free for everyone.",
        bullets: [
            {
                title: "Add Products in Seconds",
                description: "Build a treatment by adding cosmetics and consumables and the amount used.",
                icon: <LuCalculator size={26} />
            },
            {
                title: "Instant Cost Breakdown",
                description: "See the exact product cost of every service the moment you add an item.",
                icon: <TbReceipt2 size={26} />
            },
            {
                title: "Price for Profit",
                description: "Compare your cost against your price so no treatment is ever sold at a loss.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Set Up Your Salon Costs",
        description: "Go beyond products. With Pro, capture the real overheads of running your salon so every calculation reflects what it actually costs to keep the lights on.",
        bullets: [
            {
                title: "Rent & Overheads",
                description: "Add your rent, energy and fixed costs so they factor into every service.",
                icon: <FiHome size={26} />
            },
            {
                title: "Energy & Utilities",
                description: "Account for water, electricity and the running cost of your equipment.",
                icon: <FiZap size={26} />
            },
            {
                title: "Service Library",
                description: "Save the services you offer and reuse them across your whole team.",
                icon: <FiLayers size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Manage Your Cosmetics Catalog",
        description: "Configure prices for every cosmetic and product you use once, and Salon Profit keeps your costs accurate everywhere. A Pro feature built for busy salons.",
        bullets: [
            {
                title: "Product Price List",
                description: "Store the price and pack size of every cosmetic you buy in one place.",
                icon: <FiTag size={26} />
            },
            {
                title: "Cost Per Use",
                description: "Salon Profit works out the exact cost per ml, gram or application for you.",
                icon: <FiDroplet size={26} />
            },
            {
                title: "Always Up to Date",
                description: "Update a price once and every service using that product recalculates.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
