import ReactDOM  from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const rootElement = document.getElementById("root");

if (rootElement) {

  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} /> 
  );
} else {
  console.error("No root element found");
}
