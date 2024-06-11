import useSelectedCarts from "../../hooks/useSelectedCarts";
// for payment purposes
import PaymentForm from "../../components/Form/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const [cartData] = useSelectedCarts();
  console.log(cartData);
  const totalPrice = cartData.reduce(
    (total, item) => total + item.perUnitPrice,
    0
  );
  console.log(totalPrice);

  return (
    <div className="container mx-auto px-4 sm:px-8 pt-16 ">
      {/* show specific seller medicines info  */}
      <div>
        <h1 className="text-2xl font-bold ">YOUR HAVE TO PAY...</h1>
        <p className="text-xl font-bold">
          Total item:{" "}
          <span className="text-3xl font-bold text-green-400">
            {cartData?.length}
          </span>
        </p>
        <p className="text-xl font-bold">
          Total cost:{" "}
          <span className="text-3xl font-bold text-green-400">
            {totalPrice}$
          </span>
        </p>
        {/* <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Discount
                    </th>
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
          </div> */}
      </div>
      <div className="divider divider-success">OR</div>
          <h1 className="text-2xl font-bold ">Payment From</h1>
      {/* payment input */}
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Checkout;
