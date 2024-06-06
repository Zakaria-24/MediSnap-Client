import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Category from "../Pages/Dashboard/Admin/Category";
import Payment from "../Pages/Dashboard/Admin/Payment";
import SalesReport from "../Pages/Dashboard/Admin/SalesReport";
import Advertise from "../Pages/Dashboard/Admin/Advertise";
import ManageMedicines from "../Pages/Dashboard/Seller/ManageMedicines";
import PaymentHistory from "../Pages/Dashboard/Seller/PaymentHistory";
import AskForAdvertisement from "../Pages/Dashboard/Seller/AskForAdvertisement";
import UserPaymentHistory from "../Pages/Dashboard/User/UserPaymentHistory";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import SellerHome from "../Pages/Dashboard/Seller/SellerHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/shop",
            element: <Shop />,
        },
        {
            path: "/shopCard",
            element: <Cart />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        // Admin Dash
        {
          path: "adminHome",
          element: <AdminHome />,
        },
        {
          path: "manageUsers",
          element: <ManageUsers />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "salesReport",
          element: <SalesReport />,
        },
        {
          path: "advertise",
          element: <Advertise />,
        },
        // sales routes
        {
          path: "sellerHome",
          element: <SellerHome />,
        },
        {
          path: "manageMedicines",
          element: <ManageMedicines />,
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory />,
        },
        {
          path: "askForAdvertisement",
          element: <AskForAdvertisement />,
        },
        // user
        {
          path: "userPaymentHistory",
          element: <UserPaymentHistory />,
        },
      ]
    },
  ]);
  export default router;