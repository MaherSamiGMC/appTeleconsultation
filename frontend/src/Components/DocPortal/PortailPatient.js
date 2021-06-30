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
                                {/* <div className="block_name_initial"><span className="block_name_initial__text">{userdetails.firstName.charAt(0).toUpperCase()}{userdetails.lastName.charAt(0).toUpperCase()}</span></div> */}
                                    <img src="../images/camera.png" alt="camera"/>
                                </div>

                                <input className="form-control" accept="image/jpeg, image/jpeg, image/gif, image/png, image/tif, image/tiff, image/bmp, image/webp , image/hdr, image/cr2" type="file" multiple="" autocomplete="off"/>
                            </div>
                        </div>
                        {/* <h1 class="block_name text-center my-4 text-uppercase">{userdetails.firstName} {userdetails.lastName}</h1> */}
                        <h1 class="block_name text-center my-4 text-uppercase">Yosri abdelli</h1>
                </div>
                </Container>
                <section className="outils">
                    <Container>
                        <Card className="rdv pb-4">
                            <Card.Header className="py-4 text-uppercase">Vos prochains rendez-vous</Card.Header>
                            <Row className="mx-2">
                                <Col sm={8}>
                                    <Card.Body>
                                    <Card.Title>Consultation vidéo avec <strong>DR</strong></Card.Title>

                                    {/* <Card.Title>Consultation vidéo avec <strong>DR {userdetails.firstName}</strong></Card.Title> */}
                                        <Card.Text>
                                        Pour changer votre rendez-vous contacter l'assistant
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col sm={4} className="text-right">
                                    <Card.Body>
                                        <Card.Text className="text-left" style={{display:"inline-block"}}>29 juin 2021<br/><strong>Dans 1 heure</strong></Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        
                        <Row className="mt-5">
                            <Col md={4} className="box">
                                <Card>
                                
                                    <Card.Body>
                                        <Card.Title>Dossier médical</Card.Title>
                                        <Card.Text>Some quick example text to build on the card</Card.Text>
                                        {/* <LinkContainer to={`/dossierMed/${userdetails._id}`}> */}
                                            <Button variant="primary" className="btn">Voir plus</Button>
                                        {/* </LinkContainer> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4} className="box">
                                <Card>
                                
                                    <Card.Body>
                                        <Card.Title>Mes informations</Card.Title>
                                        <Card.Text>Some quick example text to build on the card</Card.Text>
                                        {/* <LinkContainer to={`/informationPas/${userdetails._id}`} > */}
                                            <Button variant="primary" className="btn">Voir plus</Button>
                                        {/* </LinkContainer> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="box">
                                <Card>
                                
                                    <Card.Body>
                                        <Card.Title>contacter Votre Docteur</Card.Title>
                                        <Card.Text>Some quick example text to build on the card</Card.Text>
                                        {/* <LinkContainer to={`/contactDoc${userdetails._id}`} > */}
                                            <Button variant="primary" className="btn">Voir plus</Button>
                                        {/* </LinkContainer> */}
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
