import { createBrowserRouter, Navigate } from "react-router-dom";
import { Sales } from "../pages/Sales";
import { StatisticalCharts } from "../pages/StatisticalCharts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sales" replace />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/statistical-charts",
    element: <StatisticalCharts />,
  },
  {
    path: "*",
    element: <Navigate to="/sales" />,
  },
]);
