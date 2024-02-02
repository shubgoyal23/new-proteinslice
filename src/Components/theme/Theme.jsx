import React, { useEffect, useState } from "react";

function Theme() {
   const [mode, setMode] = useState("");
   const [display, setDisplay] = useState(false);
   function themeswitch(theme) {
      if (
         theme === "dark" ||
         (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         document.documentElement.classList.add("dark");
         setMode("dark")
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
         setMode("light")
      }
   }
   useEffect(() => {
      let theme = localStorage.getItem("theme");
      if (theme) {
         themeswitch(theme);
      } else {
         themeswitch("system");
      }
   }, []);
   return (
      <>
         <div className="block md:h-20 md:pt-4">
            <button className="text-2xl font-medium hover:text-amber-400 text-lime-500 py-2 px-2" onClick={() =>
                     setDisplay((prev) => {
                        return !prev;
                     })
                  }>
               <i
                  className={`fa-regular fa-${
                     mode === "dark" ? "moon" : "sun"
                  }`}
                  
               /> <span className="md:hidden"> Theme</span>
            </button>
            <div
               className={`h-30 flex flex-col justify-center items-center rounded-lg border-2 border-slate-300 border-solid pt-1 bg-gray-200 dark:bg-gray-900 text-lime-400 text-xl ${
                  display ? "block" : "hidden"
               }`}
               onClick={() =>
                  setDisplay((prev) => {
                     return !prev;
                  })
               }
            >
               <button
                  className="w-28 flex justify-start items-center gap-2 font-semibold hover:text-amber-400 pl-2 p-0.5"
                  onClick={() => themeswitch("light")}
               >
                  <i className="fa-regular fa-sun w-6"></i> Light{" "}
               </button>
               <button
                  className="w-28 flex justify-start items-center gap-2 font-semibold hover:text-amber-400 pl-2 p-0.5"
                  onClick={() => themeswitch("dark")}
               >
                  <i className="fa-regular fa-moon w-6"></i> Dark
               </button>
               <button
                  className="w-28 flex justify-start items-center gap-2 font-semibold hover:text-amber-400 pl-2 p-0.5"
                  onClick={() => themeswitch("system")}
               >
                  <i className="fa-solid fa-display w-6"></i> System
               </button>
            </div>
         </div>
      </>
   );
}

export default Theme;
