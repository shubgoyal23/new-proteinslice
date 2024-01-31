import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { Layout, Home, Shop, Login, Register, Logout } from "./Components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <div>error</div>,
      children: [
         { path: "/", element: <Home /> },
         { path: "/shop", element: <Shop /> },
         { path: "/login", element: <Login /> },
         { path: "/register", element: <Register /> },
         { path: "/logout", element: <Logout /> },
         
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router}>
            <Layout />
         </RouterProvider>
      </Provider>
   </React.StrictMode>
);
