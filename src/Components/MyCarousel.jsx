import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./productCard_carousel.css";
export default function MyCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      className="main-slider"
    >
      <div>
        <img
          className="img"
          src="https://wallpaperaccess.com/full/292923.jpg"
        />
      </div>
      <div>
        <img
          className="img"
          src="https://wallpaperaccess.com/full/3497075.jpg"
        />
      </div>
      <div>
        <img
          className="img"
          src="https://w0.peakpx.com/wallpaper/406/827/HD-wallpaper-bulli-on-tour-car-bus-toys-van-trip-travel-wood-holiday-vw.jpg"
        />
      </div>
    </Carousel>
  );
}
