import { DesktopBar } from "./DesktopBar";
import { MobileBar } from "./MobileBar";
import { NavigationRoute } from "..";
import { theme } from "@/styles";
import { useAppNavigate } from "@/hooks";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const routes: NavigationRoute[] = [
  {
    category: "Dashboard",
    icon: "fi fi-rr-dashboard",
    activeIcon: "fi fi-sr-dashboard",
    to: "/",
    original: "/",
  },
  {
    category: "Reports",
    icon: "fi fi-rr-chart-tree-map",
    activeIcon: "fi fi-sr-chart-tree-map",
    to: "/reports",
    original: "/reports",
  },
  {
    category: "Payroll",
    icon: "fi fi-rr-users",
    activeIcon: "fi fi-sr-users",
    to: "/payroll",
    original: "/payroll",
  },
  {
    category: "Sales",
    icon: "fi fi-rr-receipt",
    activeIcon: "fi fi-sr-receipt",
    to: "/sales",
    original: "/sales",
  },
];

export const NavBar = () => {
  const navigate = useAppNavigate();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeCategory, setActiveCategory] = useState("Overview");

  const navigateTo = (to: string, category: string) => {
    navigate(to);
    setActiveCategory(category);
  };

  const Bar = sm ? MobileBar : DesktopBar;

  return (
    <Bar
      routes={routes}
      activeCategory={activeCategory}
      navigateTo={navigateTo}
    />
  );
};
