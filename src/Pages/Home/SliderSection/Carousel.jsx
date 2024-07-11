// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";

const Carousel = () => {
const axiosCommon = useAxiosCommon()

  // get all the "currentStatus: "success"" advertisement for slide section
  const {data: sliderAdvertisement = [], isLoading } = useQuery({
    queryKey: ["sliderAdvertisement"],
    queryFn: async () => {
const {data} = await axiosCommon(`/sliderAdvertisement`)

return data
    }
  })
  // console.log(sliderAdvertisement)

  // by (filtering) all slideradvertisement to get just current status = "success" items
  const successSlider = sliderAdvertisement.filter(item => item.currentStatus === "success")
  // console.log(successSlider)

if(isLoading) return <LoadingSpinner/>;

  return (
    <div className="mt-14 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        successSlider.map((slider) => (
          <SwiperSlide
          key={slider?._id}>
          <Slide
            image={slider?.photoURL}
            medicineName={slider?.medicineName}
            description={slider?.description}
          />
        </SwiperSlide>
        ))
       }
       
        
      </Swiper>
    </div>
  );
};

export default Carousel;