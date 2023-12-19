import React from "react";
import { ThemeProvider } from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
