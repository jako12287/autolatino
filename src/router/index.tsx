import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import Advice from "../views/advice";
import Store from "../views/store";
import NotFound from "../views/404";
import About from "../views/about";

// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import('../views/home'));

// eslint-disable-next-line react-refresh/only-export-components
const Router: RouteObject[] = [
    {
        id: "home",
        path: "/",
        element: <Home/>
    },
    {
        id: "about",
        path: "/about",
        element: <About/>
    },
    {
        id: "advice",
        path: "/advice",
        element: <Advice/>
    },
    {
        id: "store",
        path: "/store",
        element: <Store/>
    },
    {
        id: "notFound",
        path: "*",
        element: <NotFound/>
    }

]

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(Router)