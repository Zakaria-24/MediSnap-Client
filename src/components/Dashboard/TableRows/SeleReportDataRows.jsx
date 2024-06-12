/* eslint-disable react/prop-types */


const SeleReportDataRows = ({sele}) => {
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{sele?.itemName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{sele?.sellerEmail}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{sele?.buyerEmail}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${sele?.price}</p>
      </td>
    </tr>
    );
};

export default SeleReportDataRows;