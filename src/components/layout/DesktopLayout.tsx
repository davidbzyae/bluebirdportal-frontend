import { Box, alpha, styled } from "@mui/material";

import { NavBar } from "@/features/navigation";
import { palette } from "@/styles";

const Wrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexWrap: "nowrap",

    background: `linear-gradient(135deg, ${alpha(
      palette.primary,
      0.25
    )} 0%, rgba(153, 56, 255, .2) 100%)`,
  }) 
);

const Main = styled("main")(({ theme }) =>
  theme.unstable_sx({
    m: 1,

    position: "relative",

    height: "calc(100vh - 16px)",
    width: "calc(100vw - 250px)",

    bgcolor: "background.default",

    borderRadius: "12.5px",
    boxShadow: "0 0 10px 0px rgba(0, 0, 0, .075)",

    overflowY: "auto",
    overflowX: "hidden",
  })
);

type MobileLayoutProps = {
  children: React.ReactNode;
};

export const DesktopLayout = ({ children }: MobileLayoutProps) => {
  return (
    <Wrapper>
      <NavBar />
      <Main>{children}</Main>
    </Wrapper>
  );
};
