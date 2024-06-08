import PropTypes from 'prop-types'
import DeleteModal from '../../Modal/DeleteModal'
import { useState } from 'react'
import UpdateCategoryModal from '../../Modal/UpdateCategoryModal'

const CategoryDataRows = ({ category, handleDelete, refetch }) => {
 // for delete modal
 const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

//   for update modal
const [isUpdateOpen, setIsUpdateOpen] = useState(false)
  const openUpdateModal = () => {
    setIsUpdateOpen(true);
  };
  const closeUpdateModal = () => {
    setIsUpdateOpen(false);
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
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{category?.medicineName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{category?.categoryName}</p>
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
          onClick={openUpdateModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update Modal */}
        <UpdateCategoryModal
          isOpen={isUpdateOpen}
        //   setIsUpdateOpen={setIsUpdateOpen}
          category={category}
          refetch={refetch}
          closeUpdateModal={closeUpdateModal}
        />
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