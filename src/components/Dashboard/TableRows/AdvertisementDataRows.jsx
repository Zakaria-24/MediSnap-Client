import PropTypes from "prop-types";

const AdvertisementDataRows = ({ advertise }) => {
  console.log(advertise);

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={advertise?.photoURL}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          {/* <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{advertise?.itemName}</p>
          </div> */}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {advertise?.medicineName}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {advertise?.description}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {/* {advertise?.currentStatus === "requested" && (
          <p className="text-yellow-500 whitespace-no-wrap">
            {advertise?.currentStatus}
          </p>
        )} */}
        {advertise?.currentStatus === "success" ? (
          <>
            <p className="text-green-600 whitespace-no-wrap">
              {advertise?.currentStatus}
            </p>
          </>
        ) : (
          <>
          <p className="text-yellow-500 whitespace-no-wrap">
              {advertise?.currentStatus}
            </p>
          </>
        )}
      </td>
    </tr>
  );
};

AdvertisementDataRows.propTypes = {
  advertise: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default AdvertisementDataRows;
