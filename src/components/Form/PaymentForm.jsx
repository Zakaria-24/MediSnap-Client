/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useSelectedCarts from "../../hooks/useSelectedCarts";
import "./PaymentForm.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

const PaymentForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // for show price in pay btn
  const [cartData ] = useSelectedCarts();
  // console.log(cartData);

// array to string (email) from cartData
  const arrayOfEmail= cartData.map((item) => item?.SellerEmail)
  const uniqueArrayOfEmail = [...new Set(arrayOfEmail)]
  // uniqueSellerEmail convert to string
  const sellerEmail = uniqueArrayOfEmail.toString()
  console.log(sellerEmail)

// array to string (itemName) from cartData
  const arrayOfItemName= cartData.map((item) => item?.itemName)
  const uniqueArrayOfItemName = [...new Set(arrayOfItemName)]
  // uniqueItemName convert to string
  const itemName = uniqueArrayOfItemName.toString()
  console.log(itemName)

  const totalPrice = cartData.reduce(
    (total, item) => total + item.perUnitPrice,
    0
  );
  // console.log(totalPrice);

  // for stripe payment
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState();
  const [paymentError, setPaymentError] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice && totalPrice > 1) {
      getClientSecret({ price: totalPrice });
    }
  }, []);

  //   get client secret
  const getClientSecret = async (totalPrice) => {
    const { data } = await axiosSecure.post(
      "/create-payment-intent",
      totalPrice
    );
    // return data
    console.log(data.clientSecret);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setPaymentProcessing(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
      setPaymentProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setPaymentError(confirmError.message);
      setPaymentProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      // 1. Create payment info object
      // now save the payment in the database
      const paymentInfo = {
        buyerEmail: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(), // utc date convert. use moment js to
        sellerEmail: sellerEmail,
        itemName: itemName,
        status: "pending",
      };
      console.log(paymentInfo);

// delete paymentInfo.transactionId

      try {
        // 2. save payment info in booking collection (db)
        const { data } = await axiosSecure.post("/payment", paymentInfo);
        console.log(data);

        // // 3. change room status to booked in db
        // await axiosSecure.patch(`/payment/status/${paymentInfo?.transactionId}`, {
        //   status: "paid",
        // })

        // // update ui
        // refetch()

        toast.success("Payment Successfully");
        navigate("/invoice");
      } catch (err) {
        console.log(err);
      }
    }

    setPaymentProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
          className=" btn bg-green-500 hover:bg-green-100 text-xl font-bold"
        >
          {paymentProcessing ? (
            <ImSpinner9 className="animate-spin" />
          ) : (
            `Pay ${totalPrice}$`
          )}
        </button>
      </form>
      {paymentError && <p className="text-red-600 ml-8">{paymentError}</p>}
    </>
  );
};

export default PaymentForm;
