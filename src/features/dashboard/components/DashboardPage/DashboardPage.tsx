import { Content, Header } from "@/components";

import { TimeRangeSelector } from "./TimeRangeSelector";
import { theme } from "@/styles";
import { useMediaQuery } from "@mui/material";

export const DashboardPage = () => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Header title="Dashboard" />
      <Content gutterTop={xs}>
        <TimeRangeSelector />
      </Content>
    </>
  );
};
