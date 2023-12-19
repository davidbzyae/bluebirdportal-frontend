import { NavigationRoute } from ".";

export type BarProps = {
  routes: NavigationRoute[];
  activeCategory: string;
  navigateTo: (to: string, category: string) => void;
};
