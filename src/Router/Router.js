import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from "../Component/LayOut/Main"
import Home from "../Component/Home/Home"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
       
    }
])