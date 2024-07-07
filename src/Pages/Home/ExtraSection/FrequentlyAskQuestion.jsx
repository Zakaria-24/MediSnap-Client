import Lottie from "lottie-react";
import FAQLottie from "./mi9BYI65lv.json";

const FrequentlyAskQuestion = () => {
    return (
        <section className="container mx-auto px-4 lg:px-0 py-10">
  <h1 className='ml-8 flex justify-center text-3xl font-bold py-8'>Frequently Asked Questions</h1>

<div className="md:flex justify-center items-center gap-4">
    <div className="flex-1">
        <Lottie animationData={FAQLottie} loop={true}/>
    </div>
    <div className="flex-1">
        <div className="mt-4 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">How Do I Create An Account?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>To create an account, click on the Join Us button in the top right corner of the homepage. Fill out the registration form with your details and submit. You will receive a confirmation email to verify your account.</p>
          </div>
        </div>

        <div className="mt-4 my-2 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">How Can I Place An Order?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>Browse our shop and add the desired medicines to your cart. Once you have selected all your items, go to your cart and click on the Checkout button. Follow the instructions to complete your purchase.</p>
          </div>
        </div>

        <div className="mt-4 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">What Payment Methods Do You Accept?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>We accept various payment methods, including credit/debit cards, PayPal, and Stripe. You can select your preferred payment method during the checkout process.</p>
          </div>
        </div>

        <div className="mt-4 my-2 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">How Can I Track My Order?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on the carriers website. You can also track your order from your account on our website.</p>
          </div>
        </div>

        <div className="mt-4 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">What Is Your Return Policy?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>We offer a 30-day return policy on unopened and undamaged products. To initiate a return, please contact our customer service team with your order details and reason for return. We will guide you through the return process.</p>
          </div>
        </div>

        <div className="mt-4 my-2 collapse collapse-arrow bg-[#FFFFF5]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">How Can I Become A Seller On Your Platform?</div>
          <hr />
          <div className="collapse-content bg-[#FFFFFF]">
            <p>To become a seller, click on the Join Us button and select Seller during the registration process. Provide the necessary business information and submit your application. Our team will review your application and get back to you with the next steps.</p>
          </div>
        </div>
    </div>
</div>

</section>

    );
};

export default FrequentlyAskQuestion;