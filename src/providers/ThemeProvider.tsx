import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme } from "@/styles";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
