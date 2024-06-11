import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { GrSelect } from "react-icons/gr";
import ShopMedicineDetailsModal from "../../Modal/ShopMedicineDetailsModal";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const ShopMedicinesDataRows = ({ medicine, axiosCommon }) => {
  const { user } = useAuth();

  // for delete modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // // // Post Request for medicine
  const { mutateAsync } = useMutation({
    mutationFn: async (selectedData) => {
      const { data } = await axiosCommon.post(`/selectedCart`, selectedData);
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
      category,
      company,
      discountPercentage,
      genericName,
      itemMassUnit,
      itemName,
      massUnit,
      perUnitPrice,
      shortDescription,
      photoURL,
    } = select;

    const selectedData = {
      selecterEmail: user?.email,
      selecterName: user?.displayName,
      category,
      company,
      discountPercentage,
      genericName,
      itemMassUnit,
      itemName,
      massUnit,
      perUnitPrice,
      shortDescription,
      photoURL,
    };
    console.log(selectedData)

    try {
      mutateAsync(selectedData);
    } catch (err) {
      console.log(err);
      toast.err(err.message);
    }
  };

  // if (isLoading) return <LoadingSpinner />;
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
          onClick={() => selectHandler(medicine)}
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
        <ShopMedicineDetailsModal
          isOpen={isOpen}
          closeModal={closeModal}
          medicine={medicine}
          // medicineDetails={medicineDetails}
        />
      </td>
    </tr>
  );
};

ShopMedicinesDataRows.propTypes = {
  medicine: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
  axiosCommon: PropTypes.object,
  // selectHandler: PropTypes.func,
};

export default ShopMedicinesDataRows;
