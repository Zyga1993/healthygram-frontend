import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layout/default";
import { HomePage } from "../../pages/home/ui/home";
import { LoginPage } from "../../pages/login/ui/login";
import { RegisterPage } from "../../pages/register/ui/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
