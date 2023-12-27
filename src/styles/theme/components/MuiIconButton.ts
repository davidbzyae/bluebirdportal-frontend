import { Components, Theme } from "@mui/material";

import { palette } from "..";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: {
      color: palette.accent,
    },
  },
};
