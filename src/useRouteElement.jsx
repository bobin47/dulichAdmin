import React, { useEffect } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Layout from "./layout/layoutLR/Layout";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Tour from "./pages/Tour/Tour";
import Dashboard from "./pages/Dashboard/Dashboard";

function ProtectedRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function IsAdmin() {
  const data = JSON.parse(localStorage.getItem("user"));
  return data ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <IsAdmin />,
          children: [
            {
              path: "/admin",
              element: (
                  <Admin />
              ),
              children:[
                {path:"tour",element:<Tour/>},
                {path:"dashboard",element:<Dashboard/>}
              ]
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <RejectRoute />,
      children: [
        {
          path: "/login",
          element: (
            <Layout>
              <Login /> ,{" "}
            </Layout>
          ),
        },
        
      ],
    },
  ]);

  return routeElement;
}
