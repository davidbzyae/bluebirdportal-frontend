import { CssBaseline, useMediaQuery } from "@mui/material";

import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileLayout";
import { theme } from "@/styles";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      {sm ? (
        <MobileLayout children={children} />
      ) : (
        <DesktopLayout children={children} />
      )}
    </>
  );
};
