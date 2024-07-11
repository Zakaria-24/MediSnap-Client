import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminPaymentHistoryDataRows from "../../../components/Dashboard/TableRows/AdminPaymentHistoryDataRows";
import { Helmet } from "react-helmet-async";

const Payment = () => {

    const axiosSecure = useAxiosSecure()


    // get all payment history by specific use by email
    const {data: adminPaymentHistory = [], refetch } = useQuery({
        queryKey: ['adminPaymentHistory' ],
        queryFn: async () => {
            const {data} = await axiosSecure('/adminPaymentHistory')
            return data
        }
    })
    
    console.log(adminPaymentHistory)

    return (
        <>
        <Helmet>
        <title>APayment management | for admin dashboard</title>
      </Helmet>
        {/* show payment info  */}
        <div className="container mx-auto px-4 sm:px-8 ">
          <div className="py-8">
            <h1 className="flex justify-center text-2xl font-bold underline">
              Payment History
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
                        TransactionID
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        User Email
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
                        Time/Date
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Payment Status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                      >
                        Update Status
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {/* advertisement row data */}
                    {adminPaymentHistory.map((payment) => (
                      <AdminPaymentHistoryDataRows
                        key={payment._id}
                        payment={payment}
                        refetch={refetch}
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

export default Payment;