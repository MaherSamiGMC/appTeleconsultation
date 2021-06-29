import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Col, Card, Container,Button, Row } from 'react-bootstrap'

const PortailPatient = ({userdetails}) => {
    
    return (
        <>
            <div className="profile mt-5">
            <Container>
                <div className="block__picture mb-5">
                    
                        <div className="block_family_member text-center">
                            <div className="block_dropzone" aria-disabled="false" style={{position:'relative'}}>
                                <div className="block_name_container" data-testid="select-profile-patient">
                                    <div className="block_name_initial"><span className="block_name_initial__text">YA</span></div>
                                    <img src="../images/camera.png" alt="camera"/>
                                </div>

                                <input className="form-control" accept="image/jpeg, image/jpeg, image/gif, image/png, image/tif, image/tiff, image/bmp, image/webp , image/hdr, image/cr2" type="file" multiple="" autocomplete="off"/>
                            </div>
                        </div>
                        <h1 class="block_name text-center my-4">YOSRi ABDELLI</h1>
                    
                </div>
                </Container>
                <section className="outils">
                    <Container>
                        <Row>
                            <Col md={4} >
                                <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Dossier médical</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} >
                                <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Mes informations</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} >
                                <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>contacter Votre Docteur</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default PortailPatient
