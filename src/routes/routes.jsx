import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import ContuctUs from "../pages/ContuctUs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetailsCard from "../components/ProductDetailsCard";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/dashboard/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact-us",
        element:<ContuctUs/>
      },
      {
        path: "/register",
        element:<Register/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/product-details",
        element:<ProductDetailsCard/>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard/overview',
        element: <Overview/>
      },
    ]
  }
]);
