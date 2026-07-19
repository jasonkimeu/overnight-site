import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import Home from "./pages/Home";
import Barber from "./pages/demos/Barber";
import Coach from "./pages/demos/Coach";
import Cleaning from "./pages/demos/Cleaning";

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Navigate to="/" replace />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/demo/barber", element: <Barber /> },
      { path: "/demo/coach", element: <Coach /> },
      { path: "/demo/cleaning", element: <Cleaning /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  </StrictMode>,
);
