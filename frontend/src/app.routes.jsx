import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Landing from "./features/travel/pages/Landing";
import Results from "./features/travel/pages/Results";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);
