import React from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import LoginPage from "./routes/LoginPage/LoginPage.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";
import HomePage from "./routes/HomePage/HomePage.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import CollectionsPage from "./routes/CollectionsPage/CollectionsPage";
import LocationPage from "./routes/LocationPage/LocationPage";
import GachaPage from "./routes/GachaPage/GachaPage";
import VendingPage from "./routes/VendingPage/VendingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: "/vending", element: <VendingPage /> },
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/collections",
            element: <CollectionsPage />,
          },
          {
            path: "/location",
            element: <LocationPage />,
          },
          {
            path: "/redeem",
            element: <GachaPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
