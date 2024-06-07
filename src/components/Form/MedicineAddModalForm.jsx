// import toast from "react-hot-toast";
// import { imageUpload } from "../../api/utils/index";

// import { useForm } from "react-hook-form";

// const MedicineAddModalForm = () => {
//   // const axiosCommon = useAxiosCommon()

//   // const { mutateAsync } = useMutation({
//   //   mutationFn: async userData => {
//   //     const { data } = await axiosCommon.post(`/user`, userData, )
//   //     return data
//   //   },
//   //   onSuccess: () => {
//   //     toast.success('user Added Successfully!')
//   //   },
//   //   onError: (err) => {
//   //     console.log(err)
//   //     toast.error('Something went wrong!')
//   //   }
//   // })

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const {
//       itemName,
//       genericName,
//       shortDescription,
//       category,
//       company,
//       itemMassUnit,
//       perUnitPrice,
//       discountPercentage,
//       photoURL,
//     } = data;
//     //   console.log(role);

//       const medicineData= {
//         itemName,
//         genericName,
//         shortDescription,
//         category,
//         company,
//         itemMassUnit,
//         perUnitPrice,
//         discountPercentage,
//         photoURL,
//       }
//       console.log(medicineData)

//     try {
//       // 1. Upload image and get image url
//       const image_url = await imageUpload(photoURL[0]);
//       console.log(image_url);

//       //   Post request to server
//       //   await mutateAsync(userData)
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message);
//     }
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate=""
//         action=""
//         className="space-y-8"
//       >
//         <div className="space-y-4">
//           <div className="space-y-2">
//             {/* <label className="block text-sm">Item Name</label> */}
//             <input
//               type="text"
//               name="itemName"
//               placeholder="Item Name"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("itemName", { required: true })}
//             />
//             {errors.itemName && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>
//           <div className="space-y-2">
//             {/* <label className="block text-sm">Generic Name</label> */}
//             <input
//               type="text"
//               name="genericName"
//               placeholder="Generic Name"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("genericName", { required: true })}
//             />
//             {errors.genericName && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>
//           <div className="space-y-2">
//             {/* <label className="block text-sm">Short Description</label> */}
//             <input
//               type="text"
//               name="shortDescription"
//               placeholder="Short Description"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("shortDescription", { required: true })}
//             />
//             {errors.shortDescription && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>
//           <div>
//             <select
//               name="category"
//               {...register("category", { required: true })}
//               className="select select-success w-full"
//             >
//               <option disabled selected>
//                 Select Category
//               </option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//             </select>
//           </div>
//           <div>
//             <select
//               name="company"
//               {...register("company", { required: true })}
//               className="select select-success w-full"
//             >
//               <option disabled selected>
//                 Select Company
//               </option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//               <option value="User">User</option>
//               <option value="Seller">Seller</option>
//             </select>
//           </div>
//           <div>
//             <select
//               name="itemMassUnit"
//               {...register("itemMassUnit", { required: true })}
//               className="select select-success w-full "
//             >
//               <option disabled selected>
//                 Select Mass Unit
//               </option>
//               <option value="User">Mg</option>
//               <option value="Seller">ML</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             {/* <label className="block text-sm">Per Unit Price</label> */}
//             <input
//               type="number"
//               name="perUnitPrice"
//               placeholder="Per Unit Price"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("perUnitPrice", { required: true })}
//             />
//             {errors.perUnitPrice && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>
//           <div className="space-y-2">
//             {/* <label className="block text-sm">Per Unit Price</label> */}
//             <input
//               type="number"
//               name="discountPercentage"
//               placeholder="Discount Percentage"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("discountPercentage", { required: true })}
//             />
//             {errors.discountPercentage && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm">Image</label>
//             <input
//               type="file"
//               name="photoURL"
//               placeholder="Upload Image"
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
//               {...register("photoURL", { required: true })}
//             />
//             {errors.photoURL && (
//               <span className="text-red-400">This field is required</span>
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default MedicineAddModalForm;
