import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import FindWork from "./pages/FindWork.tsx";
import PostAJob from "./pages/PostAJob.tsx";
import About from "./pages/About.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import Signup from "./pages/Signup.tsx";
import SettingsPage from "./pages/Settings.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/find-work",
        element: <FindWork />,
      },
      {
        path: "/post-listing",
        element: <PostAJob />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/my-profile",
        element: <UserProfile />
      },
      { 
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
