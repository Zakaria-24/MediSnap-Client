import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/shared/LoadingSpinner";


const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Get invoice data from API by specific user email and display it here.
  const { data: invoiceData = [], isLoading } = useQuery({
    queryKey: ["invoice", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/invoice/${user?.email}`);
      return data;
    },
  });
  // console.log(invoiceData)

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="container mx-auto mt-16 sm:px-8">
      <div className="py-8">
        <h1 className="flex justify-center text-xl font-bold underline">
          Download your payment history
        </h1>
        {invoiceData?.map((invoice) => {
          return (
            <div
              className="px-28 border-2 border-green-300 bg-green-100 mt-6 mb-6"
              key={invoice?._id}
            >
              <div className="text-current justify-center mb-4">
                <div className="flex justify-center items-center">
                  <div>
                    <span>
                      <img
                        className="w-14 h-14"
                        src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div>
                    <span className="text-4xl text-green-700">M</span>edi
                    <span className=" text-green-600">Snap</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                Transaction Id:{" "}
                <span className="font-normal">{invoice?.transactionId}</span>
              </h3>
              <h2 className="text-xl font-semibold">
                Your Email:{" "}
                <span className="font-normal">{invoice?.buyerEmail}</span>
              </h2>
              <h2 className="text-xl font-semibold">
                Seller Email:{" "}
                <span className="font-normal">{invoice?.sellerEmail}</span>
              </h2>
              <p className="text-xl font-semibold">
                Date: <span className="font-normal">{invoice?.date}</span>
              </p>
              <p className="text-xl font-semibold">
                Amount: <span className="font-normal">{invoice?.price}$</span>
              </p>
              <p className="text-xl font-semibold">
                Item Name:{" "}
                <span className="font-normal">{invoice?.itemName}</span>
              </p>
              <p className="text-xl font-semibold">
                Status: <span className="font-normal">{invoice?.status}</span>
              </p>
              <a
                className="btn bg-green-600"
              >
                Download Invoice
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoice;
