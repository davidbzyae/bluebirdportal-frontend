import { Components, Theme, alpha } from "@mui/material";

import { palette } from "..";
import { sizes } from "../sizes";

export const translucentButtonStyle = (color: string = palette.accent) => ({
  bgcolor: alpha(color, 0.16),
  color: color,
  "&:hover": {
    bgcolor: alpha(color, 0.24) + " !important",
  },
});

export const outlinedButtonStyle = (color: string = palette.accent) => ({
  color: color,
  border: `1px solid ${alpha(color, 0.25)}`,
  "&:hover": {
    bgcolor: alpha(color, 0.16),
    border: `1px solid ${alpha(color, 0)}`,
  },
});

export const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const variant = ownerState.variant || "text";
      const size = ownerState.size || "medium";
      const color = ownerState.color || "accent";

      const styles = [
        theme.unstable_sx({
          px: { small: 1.25, medium: 1.5, large: 2 }[size],
          height: sizes[size],
          minWidth: "fit-content",

          display: "flex",
          gap: 1,

          whiteSpace: "nowrap",

          "&.Mui-disabled": {
            opacity: 0.72,
          },
        }),
      ];

      if (variant === "translucent")
        styles.push(theme.unstable_sx(translucentButtonStyle(palette[color])));
      if (variant === "outlined")
        styles.push(theme.unstable_sx(outlinedButtonStyle(palette[color])));

      return styles;
    },
  },
  defaultProps: {
    color: "accent",
    disableElevation: true,
  },
};
