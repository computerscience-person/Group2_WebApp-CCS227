import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import NotFound from "./pages/404.tsx";
import ProductPage from "./pages/ProductPage.tsx";

const routes = createBrowserRouter([
  {
    // ROUTING: http://localhost:5174/*
    path: "*",
    element: <NotFound />,
  },
  {
    // ROUTING: http://localhost:5174/
    path: "/",
    element: <Homepage />,
  },
  {
    // ROUTING: http://localhost:5174/home
    path: "/home",
    element: <Homepage />,
  },
  {
    // ROUTING: http://localhost:5174/about
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
