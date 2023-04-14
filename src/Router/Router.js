import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import Features from "../Component/Features/Features";
import ChoiceListing from "../Component/Choice/ChoiceListing";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Searchbar from "../Component/Searchbar/Searchbar";
import DashboardLayout from "./dashboard/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import Cv from "./dashboard/Cv";

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
      {
        path: "/choice-listing",
        element: <ChoiceListing></ChoiceListing>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/search",
        element: <Searchbar />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"/dashboard",
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>

      },
      {
        path:"/dashboard/cv",
        element:<Cv></Cv>
      }
    ]
  }
]);
