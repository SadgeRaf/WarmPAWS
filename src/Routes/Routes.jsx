import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Details from "../component/Details"
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import Register from "../pages/Registration";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout />,
            children: [
                {
                   path:"",
                   element:<Home></Home>,
                },
                {
                   path:"/details/:id",
                   element: <Details></Details>,
                   loader: ()=> fetch("/data.json"),
                },
                {
                    path:"/services",
                    element:<Services></Services>,
                },
                {
                    path:"/profile",
                    element:<Profile></Profile>,
                }
            ]
        },{
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children: [
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/registration",
                    element:<Register></Register>,
                }
            ]
        },{
            path:"/*",
            element:<Error></Error>
        }
    ]
);

export default router;