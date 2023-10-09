import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import QandA from "../pages/QandA";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([{

    path: '/',
    element:<Root></Root>,
    children: [
        {

        path: '/',
        loader: () => fetch('/public/Events.json'),
        element: <Home></Home>
        
    },
    {
        path: '/services/:id',
        loader: () => fetch('/public/Events.json'),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
    },
    {

        path: '/login',
        element: <Login></Login>
        
    },
    {

        path: '/register',
        element: <Register></Register>
        
    },
    {
        path: '/qanda',
        element: <PrivateRoute><QandA></QandA></PrivateRoute>
    },
    {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
    }
]
}])

export default router;