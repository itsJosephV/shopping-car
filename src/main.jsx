import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Items from "./routes/Items";
import Contact from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import ItemDetails from "./routes/ItemDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/items",
        element: <Items />,
      },
      {
        path: "/items/:id",
        element: <ItemDetails />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
