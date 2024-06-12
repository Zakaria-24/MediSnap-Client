/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateMassUnitModal from "../../Modal/UpdateMassUnitModal";
import { RiExpandUpDownFill } from "react-icons/ri";
import { FcDeleteRow } from "react-icons/fc";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import DeleteModal from "../../Modal/DeleteModal";

const CartDataRows = ({ cart, refetch }) => {
  const axiosSecure = useAxiosSecure()
  // For Modal
  const [isMassOpen, setIsMassOpen] = useState(false);
  const openMassModal = () => {
    setIsMassOpen(true);
  };
  const closeMassModal = () => {
    setIsMassOpen(false);
  };


//   for delete modal
const [isOpen, setIsOpen] = useState(false)
const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };


  //   delete category
  const { mutateAsync: category } = useMutation({
    mutationKey: ["cart", cart?._id],
    mutationFn: async () => {
      const { data } = await axiosSecure.delete(`/cart/${cart?._id}`)
      return data
    },
    onSuccess: data => {
      console.log(data)
      toast.success('Successfully deleted.')
      refetch()
      // console.log("delete")
    },
  })

  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
      await category(id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={cart?.photoURL}
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
          <p className="text-gray-900 whitespace-no-wrap">{cart?.itemName}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{cart?.category}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {cart?.shortDescription}
          </p>
        </td>
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{cart?.company}</p>
        </td> */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            ${cart?.perUnitPrice}
          </p>
        </td>
        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {cart?.discountPercentage}%
          </p>
        </td> */}
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={openMassModal}
            className="whitespace-no-wrap text-green-600 font-bold cursor-text"
          >
            <div className="flex items-center">
              {cart?.massUnit} <span>{cart?.itemMassUnit}</span>
              <span className="text-2xl">

                <RiExpandUpDownFill />
              </span>
            </div>
          </button>

          {/* Change Quantity Modal */}
          <UpdateMassUnitModal
            isMassOpen={isMassOpen}
            closeMassModal={closeMassModal}
            cart={cart}
            refetch={refetch}
            // medicineDetails={medicineDetails}
          />
        </td>

        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>
            <FcDeleteRow/> 
          </span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={cart?._id}
        />
      </td>
      </tr>
    </>
  );
};

export default CartDataRows;
