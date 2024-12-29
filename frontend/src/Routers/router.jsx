import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Book/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Cart from "../Pages/Book/CartPage";
import CheckoutPage from "../Pages/Book/CheckoutPage";
import { SingleBook } from "../Pages/Book/SingleBook";
import { PrivateRoute } from "./PrivateRoute";
import { OrderPage } from "../Pages/Book/OrderPage";
import AdminRoute from "./AdminRoute";
import { AdminLogin } from "../Pages/Admin/AdminLogin";
import DashboardLayout from "../Pages/Admin/DashboardLayout";
import Dashboard from "../Pages/Admin/Dashboard";
import AddBook from "../Pages/Admin/AddBook";
import EditBook from "../Pages/Admin/EditBook";
import ManageBook from "../Pages/Admin/ManageBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <h1>About</h1>,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoute>
            <EditBook />
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBook />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
