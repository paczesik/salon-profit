import { BsFillStarFill } from "react-icons/bs";
import { PiScissorsFill } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "30%",
        icon: <TbPigMoney size={34} className="text-primary" />,
        description: "Average margin uplift salons find after pricing services with their real costs."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-primary" />,
        description: "Star rating from salon owners who switched from guesswork to Salon Profit."
    },
    {
        title: "60s",
        icon: <PiScissorsFill size={34} className="text-primary" />,
        description: "All it takes to add your products and calculate the true cost of a treatment."
    }
];
