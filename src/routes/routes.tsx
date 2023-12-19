import { Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";

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
        element: <>Dashboard</>,
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
