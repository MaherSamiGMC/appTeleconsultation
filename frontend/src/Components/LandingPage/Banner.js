import React from 'react'
import { Carousel } from 'react-bootstrap'
const Banner = () => {
    return (
        <>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/slide1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/slide1.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/slide1.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Banner
