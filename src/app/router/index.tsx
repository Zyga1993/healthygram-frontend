import { createBrowserRouter } from "react-router";
import { MainLayout } from "../../pages/layouts/main";
import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { Signup } from "../../pages/signup";
import { Profile } from "../../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
