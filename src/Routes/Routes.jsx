import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsProject from "../pages/Details/DetailsProject";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/detail-project",
                element: <DetailsProject></DetailsProject>,
            }
        ]
    },
]);