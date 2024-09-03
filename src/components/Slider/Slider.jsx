import React, { useState } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import './Slider.scss'

const Slider = () => {

  const [currentSlider, setCurrentSlider] = useState(0)

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1328545/pexels-photo-1328545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
