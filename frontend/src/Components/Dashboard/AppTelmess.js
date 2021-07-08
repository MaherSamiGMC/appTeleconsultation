import React from 'react'
import { useState } from 'react';
import {Accordion, Form, Button, Card, Row, Col} from 'react-bootstrap'
import { updateMessage } from '../../Redux/Actions/messageActions';
import { useDispatch } from 'react-redux';
import Loader from '../LandingPage/Loader'

const AppTelmess = ({userdetails}) => {
    const dispatch = useDispatch()
    const questions= userdetails && userdetails.patients.map(el=>el.messages.map(x=>{return {...x,firstName:el.firstName,lastName:el.lastName,email:el.email,phoneNumber:el.phoneNumber,id:el._id}})).flat().filter(el=>el.response==='')
    const[message,setMessage] = useState('')
    const submitHandler=(x)=>{
        dispatch(updateMessage(x.id,{...x,response:message,ResponseDate:new Date()}))
    }
    const [isOn, setIsOn] = useState(false);
    const Toggle =() =>{
        setIsOn(!isOn);
    }
    
    return (
        <>
        { userdetails == null ? 
        <Loader /> :
        <div className="content-wrapper list-patients consultation-textuelle">
             
            <div className="content-header px-3">
                <h4 className="mb-0">{ `Bonjour ${userdetails.firstName} ${userdetails.lastName}`}</h4>
                
            </div>
            <section className="content">
                <div className="container-fluid"> 

                    {questions.map( p =>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle eventKey="1" onClick={Toggle} className="toggle-arrow text-left">
                                    <Card.Header>
                                        <Row style={{alignItems :'center'}}>
                                            <Col md={11}>
                                            <div className="user-panel d-flex" style={{alignItems :'center'}}>
                                                <div className="image">
                                                    {p.gender == "Homme"? <img src="https://images.emojiterra.com/google/android-11/512px/1f64b-1f3fc-2642.png" alt="User Image" /> :
                                                    <img src="https://images.emojiterra.com/google/android-11/512px/1f64b-1f3fc-2640.png" alt="User Image" />
                                                    }
                                                </div>
                                                <div className="info">
                                                <p><strong>{p.firstName.toUpperCase()} {p.lastName.toUpperCase()}</strong><br/><i class="fas fa-envelope-square"></i> {p.email}<br/><i class="fas fa-phone-square-alt"></i> {p.phoneNumber}</p>
                                                </div>
                                            </div>
                                            </Col>
                                            <Col md={1}>  
                                                <Card.Text>
                                                    {isOn ? <i class="fas fa-arrow-circle-up"></i> : <i class="fas fa-arrow-circle-down"></i>}
                                                </Card.Text> 
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="px-3">
                                        <Card.Text>{p.question}</Card.Text>
                                        <Card.Text className="text-right">{p.questionDate.toString()}</Card.Text>
                                        <Card.Text>
                                            <Form>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Control as="textarea" rows={3} placeholder="Message"
                                                        value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit"  onClick={()=>submitHandler(p)}>Repondre </Button>
                                            </Form>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )}

                </div>
            </section>    
        </div>
        }
        </>
    )
}

export default AppTelmess
