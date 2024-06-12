/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { FcAcceptDatabase } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdminPaymentHistoryDataRows = ({ payment, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (updateStatus) => {
      const { data } = await axiosSecure.patch(
        `/paymentStatus/${payment?._id}`,
        updateStatus
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("status updated successfully!");
      refetch();
    },
  });

  //   status update handler
  const handleStatusUpdate = async () => {
    const updateStatus = {
      status: "paid",
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
          <p className="text-gray-900 whitespace-no-wrap">
            {payment?.transactionId}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{payment?.email}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{payment?.price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{payment?.date}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {payment?.status === "paid" ? (
              <>
                <span className="px-4 py-2 text-xl font-bold inline-flex leading-5 rounded-full bg-green-100 text-green-600">
                  {payment?.status}
                </span>
              </>
            ) : (
              <>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                  {payment?.status}
                </span>
              </>
            )}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         {
            payment?.status !== "paid" ? <><p
            aria-disabled
            onClick={handleStatusUpdate}
            className="text-gray-900 whitespace-no-wrap flex justify-center items-center text-3xl "
          >
            <FcAcceptDatabase />
          </p></>:<></>
         }
        </td>
      </tr>
    </>
  );
};

export default AdminPaymentHistoryDataRows;
