import { palette, sizes } from ".";

import { components } from "./components";
import { createTheme } from "@mui/material";
import { typography } from "./typography";

const _theme = createTheme();

export const theme = createTheme({
  shape: {
    borderRadius: 100,
  },
  sizes,
  palette: {
    mode: "light",
    primary: {
      main: palette.primary,
    },
    accent: _theme.palette.augmentColor({
      color: { main: palette.accent },
    }),
    text: {
      primary: palette.text,
      secondary: palette.textSecondary,
    },
    error: {
      main: palette.error,
    },
    background: {
      default: palette.background,
    },
  },
  typography,
  components,
});
