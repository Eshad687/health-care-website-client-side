import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jpg'

const Banner = () => {

    return (
        <Carousel className="carousel" >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Improving Lives Together</h2>
                    <p>Highly Qualified Doctors At Your Doorsteps</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption >
                    <h2>Healthy does not mean expensive</h2>
                    <p>Modern Technology Within Your Grasp</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption >
                    <h2>Health is the first step to prosperity</h2>
                    <p>24 hours Services 7 Days Of The Week</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;