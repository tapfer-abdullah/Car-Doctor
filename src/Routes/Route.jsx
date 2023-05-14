import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/AuthPages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
    ]
  },
]);

export default router;
