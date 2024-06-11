import PropTypes from 'prop-types'
// import { useState } from 'react'
// import {
//   Description,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react'
// import DeleteModal from '../../Modal/DeleteModal'
// import UpdateMedicineModal from '../../Modal/UpdateMedicineModal'
// handleDelete,refetch
const MedicinesDataRows = ({ medicine }) => {
    console.log(medicine)
  // for delete modal
//   const [isOpen, setIsOpen] = useState(false)
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
//   const closeModal = () => {
//     setIsOpen(false)
//   }


  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={medicine?.photoURL}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          {/* <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{medicine?.itemName}</p>
          </div> */}
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{medicine?.itemName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{medicine?.category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{medicine?.shortDescription}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{medicine?.company}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${medicine?.perUnitPrice}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{medicine?.discountPercentage}%</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {medicine?.massUnit} <span>{medicine?.itemMassUnit}</span>
          </p>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
        //   onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
        Delete modal
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={medicine?._id}
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
        //   onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </button>
        Update Modal
        <UpdateMedicineModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          medicine={medicine}
          refetch={refetch}
        />
      </td> */}
    </tr>
  )
}

MedicinesDataRows.propTypes = {
  medicine: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default MedicinesDataRows;