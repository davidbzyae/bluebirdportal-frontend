import { Components, Theme, alpha, darken, lighten } from "@mui/material";

import { palette } from "..";

export const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    paper: {
      background: lighten(palette.background, 0.05),

      border: `solid 1px ${alpha(darken(palette.background, 0.72), 0.16)}`,
      borderRadius: "12.5px",

      boxShadow: "none",
    },
    root: {
      marginTop: 4,
    },
  },
  defaultProps: {
    elevation: 1,
  },
};
