import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authservice from "../service/appwrite/auth";
import { logout, login } from "../store/authSlice";

export default function Layout() {;
   const dispatch = useDispatch()
   useEffect(()=>{
      authservice.currentUser().then((data) => {
         if(data){
            dispatch(login(data))
         }else{
            dispatch(logout())
         }
      })
   },[])
   return (
      <div className="w-full block dark:bg-gray-800 min-h-screen">
         <Header />
         <main >
            <Outlet />
         </main>
         <Footer />
      </div>
   
   );
}
