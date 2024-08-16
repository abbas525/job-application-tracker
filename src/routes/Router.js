import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Applications from "../views/Applications.jsx";
import AddJob from "../views/AddJob.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/add-job", exact: true, element: <AddJob /> },
      { path: "/applications", exact: true, element: <Applications /> },
      { path: "/about", exact: true, element: <About /> },
    ],
  },
];

export default ThemeRoutes;
