import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return element;
};
