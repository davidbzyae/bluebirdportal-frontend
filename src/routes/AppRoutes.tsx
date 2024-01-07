import { DelayFade, LoaderPage, LogoLoader } from "@/components";

import { routes } from "./routes";
import { useAuthServices } from "@/hooks";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const { tokens, user } = useAuthServices();

  const element = useRoutes(routes);

  if (!tokens.data || !user.data)
    return (
      <LoaderPage
        fadeInDelay={1500}
        loader={<LogoLoader />}
        sx={{
          height: "100vh",
        }}
      />
    );

  return <DelayFade>{element}</DelayFade>;
};
