import { createBrowserRouter, Navigate } from "react-router-dom";
import { Sales } from "../pages/Sales";

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
    path: "*",
    element: <Navigate to="/sales" />,
  },
]);
