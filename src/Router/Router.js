import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import Features from "../Component/Features/Features";
import ChoiceListing from "../Component/Choice/ChoiceListing";

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
            }
            
        ]
       
    }
])

