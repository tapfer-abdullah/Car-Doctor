import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import AuthPorvider from "./Pages/AuthPages/AuthPorvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthPorvider>
        <RouterProvider router={router} />
      </AuthPorvider>
    </React.StrictMode>
  </div>
);
