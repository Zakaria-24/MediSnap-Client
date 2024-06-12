/* eslint-disable react/prop-types */


const SellerPaymentHistoryDataRows = ({payment}) => {
    return (
        <>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {payment?.transactionId}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {payment?.email}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {payment?.price}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {payment?.date}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
            {payment?.status === "paid" ? 
            <>
            <span className="px-4 py-2 text-xl font-bold inline-flex leading-5 rounded-full bg-green-100 text-green-600">
              {payment?.status}
            </span>
            </>:<>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
              {payment?.status}
            </span>
            </>}
            </p>
          </td>
        </tr>
      </>
    );
};

export default SellerPaymentHistoryDataRows;