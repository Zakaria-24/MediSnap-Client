import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import ShopMedicineDetailsModal from "../../Modal/ShopMedicineDetailsModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../shared/LoadingSpinner";

// eslint-disable-next-line react/prop-types
const ShopMedicinesDataRows = ({ axiosCommon, medicine }) => {
    // console.log(medicine);
  // for delete modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //   get medicine data by specific id
  const { data: medicineDetails = {}, isLoading } = useQuery({
    queryKey: ["mediDetails", medicine?._id],
    queryFn: async () => {
      const { data } = await axiosCommon(`/mediDetails/${medicine?._id}`);
      return data;
    },
  });
    // console.log(medicineDetails);


    if(isLoading) return <LoadingSpinner/>
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={medicine?.photoURL}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          {/* <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{medicine?.itemName}</p>
          </div> */}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{medicine?.itemName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{medicine?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {medicine?.shortDescription}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{medicine?.company}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          ${medicine?.perUnitPrice}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {medicine?.discountPercentage}%
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          //   onClick={() => setIsOpen(true)}
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
        {/* Delete modal */}
        {/* <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={medicine?._id}
        /> */}
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
        <ShopMedicineDetailsModal
          isOpen={isOpen}
          closeModal={closeModal}
          medicine={medicine}
          medicineDetails={medicineDetails}
        />
      </td>
    </tr>
  );
};

ShopMedicinesDataRows.propTypes = {
  medicine: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default ShopMedicinesDataRows;
