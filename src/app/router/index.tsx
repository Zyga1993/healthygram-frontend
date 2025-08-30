import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layout/default";
import { HomePage } from "../../pages/home/ui/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
