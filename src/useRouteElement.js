import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layout/layoutLR/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: '/login',
      element: (
        <Layout>
          <Login />,
        </Layout>
      ),
    },
    {
      path: '/register',
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
  ]);
  return routeElement;
}
