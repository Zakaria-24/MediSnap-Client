import { FaDollarSign } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
// total paid revenue
  const { data: paidRevenue = [] } = useQuery({
    queryKey: ["adminPaidRevenue"],
    queryFn: async () => {
      const { data } = await axiosSecure("/adminPaidRevenue");
      return data;
    },
  });
  const paidPrice = paidRevenue.reduce(
    (total, item) => total + item.price,
    0
  );
//   console.log(paidPrice);
//   console.log(paidRevenue);


// total pending revenue
  const { data: pendingRevenue = [] } = useQuery({
    queryKey: ["adminPendingRevenue"],
    queryFn: async () => {
      const { data } = await axiosSecure("/adminPendingRevenue");
      return data;
    },
  });
  const pendingPrice = pendingRevenue.reduce(
    (total, item) => total + item.price,
    0
  );
//   console.log(pendingRevenue);
//   console.log(pendingPrice);

  return (
    <>
     <Helmet>
        <title>medi snap | admin home</title>
      </Helmet>
    <div className="mt-20">
      <div className="container mx-auto">
        {/* small cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 ">
          {/* Sales Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <FaDollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Paid Total
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {paidPrice}$
              </h4>
            </div>
          </div>
          {/* Total Bookings */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <BsFillCartPlusFill className="w-6 h-6 text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Pending Total
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                {pendingPrice}$
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default AdminHome;
