/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import CategoryDetailsModal from "../../Modal/CategoryDetailsModal";


const CategoryDetailsDataRow = ({categoryDetails, axiosCommon }) => {
  const { user } = useAuth();
// for delete modal
const [isOpen, setIsOpen] = useState(false);
const openModal = () => {
  setIsOpen(true);
};
const closeModal = () => {
  setIsOpen(false);
};


// const {} = useMutation({
//   mutationKey:["asd"],
//   mutationFn: async () => {
//     const {data} = await axiosCommon.post('/')
//   }
// })
const { mutateAsync } = useMutation({
  mutationFn: async (categoryDetails) => {
    const { data } = await axiosCommon.post(`/selectedCart`, categoryDetails);
    return data;
  },
  onSuccess: () => {
    toast.success("Medicine Added to cart Successfully!");
  },
  onError: (err) => {
    console.log(err);
    toast.error("Something went wrong!");
  },
});

  // // select handler for selet a cart
  const selectHandler = (select) => {
    console.log(select);
    const {
      adminEmail,
      adminName,
      categoryName,
      medicineName,
      description,
      price,
      photoURL,
    } = select;

    const categoryDetails = {
      selecterEmail: user?.email,
      selecterName: user?.displayName,
     sellerEmail: adminEmail,
     sellerName: adminName,
     category: categoryName,
     itemName: medicineName,
     shortDescription: description,
     perUnitPrice: price,
     photoURL: photoURL
     }
    console.log(categoryDetails)

    try {
      mutateAsync(categoryDetails);
    } catch (err) {
      console.log(err);
      toast.err(err.message);
    }
  };

         




    return (
        <>
             <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={categoryDetails?.photoURL}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{categoryDetails?.medicineName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{categoryDetails?.categoryName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{categoryDetails?.description}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{categoryDetails?.price}$</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => selectHandler(categoryDetails)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-300 opacity-50 rounded-full"
          ></span>
          <span className="relative">
            <GrSelect />
          </span>
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-300 bg-white text-sm">
        <button
          onClick={openModal}
          //   onClick={() => setIsEditModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">
            <FaEye />
          </span>
        </button>
        {/* Shop Medicine Details Modal */}
        <CategoryDetailsModal
          isOpen={isOpen}
          closeModal={closeModal}
          categoryDetails={categoryDetails}
          // medicineDetails={medicineDetails}
        />
      </td>
    </tr>
        </>
    );
};

export default CategoryDetailsDataRow;