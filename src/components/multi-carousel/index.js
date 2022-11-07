import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss';

export default function MultiCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings} className="pd-align-center">
      <div>
        <h3>Nike</h3>
      </div>
      <div>
        <h3>Bank BCA</h3>
      </div>
      <div>
        <h3>Danamon</h3>
      </div>
      <div>
        <h3>Pandatech.io</h3>
      </div>
      <div>
        <h3>Tokopedia</h3>
      </div>
      <div>
        <h3>Paseo Tisu</h3>
      </div>
      <div>
        <h3>Magneto</h3>
      </div>
      <div>
        <h3>3 Seconds</h3>
      </div>
      <div>
        <h3>Mercedes</h3>
      </div>
    </Slider>
  );
}
