import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
    };
    return (
      <div className="mt-5 ">
        <div className="w-[90%] mx-auto mb-7 ">
          <Slider {...settings} autoplay={true}>
            <div>
              <img
                src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                className="w-full rounded-2xl h-[400px]"
                alt="hinh"
              ></img>
            </div>
            <div>
              <img
                alt="hinh"
                className="w-full rounded-2xl h-[400px]"
                src="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
              ></img>
            </div>
            <div>
              <img
                alt="hinh"
                className="w-full rounded-2xl h-[400px]"
                src="	https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
              ></img>
            </div>

            <div>
              <img
                alt="hinh"
                className="w-full rounded-2xl h-[400px]"
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg	"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
