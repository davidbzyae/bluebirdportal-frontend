import { OverviewPage } from ".";
import { RouteObject } from "react-router-dom";

export const overviewRoutes: RouteObject[] = [
  {
    path: "/",
    element: <OverviewPage />,
  },
  {
    path: "/:timeRangeId",
    element: <OverviewPage />,
  },
];
