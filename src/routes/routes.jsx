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
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import Wishlist from "../pages/dashboard/user/Wishlist";
import Cart from "../pages/dashboard/user/Cart";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";
import PrivateRoutes from "./private/PrivateRoutes";
import SellerRoutes from "./private/SellerRoutes";
import AdminRoutes from "./private/AdminRoutes";
import BuyerRoute from "./private/BuyerRoute";
import UpdateProduct from "../pages/dashboard/seller/UpdateProduct";

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
        path: "/product/:id",
        element:<ProductDetailsCard/>,
        loader:({params}) => fetch(`http://localhost:3000/product/${params.id}`)
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
    children: [
      {
        path: '/dashboard/overview',
        element: <PrivateRoutes><Overview/></PrivateRoutes>
      },
      {
        path: '/dashboard/wishlist',
        element: <BuyerRoute><Wishlist/></BuyerRoute>
      },
      {
        path: '/dashboard/cart',
        element: <BuyerRoute><Cart/></BuyerRoute>
      },
      {
        path: '/dashboard/my-products',
        element: <SellerRoutes><MyProducts/></SellerRoutes>
      },
      {
        path: "/dashboard/product/:id",
        element:<SellerRoutes><UpdateProduct/></SellerRoutes>,
        loader:({params}) => fetch(`http://localhost:3000/product/${params.id}`)
      },
      {
        path: '/dashboard/add-products',
        element: <SellerRoutes><AddProducts/></SellerRoutes>
      },
      {
        path: '/dashboard/manage-users',
        element: <AdminRoutes><ManageUsers/></AdminRoutes>
      },
    ]
  }
]);
