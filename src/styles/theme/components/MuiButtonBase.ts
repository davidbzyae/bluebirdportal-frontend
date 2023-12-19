import { Components, Theme } from "@mui/material";

export const MuiButtonBase: Components<Theme>["MuiButtonBase"] = {
  styleOverrides: {
    root: {
      ".MuiTouchRipple-child": {
        filter: "blur(12px) opacity(.5)",
      },
    },
  },
};
