import { Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";
import { dashboardRoutes } from "@/features/dashboard";

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
        children: dashboardRoutes,
      },
      {
        path: "/reports",
        element: <>Reports</>,
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
