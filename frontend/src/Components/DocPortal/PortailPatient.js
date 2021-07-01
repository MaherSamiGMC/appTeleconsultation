import React from 'react'
import { useState } from 'react';
import { Col, Card, Container,Button, Row, Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'

const PortailPatient = ({userdetails}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const[message,setMessage] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        
        //DISPATCH REGISTER
    }

    return (
        <>
            <div className="profile mt-5">
            <Container>
                <div className="block__picture mb-5 px-3">
                    <Row>
                        <Col sm={6} className="block_family_member">
                            <Row>
                                <Col sm={3} className="block_dropzone" aria-disabled="false" style={{position:'relative'}}>
                                <div className="block_name_container" data-testid="select-profile-patient">
                                <div className="block_name_initial"><span className="block_name_initial__text">
                                    {userdetails && userdetails.firstName.charAt(0).toUpperCase()}{userdetails && userdetails.lastName.charAt(0).toUpperCase()}</span></div>
                                </div>
                                <input className="form-control" accept="image/jpeg, image/jpeg, image/gif, image/png, image/tif, image/tiff, image/bmp, image/webp , image/hdr, image/cr2" type="file" multiple="" autocomplete="off"/>
                            </Col>
                                <Col sm={9}>
                                <h4 class="block_name">
                                {userdetails && userdetails.firstName}<br/>{userdetails && userdetails.lastName}
                                </h4>
                            </Col>
                            </Row>
                        </Col>
                        
                        <Col sm={6}>
                            <p className="mb-1"><i class="fas fa-phone-square-alt"></i> {userdetails && userdetails.phoneNumber}</p>
                            <p className="mb-1"><i class="fas fa-envelope-square"></i> {userdetails && userdetails.email}</p>
                            <p>date de naissance : {userdetails && userdetails.dateOfBirth}</p>
                        </Col>
                    </Row>

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
                        
                        <Card className="rdv pb-4">
                            <Card.Header className="py-4 text-uppercase">Dossier médical</Card.Header>
                            <Row className="mx-2">
                                <Card.Body>
                                    <Card.Text>
                                        Partagez des documents médicaux
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>

                        <Card className="rdv pb-4">
                            <Row className="mx-2">
                                <Card.Header className="py-4 text-uppercase">contacter Votre Docteur</Card.Header>

                                <Card.Body>
                                    <Card.Text>
                                        <Form>
                                        
                                        <Form.Group controlId="formBasicNom">
                                            <Form.Control 
                                            value={email} onChange={(e)=>setEmail(e.target.value)}
                                            type="email" placeholder="Email du patient" required/>
                                        </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                
                                                <Form.Control as="textarea" rows={3} placeholder="Message"
                                                value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                            </Form.Group>
                                            <Button variant="primary" type="submit"  onClick={submitHandler}>Envoyer</Button>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default PortailPatient
