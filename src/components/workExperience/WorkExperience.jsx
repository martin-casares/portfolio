import { useRef } from "react";
import "./workExperience.css";

import { ExperienceCard } from "./experienceCard/ExperienceCard";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WorkExperience = ({ title, data }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container" id="experience">
      <h5>{title}</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span>
            <MdArrowForwardIos />
          </span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="">
            <MdArrowBackIos />
          </span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
