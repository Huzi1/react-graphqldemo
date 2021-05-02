import React from "react";
import Carousel from "react-bootstrap/Carousel";
import RNM1 from "../../assets/RNM1.png";
import RNM2 from "../../assets/RNM2.png";
import RNM3 from "../../assets/RNM3.jpeg";

const Slider: React.FC = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width={900}
            height={700}
            src={RNM1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Rick Sanchez</h3>
            <p>
              "The universe is basically an animal. It grazes on the ordinary.
              It creates infinite idiots just to eat them."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width={900}
            height={700}
            src={RNM2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Rick Sanchez</h3>
            <p>"To live is to risk it all"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width={900}
            height={700}
            src={RNM3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Rick Sanchez</h3>
            <p>"Sometimes Science Is More Art Than Science, Morty"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
