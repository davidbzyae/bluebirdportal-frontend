import { DashboardPage } from ".";
import { RouteObject } from "react-router-dom";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/:timeRangeId",
    element: <DashboardPage />,
  },
];
