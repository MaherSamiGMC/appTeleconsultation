import React from 'react'
import { useState } from 'react';
import { Col, Card, Container,Button, Row, Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { addMessage } from '../../Redux/Actions/messageActions';
import Loader from '../LandingPage/Loader'
import Message from '../LandingPage/Message';

import moment from 'moment'
import 'moment/locale/fr';


const PortailPatient = ({userdetails}) => {
    const state = useSelector(state => state.messageAdd)
    const {loading,error,messagetInfo}=state
    const dispatch = useDispatch()
    const[message,setMessage] = useState('')
    const[image,setImage] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(addMessage(userdetails._id,{question:message,response:"",questionDate:new Date()}))
        setMessage('')
    }
    return (
        <>
        { userdetails == null ? <Loader /> : 
            <div className="profile mt-5">
            <Container>
                <div className="block__picture mb-5 px-3">
                    <Row>
                        <Col sm={6} className="block_family_member">
                            <Row>
                                <Col sm={3} className="block_dropzone" aria-disabled="false" style={{position:'relative'}}>
                                <div className="block_name_container" data-testid="select-profile-patient">
                                <div className="block_name_initial"><span className="block_name_initial__text">
                                    { userdetails.firstName.charAt(0).toUpperCase()}{ userdetails.lastName.charAt(0).toUpperCase()}</span></div>
                                </div>
                                <input className="form-control" accept="image/jpeg, image/jpeg, image/gif, image/png, image/tif, image/tiff, image/bmp, image/webp , image/hdr, image/cr2" type="file" multiple="" autocomplete="off"/>
                            </Col>
                                <Col sm={9}>
                                <h4 class="block_name">
                                { userdetails.firstName.toUpperCase()}<br/>{ userdetails.lastName.toUpperCase()}
                                </h4>
                            </Col>
                            </Row>
                        </Col>
                        
                        <Col sm={6}>
                            <p className="mb-1 line-icon" style={{display:'flex'}}><i class="fas fa-phone-square-alt"></i> { userdetails.phoneNumber}</p>
                            <p className="mb-1 line-icon" style={{display:'flex'}}><i class="fas fa-envelope-square"></i> { userdetails.email}</p>
                            <p className="mb-1 line-icon" style={{display:'flex'}}><i class="fas fa-calendar-alt"></i>{userdetails.dateOfBirth}</p>
                        </Col>
                    </Row>

                </div>
                </Container>
                <section className="outils">
                    <Container>
                        <Card className="rdv pb-4">
                            <Card.Header className="py-4 text-uppercase">Vos prochains rendez-vous</Card.Header>
                            
                                    <Card.Body>
                                    <Card.Title className="pl-3">Consultation vidéo avec <strong>DR</strong></Card.Title>
                                        <Card.Text className="pl-3">
                                            Pour changer votre rendez-vous contacter l'assistant<br/>
                                            
                                        </Card.Text>
                                        
                                        {userdetails.appointments.map(x => 
                                            <Row className="mx-2">
                                                <Col sm={8}>
                                                    <Card.Text>
                                                        <strong>Sujet : </strong> {x.title} 
                                                    </Card.Text>
                                                </Col>
                                                <Col sm={4} className="text-right">
                                                    <Card.Body>
                                                        
                                                        <Card.Text className="text-left date" style={{display:"inline-block"}}>{moment(x.endDate).format("MMM Do YY")}<br/>{moment(x.endDate).fromNow()}</Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        )}
                                        
                                    </Card.Body>
                        </Card>
                        
                        <Card className="rdv pb-4 message-doctor">
                            <Card.Header className="py-4 text-uppercase">Dossier médical</Card.Header>
                            <Row className="mx-2">
                                <Card.Body>
                                    <Card.Text>
                                        Partagez des documents médicaux
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <input type="file" class="form-control" id="customFile"  value={image} onChange={(e)=>setImage(e.target.value)}/>
                                    </Form.Group>
                                        <Button variant="primary" type="submit"  onClick={submitHandler}>Envoyer</Button>
                                    </Form>
                                </Card.Body>
                            </Row>
                        </Card>

                        <Card className="rdv pb-4 message-doctor">
                            <Row className="mx-2">
                                <Card.Header className="py-4 text-uppercase">contacter Votre Docteur</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">      
                                                <Form.Control as="textarea" rows={3} placeholder="Vous avez des questions contactez votre docteur"
                                                value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                            </Form.Group>
                                            <Button variant="primary" type="submit"  onClick={submitHandler}>Envoyer</Button>
                                            {!error && messagetInfo && <Message variant="success" > Message envoyé avec succes </Message>}
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                        </Card>
                        <Card className="rdv pb-4 message-doctor">
                            <Row className="mx-2">
                                <Card.Header className="py-4 text-uppercase">Question(s) en attente de reponse : </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {userdetails && userdetails.messages.filter(el=>el.response ==="").map(el=>
                                        <div>
                                            {/* <h5>Question(s) en attente de reponse :</h5> */}
                                            <div className="ques"><div>{el.question}<br/><span className="repDate">{moment(el.questionDate).format("MMM Do YYYY")}</span></div>

                                            {userdetails.gender === 'F'?  <div className="doc-image"><img src="https://images.emojiterra.com/google/android-11/512px/1f467.png" class="img-circle elevation-2" alt="User Image" /></div>
                                                        : <div className="doc-image"><img src="https://images.emojiterra.com/google/android-11/512px/1f9d1.png" class="img-circle elevation-2" alt="User Image" /></div>}
                                            </div>
                                            
                                        </div>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Row>

                            <Row className="mx-2">
                                <Card>

                                
                                    <Card.Header className="py-4 text-uppercase">Historique de vos questions :</Card.Header>
                                    <Card.Body>
                                        <Card.Text className="scroll style-1">
                                                {userdetails && userdetails.messages.filter(el=>el.response !=="").map(el=>
                                                <div>
                                                    {/* <p className="ques">{el.question}<br/> <span className="repDate">{moment(el.questionDate).format("MMM Do YYYY")}</span></p> */}
                                                    
                                                    
                                                    
                                                    <div className="ques">
                                                        <div>{el.question} <br/> <span className="repDate">{moment(el.questionDate).format("MMM Do YYYY")}</span></div>
                                                        {userdetails.gender === 'F'?  <div className="doc-image"><img src="https://images.emojiterra.com/google/android-11/512px/1f467.png" class="img-circle elevation-2" alt="User Image" /></div>
                                                        : <div className="doc-image"><img src="https://images.emojiterra.com/google/android-11/512px/1f9d1.png" class="img-circle elevation-2" alt="User Image" /></div>}
                                                    </div>

                                                    <div className="rep"><div className="doc-image"><img src="https://images.emojiterra.com/google/android-oreo/512px/1f468-1f3fb-2695.png" class="img-circle elevation-2" alt="User Image" /></div> <div>{el.response} <br/> <span className="repDate">{moment(el.ResponseDate).format("MMM Do YYYY")}</span></div></div>
                                                </div>)}
                                            
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Row>

                        </Card>
                    </Container>
                </section>
            </div>
        }
        </>
    )
}

export default PortailPatient
