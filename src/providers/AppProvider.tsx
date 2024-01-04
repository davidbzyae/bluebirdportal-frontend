import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { queryClient } from "@/libs";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter basename="/portal">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
