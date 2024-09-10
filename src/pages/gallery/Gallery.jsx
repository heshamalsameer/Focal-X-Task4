import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import gallery1 from "../../assets/gallery/gallery-1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery-4.jpg";
import gallery5 from "../../assets/gallery/gallery-5.jpg";
import gallery6 from "../../assets/gallery/gallery-6.jpg";
import gallery7 from "../../assets/gallery/gallery-7.jpg";
import gallery8 from "../../assets/gallery/gallery-8.jpg";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <div className="swiper-container">
      <HeaderSection
        title="Gallery"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={-5}
        initialSlide={2}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" my-lg-4">
            <img className="slide-img w-75" src={gallery1} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery3} alt="image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery4} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery5} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery6} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery7} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img className="slide-img w-75" src={gallery8} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
