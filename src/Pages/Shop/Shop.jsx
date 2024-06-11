
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from "../../hooks/useAxiosCommon";
import ShopMedicinesDataRows from '../../components/Dashboard/TableRows/ShopMedicinesDataRows';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const Shop = () => {
    const axiosCommon = useAxiosCommon()
  //   Fetch users Data
  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['medicines'],
    queryFn: async () => {
      const { data } = await axiosCommon(`/medicines`)
      return data
    },
  })

  

  if (isLoading) return <LoadingSpinner />
  return (
    <>
        {/* show all medicines info  */}
        <div className="container mx-auto px-4 sm:px-8">
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <div className="py-8">
            <h1 className='flex justify-center text-xl font-bold underline'>ALL MEDICINES INFO.</h1>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className='bg-green-100'>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Medicine Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Select
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* all medicines row data */}
                  {medicines.map((medicine) => (
                    <ShopMedicinesDataRows
                      key={medicine._id}
                      medicine={medicine}
                      // handleDelete={handleDelete}
                      refetch={refetch}
                      axiosCommon={axiosCommon}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop;