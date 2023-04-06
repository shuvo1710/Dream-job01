import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import Features from "../Component/Features/Features";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/feature",
        element: <Features />,
      },
    ],
  },

  {
    path: '/signin',
    element: <SignIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }

]);
