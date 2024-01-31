import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/themeSlice";
function Theme() {
   const dispatch = useDispatch();
   function themeswitch(theme) {
      if (
         theme === "dark" ||
         (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         document.documentElement.classList.add("dark");
         dispatch(changeTheme("dark"));
      } else {
         document.documentElement.classList.remove("dark");
         dispatch(changeTheme("light"));
      }
   }
   useEffect(() => {
      themeswitch("system");
   }, []);
   return (
      <>
         <button
            className="w-full flex justify-start items-center gap-2 font-semibold hover:bg-lime-100 hover:dark:bg-slate-500 pl-2 p-0.5"
            onClick={() => themeswitch("light")}
         >
            <i className="fa-regular fa-sun w-6"></i> Light{" "}
         </button>
         <button
            className="w-full flex justify-start items-center gap-2 font-semibold hover:bg-lime-100 hover:dark:bg-slate-500 pl-2 p-0.5"
            onClick={() => themeswitch("dark")}
         >
            <i className="fa-regular fa-moon w-6"></i> Dark
         </button>
         <button
            className="w-full flex justify-start items-center gap-2 font-semibold hover:bg-lime-100 hover:dark:bg-slate-500 pl-2 p-0.5"
            onClick={() => themeswitch("system")}
         >
            <i className="fa-solid fa-display w-6"></i> System
         </button>
      </>
   );
}

export default Theme;
