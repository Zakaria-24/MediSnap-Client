import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Slide = ({ image, text }) => {
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
            {text}
          </h1>
          <br />
          <Link
              to="/AllQueries"
              href="#"
              rel="noreferrer noopener"
              className="  w-1/3 px-5 mt-4 lg:mt-0 py-3 rounded-md border  bg-sky-400 dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Follow All Queries
            </Link>
        </div>
      </div>


    </div>




  );
};

export default Slide;