import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ToastContainer } from "@components/toast-container";
import { ErrorPage } from "@views/error-page";
import { Contact } from "@views/contact";
import { Home } from "@views/home";
import { ROUTE } from "@shared/constants";

import App from "./App";
import "./styles.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE.home,
        element: <Home />,
        children: [
          { path: ROUTE.intro, element: null },
          { path: ROUTE.about, element: null },
          { path: ROUTE.technologies, element: null },
          { path: ROUTE.experience, element: null },
          { path: ROUTE.testimonials, element: null },
        ],
      },
      {
        path: ROUTE.contact,
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
