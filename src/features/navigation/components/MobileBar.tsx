import { Box, Button, Typography, alpha, darken } from "@mui/material";

import { BarProps } from "../types";
import { FontIcon } from "@/components/misc";
import { palette } from "@/styles";

export const MobileBar = ({ routes, activeCategory, navigateTo }: BarProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0",

        pb: "calc(env(safe-area-inset-bottom, 24px) - 10px)",

        width: "100%",

        display: "flex",

        bgcolor: alpha(darken(palette.background, 0.032), 0.9),
        backdropFilter: `blur(20px)`,

        zIndex: 3,

        touchAction: "none",
        overflow: "hidden",

        borderTop: `1px solid ${darken(palette.background, 0.1)}`,
      }}
    >
      {routes.map((route) => {
        const active = activeCategory == route.category;
        return (
          <Button
            key={route.category}
            onClick={() => navigateTo(route.to, route.category)}
            sx={{
              width: "25%",
              height: "fit-content",

              gap: 0.75,
              flexDirection: "column",

              opacity: active ? 1 : 0.5,

              color: active ? `palette.primary !m` : "inherit !important",
              "*": { color: active ? palette.primary : "inherit !important" },
            }}
            disableRipple
          >
            <FontIcon icon={active ? route.activeIcon : route.icon} size={20} />
            <Typography
              variant="subtitle2"
              fontSize={11}
              textTransform="capitalize"
            >
              {route.category}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};
