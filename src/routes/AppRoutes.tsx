import { SpinnerPage } from "@/components";
import { routes } from "./routes";
import { useAuthServices } from "@/hooks";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const { tokens, user } = useAuthServices();

  const element = useRoutes(routes);

  if (!tokens.data || !user.data)
    return (
      <SpinnerPage
        sx={{
          height: "100vh",
        }}
        fadeInDelay={1000}
      />
    );

  return element;
};
