import { Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";
import { overviewRoutes } from "@/features/overview";
import { reportsRoutes } from "@/features/reports";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: "/",
        children: overviewRoutes,
      },
      {
        path: "/reports",
        children: reportsRoutes,
      },
      {
        path: "/payroll",
        element: <>Payroll</>,
      },
      {
        path: "/sales",
        element: <>Sales</>,
      },
    ],
  },
];
