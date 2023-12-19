import { Box, Button, alpha, darken, styled } from "@mui/material";

import { BarProps } from "../types";
import { FontIcon } from "@/components/misc";
import { palette } from "@/styles";

const StyledLinkButton = styled(Button)(({ theme }) =>
  theme.unstable_sx({
    justifyContent: "left",
  })
);

export const DesktopBar = ({
  routes,
  activeCategory,
  navigateTo,
}: BarProps) => {
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        mr: 0,

        width: "250px",

        display: "flex",
        flexDirection: "column",
        gap: 0.5,

        bgcolor: "background.default",

        border: `solid 1px ${darken(palette.background, 0.1)}`,
        borderRadius: 1 / 8,

        zIndex: 3,

        touchAction: "none",
        overflow: "hidden",
      }}
    >
      {routes.map((route) => {
        const active = activeCategory == route.category;
        return (
          <StyledLinkButton
            variant={active ? "translucent" : "text"}
            key={route.category}
            onClick={() => navigateTo(route.to, route.category)}
            sx={{
              borderRadius: "8px",

              opacity: active ? 1 : 0.9,

              ":hover": {
                bgcolor: alpha(palette.primary, 0.08),
              },
            }}
            color={active ? "primary" : "inherit"}
          >
            <FontIcon
              icon={active ? route.activeIcon : route.icon}
              size={20}
              color={active ? palette.primary : palette.text}
              sx={{
                width: 48,
              }}
            />
            {route.category}
          </StyledLinkButton>
        );
      })}
    </Box>
  );
};
