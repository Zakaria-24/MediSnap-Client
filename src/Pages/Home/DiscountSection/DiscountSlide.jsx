// eslint-disable-next-line react/prop-types
const DiscountSlide = ({ image, itemName, discountPercentage }) => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-60 md:h-[550px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
          <div className="text-center">
            <h1 className=" p-4 mt-6 md:text-3xl font-semibold text-white lg:text-4xl">
              {itemName}
            </h1>
            <p className="font-normal text-white">$ {discountPercentage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSlide;
