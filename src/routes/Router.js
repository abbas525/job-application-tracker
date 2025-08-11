import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Applications from "../views/Applications.jsx";
import AddJob from "../views/AddJob.jsx";  
import Dashboard from "../pages/DashboardMain.jsx";
import AccountLayout from "../layouts/AccountLayout.jsx";
import LoginPage from "../pages/accounts/Login.jsx";
import Signup from "../pages/accounts/Signup.jsx";
import { element } from "prop-types";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <FullLayout />
      </ProtectedRoutes>
    ),
    children: [ 
      {path: "/", element: <Navigate to="/dashboard"/>},
      { path: "dashboard", element: <Dashboard /> }, 
      { path: "add-job", element: <AddJob /> },
      { path: "applications", element: <Applications /> },
      { path: "about", element: <About /> },
      
    ],
  },
  {
    path: "/account",
    element: <AccountLayout />, 
    children: [ 
      { path: "/account", element: <Navigate to="/account/signup" /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  
];

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", element: <Starter /> },
//       { path: "/add-job", exact: true, element: <AddJob /> },
//       { path: "/applications", exact: true, element: <Applications /> },
//       { path: "/about", exact: true, element: <About /> },
//        { path: "/dashboard", exact: true, element: <Dashboard /> },
//     ],
//   },
// ];

export default ThemeRoutes;
