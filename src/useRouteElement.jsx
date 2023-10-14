import React from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Layout from "./layout/layoutLR/Layout";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Tour from "./pages/Tour/Tour";
import Dashboard from "./pages/Dashboard/Dashboard";
import DataFooter from "./pages/DataFooter/DataFooter";
import DataHeader from "./pages/DataHeader/DataHeader";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AboutUsHome from "./pages/AboutUsHome/AboutUsHome";
import AboutUsDetail from "./pages/AboutUsDetail/AboutUsDetail";

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
  return data ? <Outlet /> : <Navigate to="/admin" />;
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
                { path: "tour", index: true, element:<Tour/>},
                { path: "tourHot", element:<Dashboard/>},
                { path: "dataFooter", element: <DataFooter /> },
                { path: "dataHeader", element: <DataHeader /> },
                { path: "aboutUsHome", element: <AboutUsHome /> },
                { path: "aboutUsDetail", element: <AboutUsDetail /> },

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
              <Login />
            </Layout>
          ),
        },
        
      ],
    },
    {
      path: '*',
      element: (
       <PageNotFound/>
      )
    }
  ]);

  return routeElement;
}
