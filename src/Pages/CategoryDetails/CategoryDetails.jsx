import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";


const CategoryDetails = () => {
  const axiosCommon = useAxiosCommon()

const {id} = useParams()
console.log(id)
const { data: categoryDetails = {} } = useQuery({
  queryKey: ['ctgDetails'],
  queryFn: async () => {
    const {data} = await axiosCommon(`/ctgDetails/${id}`)
    return data
  }
})



console.log(categoryDetails?.categoryName)

console.log(id)
const { data: categoryName = [] } = useQuery({
  queryKey: ['categoryDetails', categoryDetails?.categoryName],
  queryFn: async () => {
    const {data} = await axiosCommon(`/categoryDetails/${categoryDetails?.categoryName}`)
    return data
  }
})

console.log(categoryName)


    return (
        <div>
             {/* show category info  */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-green-100">
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Medicine Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Category Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Price
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


                  {/* medicines row data */}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryDetails;