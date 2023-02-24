import React from "react";
import { useSelector } from "react-redux";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Layout from "./layout/layoutLR/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      index: true,
      element: <Home />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
              <Login />,
            </Layout>
          ),
        },
        {
          path: "/register",
          element: (
            <Layout>
              <Register />
            </Layout>
          ),
        },
      ],
    },
  ]);

  return routeElement;
}
