import { Box, Button, Divider, alpha, styled } from "@mui/material";
import { FontIcon, ProgressiveImage } from "@/components/misc";

import { BarProps } from "../types";
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

        borderRadius: "12.5px",
        boxShadow: "0 0 10px 0px rgba(0, 0, 0, .075)",

        zIndex: 3,

        touchAction: "none",
        overflow: "hidden",
      }}
    >
      <ProgressiveImage
        src="https://zyae.net/assets/images/brand/bluebird/bluebirdFull.svg"
        sx={{
          mx: 3,
          my: 2,
        }}
      />

      <Divider
        sx={{
          mx: -2,
          mb: 1,
        }}
      />
      {routes.map((route) => {
        const active = activeCategory == route.category;
        return (
          <StyledLinkButton
            variant={active ? "translucent" : "text"}
            key={route.category}
            onClick={() => navigateTo(route.to, route.category)}
            sx={{
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
      <StyledLinkButton
        sx={{
          mt: "auto",
        }}
      >
        <FontIcon
          icon="fi-rr-messages-question"
          size={20}
          sx={{
            width: 48,
          }}
        />
        Support
      </StyledLinkButton>
      <StyledLinkButton>
        <FontIcon
          icon="fi fi-rr-settings"
          size={20}
          sx={{
            width: 48,
          }}
        />
        Settings
      </StyledLinkButton>
    </Box>
  );
};
