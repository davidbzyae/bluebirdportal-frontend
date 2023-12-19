import { useLocation, useNavigate } from "react-router-dom";

import { theme } from "@/styles";
import { useMediaQuery } from "@mui/material";

type AppNavigateOptions = {
  persistScroll?: boolean;
};

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const appNavigate = (link: string, opts?: AppNavigateOptions) => {
    const { persistScroll = true } = opts || {};

    const y = xs ? window.scrollY : document.querySelector("main")?.scrollTop;

    const state = {};

    if (persistScroll) {
      const raw = localStorage.getItem("history");
      const history = JSON.parse(raw || "[]");
      const index = history.findIndex(
        (historyItem: any) => historyItem.key == location.key
      );
      if (history[index]) history[index].scrollY = y;
      else
        history.push({
          key: location.key,
          path: location.pathname,
          scrollY: y,
        });
      const json = JSON.stringify(history);
      localStorage.setItem("history", json);
    }

    navigate(link, {
      state,
    });
  };

  return appNavigate;
};
