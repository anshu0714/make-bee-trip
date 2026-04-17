import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Travel from "./features/travel/pages/Travel";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Travel />,
      },
    ],
  },
]);
