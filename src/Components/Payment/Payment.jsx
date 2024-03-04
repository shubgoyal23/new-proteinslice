import React from "react";
import { useForm } from "react-hook-form";

function Payment() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);
   return (
      <div className="">
         <div>
            <div className="min-h-screen p-6 flex items-center justify-center">
               <div className="container max-w-screen-lg mx-auto">
                  <div>
                     <h2 className="font-semibold text-xl text-gray-600 dark:text-gray-100">
                        Delivery Details
                     </h2>
                     <p className="text-gray-500 dark:text-gray-300 mb-6">
                        Please Fill Correct Details To get Faster Delicvery
                     </p>
                     <div className="bg-gray-300 dark:bg-gray-600 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                           <div className="text-gray-600 dark:text-gray-50">
                              <p className="font-medium text-lg">
                                 Personal Details
                              </p>
                              <p>Please fill out all the fields.</p>
                           </div>
                           <form className="lg:col-span-2" onSubmit={handleSubmit(onSubmit)}>
                              <div className="w-full">
                                 <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                       <label htmlFor="full_name">
                                          Full Name
                                       </label>
                                       {errors.name && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="text"
                                          name="full_name"
                                          id="full_name"
                                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          defaultValue=""
                                          {...register("name", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-5">
                                       <label htmlFor="email">
                                          Email Address
                                       </label>
                                       {errors.email && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="text"
                                          name="email"
                                          id="email"
                                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          defaultValue=""
                                          placeholder="email@domain.com"
                                          {...register("email", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-5">
                                       <label htmlFor="P_number">
                                          Phone Number
                                       </label>
                                       {errors.phone && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="number"
                                          name="phone"
                                          id="P_number"
                                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          defaultValue=""
                                          placeholder=""
                                          {...register("phone", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-3">
                                       <label htmlFor="address">
                                          Address / Street
                                       </label>
                                       {errors.address && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="text"
                                          name="address"
                                          id="address"
                                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          defaultValue=""
                                          placeholder=""
                                          {...register("address", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-2">
                                       <label htmlFor="city">City</label>
                                       {errors.exampleRequired && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="text"
                                          name="city"
                                          id="city"
                                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          defaultValue=""
                                          placeholder=""
                                          {...register("city", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-2">
                                       <label htmlFor="country">
                                          Country / region
                                       </label>
                                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                          {errors.country && <span className="text-xs text-red-600">This field is required</span>}
                                          <input
                                             name="country"
                                             id="country"
                                             placeholder="Country"
                                             className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                             defaultValue=""
                                             {...register("country", {required: true})}
                                          />
                                       </div>
                                    </div>
                                    <div className="md:col-span-2">
                                       <label htmlFor="state">
                                          State / province
                                       </label>
                                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                          {errors.state && <span className="text-xs text-red-600">This field is required</span>}
                                          <input
                                             name="state"
                                             id="state"
                                             placeholder="State"
                                             className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                             defaultValue=""
                                             {...register("state", {required: true})}
                                          />
                                       </div>
                                    </div>
                                    <div className="md:col-span-1">
                                       <label htmlFor="zipcode">Zipcode</label>
                                       {errors.zip && <span className="text-xs text-red-600">This field is required</span>}
                                       <input
                                          type="text"
                                          name="zipcode"
                                          id="zipcode"
                                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                          placeholder=""
                                          defaultValue=""
                                          {...register("zip", {required: true})}
                                       />
                                    </div>
                                    <div className="md:col-span-5">
                                       <div className="inline-flex items-center">
                                          {errors.tnc && <span className="text-xs text-red-600">This field is required</span>}
                                          <input
                                             type="checkbox"
                                             name="billing_same"
                                             id="billing_same"
                                             className="form-checkbox"
                                             {...register("tnc", {required: true})}
                                          />
                                          <label
                                             htmlFor="billing_same"
                                             className="ml-2 capitalize"
                                          >
                                             i Agree to terms and conditons
                                          </label>
                                       </div>
                                    </div>
                                    <div className="md:col-span-5 text-right">
                                       <div className="inline-flex items-end">
                                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                             Pay
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Payment;
