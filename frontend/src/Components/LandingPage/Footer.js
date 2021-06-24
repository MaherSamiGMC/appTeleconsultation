import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        
                    </Col>
                </Row>
            </Container>
            <div className='bas'>
                <Container>
                    <div className='text-center py-3'>Near Doctor n'est pas un service d'urgence. Pour toute urgence, appelez le 198 ou le 190.</div>
                </Container>
            </div>
            
        </footer>
    )
}

export default Footer
