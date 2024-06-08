import PropTypes from 'prop-types'
import DeleteModal from '../../Modal/DeleteModal'
import { useState } from 'react'
// import { useState } from 'react'
// import {
//   Description,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react'
// import DeleteModal from '../../Modal/DeleteModal'
// import UpdateCategoryModal from '../../Modal/UpdateCategoryModal'
// handleDelete,refetch
const CategoryDataRows = ({ category, handleDelete }) => {
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
 // for delete modal
 const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={category?.photoURL}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          {/* <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{category?.itemName}</p>
          </div> */}
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{category?.category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{category?.medicineName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{category?.description}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${category?.price}</p>
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
          <span className='relative'>Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={category?._id}
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
        {/* Update Modal */}
        {/* <UpdatecategoryModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          category={category}
          refetch={refetch}
        /> */}
      </td>
    </tr>
  )
}

CategoryDataRows.propTypes = {
  category: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default CategoryDataRows;