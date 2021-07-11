import React, {useState, useEffect} from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import {useDispatch,useSelector} from 'react-redux'
import { Register } from '../../Redux/Actions/userActions'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'


const InscriScreen = ({history}) => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [special, setSpecial] = useState('')
    const [tel, setTel] = useState('')
    const [adresse, setAdresse] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    // const redirect=location.search ? location.search.split('=')[1]:'/'
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {Loading,error,userInfo}=userLogin


    useEffect(()=>{
        if (userInfo){
            history.push('/Dashboard/')
        }
    },[userInfo,history])

    const submitHandler=(e)=>{
        e.preventDefault()
        //DISPATSH REGISTER
        if(password !== confirmpassword){
            setMessage('Les mots de passe que vous avez entrés ne sont pas identiques.')
        }
        else{
            dispatch(Register('doctor','newDoctor',{lastName:nom,firstName:prenom,email:email,medicalSpeciality:special,phoneNumber:tel,address:adresse,password:password,assistant:null}))
        }
        
    }



    return (
        <div className='inscri py-5'>
            <Container>
                <Row >
                    <Col  md={{ size: 6, offset: 6 }}>
                        <h1 className="titlepage">Bienvenue sur Near Doctor</h1>
                        <p className="mb-5"><strong>Ces informations resteront confidentielles</strong></p>
                        
                        {error && <Message variant='danger'>{error}</Message>}
                        {Loading && <Loader/>}
                        <Form >
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicNom">
                                        <Form.Control 
                                        value={nom} onChange={(e)=>setNom(e.target.value)}
                                        type="text" placeholder="votre Nom" required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPrenom">
                                        <Form.Control 
                                        value={prenom} onChange={(e)=>setPrenom(e.target.value)}
                                        type="text" placeholder="votre Prénom" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                                type="email" placeholder="Votre Email" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicSpecial">
                                        <Form.Control 
                                        value={special} onChange={(e)=>setSpecial(e.target.value)}
                                        type="text" placeholder="Votre Spécialité" />
                                    </Form.Group>  
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicTel">
                                        <Form.Control 
                                        value={tel} onChange={(e)=>setTel(e.target.value)}
                                        type="text" placeholder="Votre Télephone" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Control 
                                value={adresse} onChange={(e)=>setAdresse(e.target.value)}
                                as="textarea" rows={3} placeholder="Votre Adresse" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control 
                                value={password} onChange={(e)=>setPassword(e.target.value)}
                                type="password" placeholder="Mot de passe" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control 
                                value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}
                                type="password" placeholder="Confirmer Mot de passe" />
                            </Form.Group>

                            {message && <Message variant='danger'>{message}</Message>}

                            <Button variant="primary" type="submit" className="adbtn" onClick={submitHandler}>
                                Créer mon compte
                            </Button>
                        </Form>

                        {/* <Row className='py-3'>
                            <Col>
                                Have a Account ? {''}
                                <Link to={redirect ? `/connexion?redirect=${redirect}` : '/connexion'}>
                                    Connexion
                                </Link>
                            </Col>
                        </Row> */}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InscriScreen
