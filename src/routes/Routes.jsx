import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
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
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import AdminRoute from "./AdminRoute";
import ManageCategory from "../Pages/Dashboard/Admin/ManageCategory";
import Checkout from "../Pages/Checkout/Checkout";
import Invoice from "../Pages/Invoice/Invoice";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";

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
        path: "/categoryDetails/:id",
        element: (<PrivateRoute>
          <CategoryDetails />
        </PrivateRoute>),
        // loader: ({ params }) =>
        //   fetch(
        //     `${import.meta.env.VITE_API_URL}/categories/${params.categoryName}`
        //   ),
      },
      {
        path: "/shopCard",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
    ],
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Admin Dash
      {
        index: true,
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "category",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCategory />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentManagement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Payment />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "salesReport",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <SalesReport />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "advertise",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Advertise />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // sales routes
      {
        index: true,
        path: "sellerHome",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <SellerHome />,
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageMedicines",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <ManageMedicines />,
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <PaymentHistory />,
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "askForAdvertisement",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <AskForAdvertisement />,
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      // user
      {
        path: "userPaymentHistory",
        element: (
          <PrivateRoute>
            <UserPaymentHistory />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
