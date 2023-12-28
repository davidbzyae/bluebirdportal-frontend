import { Content, Header } from "@/components";

import { TimeRangeSelector } from "./TimeRangeSelector";
import { theme } from "@/styles";
import { useMediaQuery } from "@mui/material";

const PTD = {
  grossSales: {
    day: 13894,
    periodToDate: 227917,
    lastYearPeriodToDate: 271197,
    variance: -43280,
    percentageChange: -16.0,
  },
  netSales: {
    day: 12548,
    periodToDate: 216032,
    lastYearPeriodToDate: 259195,
    variance: -43163,
    percentageChange: -16.7,
  },
  checks: {
    day: 49,
    periodToDate: 1541,
    lastYearPeriodToDate: 1947,
    variance: -406,
    percentageChange: 0.0,
  },
  checkAverage: {
    day: 256.07,
    periodToDate: 140.19,
    lastYearPeriodToDate: 133.13,
    variance: 7.06,
    percentageChange: 0.05,
  },
  retailProducts: {
    food: {
      day: 7007,
      periodToDate: 164288,
      lastYearPeriodToDate: 186838,
      variance: -22549,
      percentageChange: -12.1,
    },
    liquor: {
      day: 4613,
      periodToDate: 35416,
      lastYearPeriodToDate: 50745,
      variance: -15329,
      percentageChange: -30.2,
    },
    nonAlcoholicBeverage: {
      day: 232,
      periodToDate: 9086,
      lastYearPeriodToDate: 7970,
      variance: 1116,
      percentageChange: 14.0,
    },
    beer: {
      day: 310,
      periodToDate: 12068,
      lastYearPeriodToDate: 18220,
      variance: -6152,
      percentageChange: -33.8,
    },
    wine: {
      day: 132,
      periodToDate: 5429,
      lastYearPeriodToDate: 7424,
      variance: -1995,
      percentageChange: -26.9,
    },
    retailOther: {
      day: 1600,
      periodToDate: 1630,
      lastYearPeriodToDate: 0,
      variance: 1630,
      percentageChange: 0.0,
    },
  },
  salesPerLaborHour: {
    day: 0.0,
    periodToDate: 0.0,
    lastYearPeriodToDate: 45.42,
    variance: -45.42,
    percentageChange: -1.0,
  },
  laborDollars: {
    day: 0,
    periodToDate: 0,
    lastYearPeriodToDate: 61812,
    variance: -61812,
    percentageChange: -100.0,
  },
  laborPercentage: {
    day: 0,
    periodToDate: 0,
    lastYearPeriodToDate: 5430,
    variance: -5430,
    percentageChange: -100.0,
  },
  laborHours: {
    day: 0,
    periodToDate: 0,
    lastYearPeriodToDate: 5430,
    variance: -5430,
    percentageChange: -100.0,
  },
  overtimeHours: {
    day: 0,
    periodToDate: 0,
    lastYearPeriodToDate: 276,
    variance: -276,
    percentageChange: -100.0,
  },
  comp: {
    day: 261,
    periodToDate: 7908,
    lastYearPeriodToDate: 8428,
    variance: -521,
    percentageChange: -6.2,
  },
  discount: {
    day: 1085,
    periodToDate: 3905,
    lastYearPeriodToDate: 3510,
    variance: 395,
    percentageChange: 11.3,
  },
  voids: {
    day: 3654,
    periodToDate: 7464,
    lastYearPeriodToDate: 20637,
    variance: -13173,
    percentageChange: -63.8,
  },
};

export const OverviewPage = () => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Header title="Overview" />
      <Content gutterTop={xs}>
        <TimeRangeSelector />
      </Content>
    </>
  );
};
