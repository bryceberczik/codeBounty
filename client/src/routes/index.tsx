import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../pages/errorPage.tsx";
import Home from "../pages/home.tsx";
import About from "../pages/about.tsx";
import PostAJob from "../pages/postAJob.tsx";
import Explore from "../pages/explore.tsx";
import FindWork from "../pages/findWork.tsx";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/explore",
                element: <Explore />,
            },
            {
                path: "/findwork",
                element: <FindWork />,
            },
            {
                path: "/postajob",
                element: <PostAJob />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    }

]);
