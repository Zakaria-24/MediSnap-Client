// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper/modules";

import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import DiscountSlide from "./DiscountSlide";

const Discount = () => {
  const asiosCommon = useAxiosCommon();

  // get all medicines
  const { data: discount = [], isloading } = useQuery({
    queryKey: ["discount"],
    queryFn: async () => {
      const { data } = await asiosCommon.get("/discount");
      return data;
    },
  });
  console.log(discount);

  if (isloading) return <LoadingSpinner />;
  return (
    <div className=" container mx-auto px-4 lg:px-0 py-8">
    <h1 className='ml-8 flex justify-center text-3xl font-bold py-8'>DISCOUNT PRODUCTS</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* {} */}

        {discount.map((item) => {
          <SwiperSlide key={item?._id}>
            <DiscountSlide item={item} />
          </SwiperSlide>;
        })}

        {discount.map((discount) => (
          <SwiperSlide key={discount?._id}>
            <DiscountSlide
              image={discount?.photoURL}
              itemName={discount?.itemName}
              discountPercentage={discount?.discountPercentage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Discount;
