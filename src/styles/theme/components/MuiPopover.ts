import { Components, Theme, alpha, darken, lighten } from "@mui/material";

import { palette } from "..";

export const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    paper: {
      background: lighten(palette.background, 0.05),

      border: `solid 1px ${alpha(darken(palette.background, 0.72), 0.16)}`,
      borderRadius: 16,

      boxShadow: "0 2.5px 5px 0px rgba(0, 0, 0, .16)",
    },
    root: {
      marginTop: 4,
    },
  },
  defaultProps: {
    elevation: 1,
  },
};
