import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import UserPaymentHistoryDataRows from '../../../components/Dashboard/TableRows/UserPaymentHistoryDataRows';

const UserPaymentHistory = () => {
const {user} = useAuth()
const axiosSecure = useAxiosSecure()

// get all payment history by specific use by email
const {data: UserPaymentHistory = [] } = useQuery({
    queryKey: ['userPaymentHistory', user?.email ],
    queryFn: async () => {
        const {data} = await axiosSecure(`/userPaymentHistory/${user?.email}`)
        return data
    }
})

console.log(UserPaymentHistory)


    return (
        <>
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
                    <tr className="bg-green-100">
                      
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
                        Payment Status
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {/* advertisement row data */}
                    {UserPaymentHistory.map((payment) => (
                      <UserPaymentHistoryDataRows
                        key={payment._id}
                        payment={payment}
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

export default UserPaymentHistory;