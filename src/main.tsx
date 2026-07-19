import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from "react-router-dom";
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
    children: [
      { path: "/", element: <Home /> },
      { path: "/demo/barber", element: <Barber /> },
      { path: "/demo/coach", element: <Coach /> },
      { path: "/demo/cleaning", element: <Cleaning /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
