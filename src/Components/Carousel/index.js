import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ImageCaraousel } from "../../Datas";

export default function index() {
  return (
    <Carousel
      autoPlay
      stopOnHover
      swipeable
      showThumbs={false}
      dynamicHeight
      infiniteLoop
      transitionTime={1000}

    >
      {ImageCaraousel.map((v, i) => (
        <div key={`images-${i}`}>
          <img src={v.url} />
        </div>
      ))}
    </Carousel>
  );
}
