import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Corosal, InfoCard } from "../index";
import productservice from "../../service/appwrite/products";

function Home() {
   const [topProducts, setTopProducts] = useState([]);
   function handleClick(name) {
      productservice
         .getproducts(name)
         .then((data) => setTopProducts(data.documents));
   }
   useEffect(()=>{
      handleClick("Protein Supplements")
   },[])
   return (
      <div>
         <Corosal />
         <div className="flex w-full flex-wrap justify-center mt-16 md:mt-24">
            {[
               {
                  title: "Free Shipping",
                  img: "fa-truck",
                  desc: "Free on order over $100",
               },
               {
                  title: "Security Payment",
                  img: "fa-credit-card",
                  desc: "100% security payment",
               },
               {
                  title: "30 Day Return",
                  img: "fa-rotate-left",
                  desc: "30 day money back",
               },
               {
                  title: "24/7 Support",
                  img: "fa-phone",
                  desc: "Support every time fast",
               },
            ].map((item) => (
               <InfoCard key={uuidv4()} {...item} />
            ))}
         </div>

         <div>
            <div className="flex justify-between flex-col md:px-16 px-4 mt-12">
               <h1 className="text-lg md:text-5xl mb-4 text-center">
                  Our Top Products
               </h1>
               <div className="flex flex-wrap justify-center my-4 md:gap-6">
                  {[
                     "Protein Supplements",
                     "Beverages",
                     "Supplements",
                     "Grains",
                     "Snacks",
                  ].map((item) => (
                     <button
                        className="px-4 py-2 m-2 hover:bg-amber-400 dark:hover:bg-amber-400 bg-gray-300 dark:bg-gray-700 rounded-lg"
                        onClick={() => handleClick(item)}
                        key={uuidv4()}
                     >
                        {item}
                     </button>
                  ))}
               </div>
               <div className="flex flex-wrap justify-evenly md:px-6 px-4">
                  {topProducts.map((item) => (
                     <Card {...item} key={uuidv4()} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
