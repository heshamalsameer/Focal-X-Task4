import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const imgs = [
    "/imgs/hero-carousel/hero-carousel-1.jpg",
    "/imgs/hero-carousel/hero-carousel-2.jpg",
    "/imgs/hero-carousel/hero-carousel-3.jpg",
  ];
  return (
    <div className="position-relative">
      <Carousel data-bs-theme="dark" className=" overflow-hidden cars ">
        {imgs.map((ele, ind) => (
          <Carousel.Item key={ind}>
            <img className="d-block  object-fit-contain" src={ele} alt={ind} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="titleSlider container d-flex flex-column align-items-center justify-content-center text-center bg-whi w-75 position-absolute top-50 start-50 translate-middle p-3 ">
        <h2>Temporibus autem quibusdam</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
          nobis nisi molestias quos suscipit culpa excepturi assumenda fugiat,
          dicta omnis quidem id vitae vel, consequuntur deserunt repudiandae
          laudantium ipsum?
        </p>
        <button className="bg-maincolor border-0 text-white py-1 px-4 rounded-3">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Slider;
