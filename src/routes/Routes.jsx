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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
        }
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
      ]
    },
  ]);
  export default router;