import { Box, darken, styled } from "@mui/material";

import { NavBar } from "@/features/navigation";
import { palette } from "@/styles";

const Wrapper = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexWrap: "nowrap",

    bgcolor: darken(palette.background, 0.04),
  })
);

const Main = styled("main")(({ theme }) =>
  theme.unstable_sx({
    m: 1,

    position: "relative",

    height: "calc(100vh - 16px)",
    width: "calc(100vw - 250px)",

    bgcolor: "background.default",

    border: `solid 1px ${darken(palette.background, 0.1)}`,
    borderRadius: 1 / 8,

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
