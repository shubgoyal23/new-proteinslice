import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, login } from "../store/authSlice";
import conf from "../service/conf/conf";
import axios from "axios";

export default function Layout() {
   const dispatch = useDispatch();

   useEffect(() => {
      axios
         .get(`${conf.URL}/api/v1/users/`, { withCredentials: true })
         .then((data) => {
            if (data?.data?.data) {
               dispatch(login(data?.data?.data));
            } else {
               dispatch(logout());
            }
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="w-full block dark:bg-gray-800 min-h-screen dark:text-white">
         <Header />
         <main className="min-h-96">
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
