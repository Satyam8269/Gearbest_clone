import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

import Slider from "react-slick";

export default function Carousel() {
  const arr = ['https://gearbest.net/u_file/2302/09/photo/-2-f8a7.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920',
  'https://gearbest.net/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920',
  ]
  const renderSlides = () =>
    arr.map(num => (
      <div key={num} >
        <img style={{width:'912px'}} src={num} />
      </div>
    ));

  return (
    <div  style={{maxWidth:'912px'}} className="Appy">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

