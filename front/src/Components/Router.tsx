import { Login } from "@mui/icons-material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Application } from "./Application";
import { SignUp } from "./Login/SignUp";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Application />,
    },
    {
      path: "/home",
      element: <Application />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
};
