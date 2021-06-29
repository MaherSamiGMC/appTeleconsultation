import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer className="bottom pt-5">
            <Container>
                <Row>
                    
                    <Col sm={6} className=' py-3'>
                    <h3 className="mb-4">Contactez-nous</h3>
                    <p className="card-text"><i className="fas fa-building pr-3"></i>3755 Commercial, Coin avec Sunny Boulevard, Tunis</p>
                    <p className="card-text"><i className="fas fa-phone pr-3"></i><a href="tel:%28305%29+555-4446"><font>(305) 555-4446</font></a></p>
                    <p className="card-text"><i className="far fa-envelope pr-3"></i><a href='mailto:neardoctor@gmail.com'>neardoctor@gmail.com</a></p>
                    </Col>
                    <Col sm={6} className='same mt-4'>
                        <p className="card-text"> <a href="/" target="_blank">À propos</a></p>
                        <p className="card-text"> <a href="/" target="_blank">Politique de confidentialité</a></p>
                        <p className="card-text"> <a href="/" target="_blank">Mentions légales</a></p>
                    </Col>
                </Row>
                <Row>
                    <div className="social_sidebar_internal">
                            <a href="/" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                            <a href="/" target="_blank"><i className="fab fa-tumblr"></i></a>
                            <a href="/" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a href="https:/" target="_blank"><i className="fab fa-vimeo-v"></i></a>
                    </div>
                </Row>
            </Container>
            <div className='bas mt-5'>
                <Container>
                    <div className='py-4'>Near Doctor n'est pas un service d'urgence. Pour toute urgence, appelez le 198 ou le 190.</div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
