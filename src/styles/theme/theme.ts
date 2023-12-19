import { components } from "./components";
import { createTheme } from "@mui/material";
import { palette } from ".";
import { typography } from "./typography";

export const theme = createTheme({
  shape: {
    borderRadius: 100,
  },
  palette: {
    mode: "light",
    primary: {
      main: palette.primary,
    },
    text: {
      primary: palette.text,
      secondary: palette.textSecondary,
    },
    error: {
      main: palette.error,
    },
    background: {
      default: "#000",
    },
  },
  typography,
  components,
});
