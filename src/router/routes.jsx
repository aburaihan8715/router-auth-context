import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Login from "../components/Login";
import Order from "../components/Order";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../components/ForgetPassword";
import SocialLogin from "../components/common/SocialLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/socialLogin",
        element: <SocialLogin></SocialLogin>,
      },
    ],
  },
]);

export default router;
