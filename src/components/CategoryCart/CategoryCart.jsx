/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../shared/LoadingSpinner";

const CategoryCart = ({ category }) => {
  const { photoURL, categoryName } = category;

  const { categoryName: ctgName } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: specificCategories = [], isLoading } = useQuery({
    queryKey: ["specificCategories", ctgName],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/specificCategories/${ctgName}`);
      return data;
    },
  });

  console.log(specificCategories);

  if (isLoading) return <LoadingSpinner />;

  return (

    <>
      <div className=" ">
        <div className="lg:flex-row-reverse">
          <img
            src={photoURL}
            alt="category"
            className=" rounded-lg h-52 w-full"
          />
          <div className="bg-green-300 text-center py-4">
            <h1 className="text-xl font-bold">{categoryName}</h1>
            <Link
              to={`/categoryDetails/${category?._id}`}
              className="btn bg-green-100 hover:bg-green-400"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCart;
