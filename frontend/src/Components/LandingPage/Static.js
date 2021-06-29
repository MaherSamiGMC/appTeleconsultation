import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor-v2'
const StaticScreen = () => {
    return (
        <>
            <VisibilitySensor>
                {({isVisible}) =>
                    <section className="static text-center">
                        <Container>
                            <Row>
                                <Col sm={12} md={4} lg={4} className='text-center'>
                                    <span class="stat-icon">
                                        <i class="fas fa-stethoscope"></i>
                                    </span>
                                    <h3>+ <CountUp end={400000} duration={5} /> </h3>
                                    <p>Téléconsultations</p>
                                </Col>

                                <Col sm={12} md={4} lg={4} className='text-center'>
                                    <span class="stat-icon">
                                        <i class="fas fa-user-md"></i>
                                    </span>
                                    <h3>+ <CountUp end={9000} duration={5} /></h3>
                                    <p>Professionnels de santé</p>
                                </Col>

                                <Col sm={12} md={4} lg={4} className='text-center'>
                                    <span class="stat-icon">
                                        <i class="fas fa-heartbeat"></i>
                                    </span>
                                    <h3><CountUp end={50} duration={5} /></h3>
                                    <p>Spécialités</p>
                                </Col>
                            </Row>
                        </Container> 
                    </section>
                }
            </VisibilitySensor>
        </>
    )
}

export default StaticScreen
