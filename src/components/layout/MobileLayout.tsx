import { Box } from "@mui/material";
import { NavBar } from "@/features/navigation/";

type MobileLayoutProps = {
  children: React.ReactNode;
};

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <>
      <Box pb="calc(150px + env(safe-area-inset-bottom, 24px))">{children}</Box>
      <NavBar />
    </>
  );
};
