import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-Data";
import styled from "styled-components";
import "./Banner.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <SlideBar className="slider">
      {/* arows is commented */}
      {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <Bgimg src={slide.image} alt="slide" className="image" />
                {/* <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="btn">Get Started</button>
                </div> */}
              </div>
            )}
          </div>
        );
      })}
    </SlideBar>
  );
};

const SlideBar = styled.div`
  border: 3px solid white;
  border-radius: 20px;
  
`
const Bgimg = styled.img`
`

export default Banner;