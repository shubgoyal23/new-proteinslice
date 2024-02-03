import React, { useEffect, useState } from "react";
import imageservice from "../../service/appwrite/images";
import bucketService from "../../service/appwrite/storage";
import "./Corosal.css";
import { Link } from "react-router-dom";
function Corosal() {
   const [img, setImg] = useState([]);
   const [num, setnum] = useState(0);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      imageservice
         .getimages()
         .then((data) => {
            let imageData = data.documents.map((items) =>
               bucketService.getitem(items.data)
            );
            setImg(imageData);
         })
         .finally(() => setLoading(false));

      // const interval = setInterval(() => {
      //    changeimg(1)
      //  }, 3000);
      //  return () => clearInterval(interval);
   }, []);

   function changeimg(m) {
      setnum((prevNum) => {
         let currentimgnum = prevNum + m;
         if (currentimgnum >= img.length) {
            currentimgnum = 0;
         }
         if (currentimgnum < 0) {
            currentimgnum = img.length - 1;
         }
         return currentimgnum;
      });
   }

   return loading ? (
      <div className=" md:h-96 h-60 shadow rounded-md p-4 max-w-sm w-full mx-auto">
         <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
               <div className="h-2 bg-slate-200 rounded"></div>
               <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                     <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                     <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
               </div>
            </div>
         </div>
      </div>
   ) : (
      <div className="w-full relative">
         <div className="w-full object-cover overflow-hidden brightness-50">
            <img
               src={img[num]}
               alt=""
               className="w-full h-60 md:h-96 object-cover"
            />
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1
               id="h1-grad"
               className="lg:text-7xl md:text-6xl text-5xl font-bold"
            >
               ProteinSlice
            </h1>
            <p className="mt-1 lg:text-2xl md:text-xl text-sm">
               Premium Health and Nutrition Products for Peak Fitness and
               Vibrant Living
            </p>
            <Link to="/store">
               <button className="w-28 p-1.5 mt-4 text-center border rounded-lg border-white hover:border-amber-400 hover:text-amber-400">
                  Visit Store
               </button>
            </Link>
         </div>
         <button
            className="absolute top-1/2 left-4 text-xl text-white hover:bg-gray-700 w-7 rounded-full"
            onClick={() => changeimg(-1)}
         >
            <i className="fa-solid fa-chevron-left"></i>
         </button>
         <button
            className="absolute top-1/2 right-4 text-xl text-white hover:bg-gray-700 w-7 rounded-full"
            onClick={() => changeimg(1)}
         >
            <i className="fa-solid fa-chevron-right"></i>
         </button>
      </div>
   );
}

export default Corosal;
