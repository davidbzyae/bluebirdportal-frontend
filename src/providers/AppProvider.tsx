import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter basename="/portal">
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
