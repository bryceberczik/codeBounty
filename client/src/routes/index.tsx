import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../pages/errorPage.tsx";
import Home from "../pages/home.tsx";

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
        ],
    }

]);
