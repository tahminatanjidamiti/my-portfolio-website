import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DetailsProject from "../pages/Details/DetailsProject";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://my-portfolio-server-dusky-nine.vercel.app/latestProjects'),
            },
            {
                path: "/detail-project/:id",
                element: <DetailsProject></DetailsProject>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-dusky-nine.vercel.app/project_details/${params.id}`)
            }
        ]
    },
]);