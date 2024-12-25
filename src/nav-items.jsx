import { HomeIcon, BarChart2 } from "lucide-react";
import Index from "./pages/Index.jsx";
import Statistics from "./pages/Statistics.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Statistics",
    to: "/statistics",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Statistics />,
  },
];