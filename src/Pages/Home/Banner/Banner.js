import React from 'react';
import './Banner.css'
import { Carousel, FormControl, InputGroup } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/xHL4NJp/slider1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='banner-caption'>
      <h3>Plan your tour</h3>
      <p>A tour is an organized trip that people such as musicians, politicians, or theatre companies go on to several different places, stopping to meet people</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/HVP570m/slider4.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className='banner-caption'>
      <h3>we are best </h3>
      <p>A tour is an organized trip that people such as musicians, politicians, or theatre companies go on to several different places, stopping to meet people</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <img
      className="d-block w-100"
      src="https://i.ibb.co/47xwPMj/slider3.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;