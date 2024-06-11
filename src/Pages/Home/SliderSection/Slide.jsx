/* eslint-disable react/prop-types */
const Slide = ({ image, medicineName, description }) => {
  return (
    <div
      className="w-full bg-center bg-cover  h-[550px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className=" p-4 mt-6 text-3xl font-semibold text-white lg:text-4xl">
            {medicineName}
          </h1>
          <p className="font-normal text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
