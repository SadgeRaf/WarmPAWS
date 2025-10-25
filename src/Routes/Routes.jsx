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
import PrivateRoute from "../Provider/PrivateRoute";
import ForgotPassword from "../pages/forgot";

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
                   element: (
                    <PrivateRoute>
                        <Details></Details>
                    </PrivateRoute>
                   ),
                   loader: ()=> fetch("/data.json"),
                },
                {
                    path:"/services",
                    element: (
                        <PrivateRoute>
                            <Services></Services>
                        </PrivateRoute>
                    ),
                },
                {
                    path:"/profile",
                    element:(
                        <PrivateRoute>
                            <Profile></Profile>
                        </PrivateRoute>
                    ),
                }
            ]
        },
        {
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
        },
        {
            path:"/forgot",
            element:<ForgotPassword></ForgotPassword>,
        },
        {
            path:"/*",
            element:<Error></Error>
        }
    ]
);

export default router;