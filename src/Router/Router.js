import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import Features from "../Component/Features/Features";
import ChoiceListing from "../Component/Choice/ChoiceListing";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([



    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/feature",
                element: <Features />,
            },
            {
                path: "/choice-listing",
                element: <ChoiceListing></ChoiceListing>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
            
        ]
       
    }
])

