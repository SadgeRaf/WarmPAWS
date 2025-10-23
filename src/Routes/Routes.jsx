import { createBrowserRouter } from "react-router";
import Registration from "../pages/Registration";
import Details from "../component/Details"
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";

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
                }
            ]
        },{
            path:"/auth",
            element:<Registration></Registration>
        },{
            path:"/*",
            element:<Error></Error>
        }
    ]
);

export default router;