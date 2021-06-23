import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
const StaticScreen = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4} className='text-center'>
                        <span class="stat-icon">
                            <i class="fas fa-stethoscope"></i>
                        </span>
                        <h3>+ 400 000</h3>
                        <p>Téléconsultations</p>
                    </Col>

                    <Col sm={12} md={4} lg={4} className='text-center'>
                        <span class="stat-icon">
                            <i class="fas fa-user-md"></i>
                        </span>
                        <h3>+ 9000</h3>
                        <p>Professionnels de santé</p>
                    </Col>

                    <Col sm={12} md={4} lg={4} className='text-center'>
                        <span class="stat-icon">
                            <i class="fas fa-heartbeat"></i>
                        </span>
                        <h3>50</h3>
                        <p>Spécialités</p>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default StaticScreen
