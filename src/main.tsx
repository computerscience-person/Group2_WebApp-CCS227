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
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
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
