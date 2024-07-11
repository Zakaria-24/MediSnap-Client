import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import SeleReportDataRows from "../../../components/Dashboard/TableRows/SeleReportDataRows";
import { Helmet } from "react-helmet-async";

const SalesReport = () => {
    const axiosSecure = useAxiosSecure();

const { data: seles = [], isLoading} = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      const {data} = await axiosSecure('/seles');
      return data;
    },
  });
console.log(seles)


if(isLoading) return <LoadingSpinner/>;
    return (
      <>
      <Helmet>
        <title>Seles report | for admin dashboard</title>
      </Helmet>
        <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                <tr className="bg-green-300">
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
                      Seller Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                      Buyer Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* medicines row data */}
                  {seles.map((sele) => (
                    <SeleReportDataRows
                      key={sele._id}
                      sele={sele}                   />
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

export default SalesReport;