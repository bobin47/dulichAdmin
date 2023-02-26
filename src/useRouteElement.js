import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import Layout from "./layout/layoutLR/Layout";
import LayoutMain from "./layout/LayoutMain/LayoutMain";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

function ProtectedRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  useEffect(() => {}, [isAuthenticated]);
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
      element: (
        <LayoutMain>
          <Home />
        </LayoutMain>
      ),
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: (
            <LayoutMain>
              <Home />
            </LayoutMain>
          ),
        },
        {
          path: "/profile",
          element: (
            <LayoutMain>
              <Profile />
            </LayoutMain>
          ),
        },
        {
          path: "/detail/:id",
          element: (
            <LayoutMain>
              <Detail />
            </LayoutMain>
          ),
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
