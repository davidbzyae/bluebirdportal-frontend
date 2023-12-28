import { Components, Theme } from "@mui/material";
import { palette, sizes } from "..";

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ ownerState }) => {
      const size = ownerState.size || "large";

      return {
        width: sizes[size],
        height: sizes[size],

        color: palette.accent,
      };
    },
  },
};
