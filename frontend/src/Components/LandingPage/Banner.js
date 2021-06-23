import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
const Banner = () => {
    return (
        <>
            <div className='slider'>
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
                        src="../images/slide2.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='slogan'>
                    <Container>
                    <p>Une solution de téléconsultation <br/><span className='change'>créée par des médecins</span></p>
                    </Container>
                    
                </div> 
            </div>
        </>
    )
}

export default Banner
