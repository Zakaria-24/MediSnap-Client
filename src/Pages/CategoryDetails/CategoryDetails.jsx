import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import CategoryDetailsDataRow from "../../components/Dashboard/TableRows/CategoryDetailsDataRow";
// import CategoryRelatedCart from "./CategoryRelatedCart";
import CategoryCart from "../../components/CategoryCart/CategoryCart";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const CategoryDetails = () => {
  const axiosCommon = useAxiosCommon();

      // get categorydata for categoryDetails page
  const { id } = useParams();
  // console.log(id);
  const { data: categoryDetails = {} } = useQuery({
    queryKey: ["ctgDetails"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/ctgDetails/${id}`);
      return data;
    },
  });

  // console.log(categoryDetails?.categoryName);
  // console.log(id);


  // get selected Related deta for categoryDetails page
  
  const { data: categoryName = [], isLoading  } = useQuery({
    queryKey: ["categoryDetails", categoryDetails?.categoryName],
    queryFn: async () => {
      const { data } = await axiosCommon(
        `/categoryDetails/${categoryDetails?.categoryName}`
      );
      return data;
    },
  });

  // console.log(categoryName);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
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
                  {/* category Details data row data */}
                  <CategoryDetailsDataRow 
                  categoryDetails={categoryDetails}
                  axiosCommon={axiosCommon} 
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* related data card */}
        <h1 className=" text-3xl font-bold flex justify-center">
          See Related All Data{" "}
        </h1>

        <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoryName.map((category) => (
            <CategoryCart key={category._id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
