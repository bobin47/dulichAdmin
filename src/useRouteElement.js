import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import LayoutAdmin from "./layout/LayoutAdmin/LayoutAdmin";
import Layout from "./layout/layoutLR/Layout";
import LayoutMain from "./layout/LayoutMain/LayoutMain";
import Admin from "./pages/Admin/Admin";
import CourseAdmin from "./pages/Admin/CourseAdmin";
import UserAdmin from "./pages/Admin/UserAdmin";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import RoadMap from "./pages/RoadMap/RoadMap";
import AddUserForCoures from "./pages/AddUserForCoures/AddUserForCoures";

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
  return data.maLoaiNguoiDung === "GV" ? <Outlet /> : <Navigate to="/" />;
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
      path: "/lotrinh",
      index: true,
      element: (
        <LayoutMain>
          <RoadMap />
        </LayoutMain>
      ),
    },
    {
      path: "/learn",
      index: true,
      element: (
        <LayoutMain>
          <Learn />
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
                <LayoutAdmin>
                  <Admin />
                </LayoutAdmin>
              ),
            },
            {
              path: "/user",
              element: (
                <LayoutAdmin>
                  <UserAdmin />
                </LayoutAdmin>
              ),
            },
            {
              path: "/course",
              element: (
                <LayoutAdmin>
                  <CourseAdmin />
                </LayoutAdmin>
              ),
            },
            {
              path: "/course/:id",
              element: (
                <LayoutAdmin>
                 <AddUserForCoures/>
                </LayoutAdmin>
              ),
            },
          ],
        },
        {
          path: "/home",
          element: (
            <LayoutMain>
              <Home />
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
        {
          path: "/profile",
          element: (
            <LayoutMain>
              <Profile />
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
