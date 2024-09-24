import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import NotFound from "./pages/404.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import Support from "./pages/Support.tsx";

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
  {
    path: "/support",
    element: <Support />,
  },
  // {
  //   path: "/Group2_WebApp-CCS227/",
  //   element: <Homepage />,
  //   errorElement: <NotFound />,
  // },
  // {
  //   path: "/Group2_WebApp-CCS227/home",
  //   element: <Homepage />,
  // },
  // {
  //   path: "/Group2_WebApp-CCS227/about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/Group2_WebApp-CCS227/product",
  //   element: <ProductPage />,
  // },
  // {
  //   path: "/Group2_WebApp-CCS227/support",
  //   element: <Support />,
  // },
], {
  basename: "/Group2_WebApp-CCS227"
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
