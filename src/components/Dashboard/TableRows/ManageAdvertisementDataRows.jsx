import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const ManageAdvertisementDataRows = ({ manageAdvertise }) => {
    // console.log(manageAdvertise?._id);
  const axiosSecure = useAxiosSecure();

  // update a advertisement status by patch mathod using useMutation
  const { mutateAsync } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axiosSecure.patch(
        `/advertisement/${manageAdvertise?._id}`,
        status
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("status updated successfully!");
    },
  });

  //   status update handler
  const AddStatusHandler = async () => {
    const updateStatus = {
      currentStatus: "success",
    };

    try {
      await mutateAsync(updateStatus);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  //   status update handler
  const RemoveStatusHandler = async () => {
    const updateStatus = {
      currentStatus: "rejected",
    };

    try {
      await mutateAsync(updateStatus);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };


  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={manageAdvertise?.photoURL}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {manageAdvertise?.medicineName}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {manageAdvertise?.description}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {manageAdvertise?.sellerEmail}
          </p>
        </td>
        <td className=" py-5 border-b border-gray-200 bg-white text-sm">
          <div className="inline-flex w-full justify-ceenter items-center  rounded-md cursor-pointer text-gray-800">
            <span 
            onClick={AddStatusHandler}
            // manageAdvertise?.currentSatus === "success" ? disabled
            className=' px-4 py-1 rounded-l-md bg-green-400'>
              Add
            </span>
            <span
            onClick={RemoveStatusHandler}
            className="px-4 py-1 rounded-r-md bg-rose-400">
              Remove
            </span>
          </div>

          {/* <ToggleBtn
            toggle={toggle}
            toggleHandler={toggleHandler}
            updateStatusHandler={updateStatusHandler}
          /> */}

          {/* {manageAdvertise?.currentStatus === "requested" && (
          <p className="text-yellow-500 whitespace-no-wrap">
            {manageAdvertise?.currentStatus}
          </p>
        )} */}
          {/* {manageAdvertise?.currentStatus === "success" ? (
          <>
            <p className="text-green-600 whitespace-no-wrap">
              {manageAdvertise?.currentStatus}
            </p>
          </>
        ) : (
          <>
          <p className="text-yellow-500 whitespace-no-wrap">
              {manageAdvertise?.currentStatus}
            </p>
          </>
        )} */}
        </td>
      </tr>
    </>
  );
};

ManageAdvertisementDataRows.propTypes = {
  manageAdvertise: PropTypes.object,
  toggleHandler: PropTypes.func,
  toggle: PropTypes.bool,
  axiosSecure: PropTypes.bool,
};

export default ManageAdvertisementDataRows;
