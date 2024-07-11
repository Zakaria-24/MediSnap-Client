import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import ManageAdvertisementDataRows from "../../../components/Dashboard/TableRows/ManageAdvertisementDataRows";
import { Helmet } from 'react-helmet-async';


const Advertise = () => {
  const axiosSecure = useAxiosSecure();


  //   get All advertisement data
  const { data: manageAdvertisements = [], isLoading } = useQuery({
    queryKey: ["manageAdvertisements"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/manageAdvertisements`);
      // console.log(data);

      return data;
    },
  });

 

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
     <Helmet>
        <title>Advertisement management | for admin dashboard</title>
      </Helmet>
      {/* show advertisement info  */}
      <div className="container mx-auto px-4 sm:px-8 ">
        <div className="py-8">
          <h1 className="flex justify-center text-2xl font-bold underline">
            Manage Advertisement
          </h1>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-green-300">
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
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Seller Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Advertise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* advertisement row data */}
                  {manageAdvertisements.map((manageAdvertise) => (
                    <ManageAdvertisementDataRows
                      key={manageAdvertise._id}
                      manageAdvertise={manageAdvertise}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
