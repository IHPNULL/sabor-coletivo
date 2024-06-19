import { Login } from "./Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./Login/SignUp";
import { Application } from "./Application";
import { PostForm } from "./PostForm/PostForm";

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
      path: "/publicar",
      element: <PostForm />,
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
