import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Theme from "../theme/Theme";

function Header() {
   const user = useSelector((state) => state.authentication.isLogged);
   const currentTheme = useSelector((state) => state.theme.CurrentTheme);
   const [display, setDisplay] = useState({
      theme: false,
      account: false,
      nav: false,
   });

   return (
      <header className="w-full h-20 bg-white flex justify-between items-center flex-col md:flex-row dark:bg-gray-800 ">
         <div className="md:flex-initial md:w-64 md:pl-8 w-full p-4 flex  justify-between">
            <button
               className="md:hidden text-2xl dark:text-white"
               onClick={() =>
                  setDisplay((prev) => {
                     return { ...prev, nav: !prev.nav };
                  })
               }
            >
               <i
                  className={`fa-solid fa-${display.nav ? "xmark" : "bars"}`}
               ></i>
            </button>

            <Link to="/">
               <img
                  src="src\assets\proteinslice-logo-transparent.png"
                  alt="proteinSlice Logo"
                  className="object-contain h-14"
               />
            </Link>
            <div className="flex md:hidden justify-center items-center">
               <div className="flex justify-end justify-items-end flex-col md:flex-row">
                  <Link>
                     <button className="text-2xl font-medium text-red-500 py-2 px-2">
                        <i className="fa-solid fa-bag-shopping "></i>
                     </button>
                  </Link>
               </div>
               <div>
                  <button className="text-2xl font-medium text-lime-500 py-2 px-2">
                     <i
                        className={`fa-regular fa-${
                           currentTheme === "dark" ? "moon" : "sun"
                        }`}
                        onClick={() =>
                           setDisplay((prev) => {
                              return { ...prev, theme: !prev.theme };
                           })
                        }
                     />
                  </button>
                  <div
                     className={`w-28 h-24 fixed top-14 right-6 rounded-lg border-2 border-slate-300 border-solid pt-1 bg-white dark:bg-black text-amber-400 ${
                        display.theme ? "inline" : "hidden"
                     }`}
                     onClick={() =>
                        setDisplay((prev) => {
                           return { ...prev, theme: !prev.theme };
                        })
                     }
                  >
                     <Theme />
                  </div>
               </div>
            </div>
         </div>
         <div
            className={`flex justify-between flex-auto flex-col md:flex-row items-center z-10 bg-gray-600 md:bg-transparent pt-10 pb-10 h-full md:p-0 ${
               display.nav
                  ? "absolute top-20 w-full"
                  : "absolute -left-[720px] w-full md:static md:w-auto"
            } ease-in duration-500 transition-all`}
         >
            <div className="flex-auto flex justify-center text-center gap-6 flex-col md:flex-row">
               {[
                  ["Home", "/"],
                  ["Store", "/shop"],
                  ["About", "/about"],
                  ["Contact Us", "/contact"],
               ].map(([name, url]) => (
                  <NavLink
                     key={url}
                     to={url}
                     className={({ isActive }) =>
                        `text-lime-500 text-2xl font-medium hover:text-amber-400 flex justify-center items-center ${
                           isActive ? "text-amber-400" : ""
                        }`
                     }
                  >
                     {name}
                  </NavLink>
               ))}
               <div className="flex justify-start justify-items-start items-start flex-col" >
                  <button
                     className="text-2xl font-medium text-lime-500 dark:text-amber-400 py-2 px-2"
                     onClick={() =>
                        setDisplay((prev) => {
                           return { ...prev, account: !prev.account };
                        })
                     }
                  >
                     Account <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <div
                     className={`w-full z-20 h-30 flex flex-col rounded-lg border-2 border-slate-300 border-solid pt-1 bg-white dark:bg-black text-amber-400 ${
                        display.account ? "block" : "hidden"
                     }`}
                     onClick={() =>
                        setDisplay((prev) => {
                           return { ...prev, account: !prev.account };
                        })
                     }
                  >
                     <Link to="/login">
                        {!user && (
                           <button className="bg-transparent text-lime-500 px-4 py-2 text-2xl font-medium hover:text-amber-400">
                              Login
                           </button>
                        )}
                     </Link>
                     <Link to="/register">
                        {!user && (
                           <button className="bg-transparent text-lime-500 px-4 py-2 text-2xl font-medium hover:text-amber-400">
                              Register
                           </button>
                        )}
                     </Link>
                     <Link to="/logout">
                        {user && (
                           <button className="bg-transparent text-lime-500 px-4 py-2 text-2xl font-medium hover:text-amber-400">
                              Logout
                           </button>
                        )}
                     </Link>
                  </div>
               </div>
            </div>

            <div className=" md:flex hidden">
               <div className="flex-1 flex justify-end justify-items-end flex-col md:flex-row">
                  <Link>
                     <button className="text-2xl font-medium text-red-500 py-2 px-2">
                        <i className="fa-solid fa-bag-shopping "></i>
                     </button>
                  </Link>
               </div>
               <div>
                  <button className="text-2xl font-medium text-lime-500 py-2 px-2">
                     <i
                        className={`fa-regular fa-${
                           currentTheme === "dark" ? "moon" : "sun"
                        }`}
                        onClick={() =>
                           setDisplay((prev) => {
                              return { ...prev, theme: !prev.theme };
                           })
                        }
                     />
                  </button>
                  <div
                     className={`w-28 h-24 fixed top-14 right-6 rounded-lg border-2 border-slate-300 border-solid pt-1 bg-white dark:bg-black text-amber-400 ${
                        display.theme ? "inline" : "hidden"
                     }`}
                     onClick={() =>
                        setDisplay((prev) => {
                           return { ...prev, theme: !prev.theme };
                        })
                     }
                  >
                     <Theme />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
