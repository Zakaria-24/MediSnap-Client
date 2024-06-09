// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Carousel = () => {
  const bgimg1 = "https://i.ibb.co/3hQKs6s/OIP-1.jpg";
  const bgimg2 = "https://i.ibb.co/j50wG4P/2.jpg";
  const bgimg3 = "https://i.ibb.co/bvPb5Zd/pexels-marcelochagas-2183773.jpg";
  return (
    <div className="container px-6 mt-0 mx-auto">
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
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Expand Your Horizons. Find Better Alternatives for Every Need."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Unlock Endless Possibilities. Discover Better Alternatives Today."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Capture the Moment. Explore Innovative Camera Alternatives."
          />
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
};

export default Carousel;