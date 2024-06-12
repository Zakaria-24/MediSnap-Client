import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './../../../components/shared/LoadingSpinner';
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()
  //   Fetch users Data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`)
      return data
    },
  })

  console.log(users)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
<Helmet>
        <title>Manage user | for admin dashboard</title>
      </Helmet>
      <div className='container mx-auto px-4 sm:px-8'>
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <h1 className="text-2xl font-bold flex justify-center mb-3">USERS INFORMATION</h1>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr className="bg-green-100">
                  <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
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
  )
}

export default ManageUsers;