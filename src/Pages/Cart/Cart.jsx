import CartDataRows from "../../components/Dashboard/TableRows/CartDataRows";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "./../../hooks/useAuth";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useSelectedCarts from "../../hooks/useSelectedCarts";
import { Helmet } from "react-helmet-async";

const Cart = () => {

  const [cartData, refetch] = useSelectedCarts();
  console.log(cartData);
  const totalPrice = cartData.reduce(
    (total, item) => total + item.perUnitPrice,
    0
  );
  console.log(totalPrice);

  return (
    <>
    <Helmet>
        <title>Your all selected cart</title>
      </Helmet>
      {/* show specific seller medicines info  */}
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <h1 className="flex justify-center text-2xl font-bold ">
            YOUR SELECTED MEDICINES INFO.{" "}
            <div className="flex items-center gap-x-2">
              <span className="bg-green-600 px-2 py-1 rounded-xl text-white">
                <h1>{cartData?.length}</h1>
              </span>
              <span className="text-3xl font-bold text-green-400">
                {" "}
                {totalPrice}$
              </span>
              <span className="ml-2 text-3xl">
                <IoIosArrowRoundForward />
              </span>
              <span className="ml-2 text-2xl">
                <Link to="/checkout" className="text-3xl btn bg-green-600">
                  <IoBagCheckOutline />
                </Link>
              </span>
            </div>
          </h1>
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
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Description
                    </th>
                    {/* <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Company
                    </th> */}
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Price
                    </th>
                    {/* <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Discount
                    </th> */}
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Mass Unit
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* medicines row data */}

                  {cartData.map((cart) => (
                    <CartDataRows
                      key={cart._id}
                      cart={cart}
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

export default Cart;
