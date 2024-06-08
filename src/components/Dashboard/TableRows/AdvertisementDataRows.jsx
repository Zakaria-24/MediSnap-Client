import PropTypes from 'prop-types'

const AdvertisementDataRows = ({ addvertise }) => {
    console.log(addvertise)

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={addvertise?.photoURL}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          {/* <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{addvertise?.itemName}</p>
          </div> */}
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{addvertise?.medicineName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{addvertise?.description}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Status</p>
      </td>
    </tr>
  )
}

AdvertisementDataRows.propTypes = {
  addvertise: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default AdvertisementDataRows;