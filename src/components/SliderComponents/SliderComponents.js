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
      autoplaySpeed: 10000,
    };
    return (
      <div className="mt-5">
        <div className="w-[80%] mx-auto mb-7 ">
          <Slider {...settings}>
            <div>
              <img
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
                className="w-full rounded-2xl "
              ></img>
            </div>
            <div>
              <img
                className="w-full rounded-2xl"
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
              ></img>
            </div>
            <div>
              <img
                className="w-full rounded-2xl"
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
              ></img>
            </div>
            <div>
              <img
                className="w-full rounded-2xl"
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
              ></img>
            </div>
            <div>
              <img
                className="w-full rounded-2xl"
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
              ></img>
            </div>
            <div>
              <img
                className="w-full rounded-2xl"
                src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/a9/33/53/236eed712f3998d7b467541725d9bf06.png.webp"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
