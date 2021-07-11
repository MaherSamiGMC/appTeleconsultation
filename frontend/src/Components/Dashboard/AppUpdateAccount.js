import React from 'react'
import { useState,useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import {  Col, Row, Form, Button } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import { updateUserProfile } from '../../Redux/Actions/userActions';
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'
import { withRouter} from 'react-router-dom'


const AppUpdateAccount = withRouter(({userdetails}) => {

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userUpdateProfile)
    const {error,userInfo}=userRegister

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [adresse, setAdresse] = useState('')
    const [special, setSpecial] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        setNom(userdetails && userdetails.lastName)
        setPrenom(userdetails && userdetails.firstName)
        setEmail(userdetails && userdetails.email)
        setTel(userdetails && userdetails.phoneNumber)
        setAdresse(userdetails && userdetails.address)
        setSpecial(userdetails && userdetails.medicalSpeciality)

    }, [userdetails])
    const submitHandler=(e)=>{
        e.preventDefault()
        const updateAccount={firstName:prenom,lastName:nom,phoneNumber:tel,email,password:password,medicalSpeciality:special,address:adresse}
        if(password !== confirmpassword || password===''){
            setMessage('Les mots de passe que vous avez entrés ne sont pas identiques.')
        }
        else{
            dispatch(updateUserProfile('doctor',userdetails._id,'authDoctor',updateAccount))  

        }
    }

    return (
        <>
            { userdetails == null ? 
                <Loader /> :
                <div className="content-wrapper list-patients">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Modifier les paramètres du compte :</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                                    <li className="breadcrumb-item active">Modifier les paramètres du compte</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">

                            <div className="row">
                            {/* Left col */}
                                <section className="col-lg-12 connectedSortable">
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card ">
                                        <div className="card-header1">
                                            <h3 className="card-title">
                                            <i className="fas fa-users" />
                                                {' '}Modifier les paramètres du compte :
                                            </h3>

                                        </div>{/* /.card-header */}
                                        <div className="card-body">
                                        <Row >
                                            <Col  md={{ size: 9, offset: 1 }}>
                                            {error && <Message variant='danger'>"Merci de renseigner tous les champs correctement"</Message>}
                                            {!error && userInfo && <Message variant='success'>"Données modifiées avec succès"</Message>}
                                                <Form >
                                                    <Row>
                                                        <Col>
                                                            <Form.Group controlId="formBasicNom">
                                                                <Form.Control 
                                                                value={nom} onChange={(e)=>setNom(e.target.value)}
                                                                type="text" placeholder="Nom de l'assistant" required/>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group controlId="formBasicPrenom">
                                                                <Form.Control 
                                                                value={prenom} onChange={(e)=>setPrenom(e.target.value)}
                                                                type="text" placeholder="Prenom de l'assistant" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Control 
                                                        value={email} onChange={(e)=>setEmail(e.target.value)}
                                                        type="email" placeholder="Adresse Email" />
                                                    </Form.Group>
                                                    <Row>
                                                        <Col>
                                                        <Form.Group controlId="formBasicAdress">
                                                                <Form.Control 
                                                                value={adresse} onChange={(e)=>setAdresse(e.target.value)}
                                                                type="text" placeholder="Adresse du cabinet" required/>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group controlId="formBasicTel">
                                                                <Form.Control 
                                                                value={tel} onChange={(e)=>setTel(e.target.value)}
                                                                type="text" placeholder="Numero télephonique" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group controlId="formBasicSpec">
                                                                <Form.Control 
                                                                value={special} onChange={(e)=>setSpecial(e.target.value)}
                                                                type="text" placeholder="Specialité medicale" required/>
                                                            </Form.Group>
                                            
                                                        </Col>
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
                                                    </Row>
                                                    {message && <Message variant='danger'>{message}</Message>}
                                                    
                                                    <Button variant="primary" type="submit" className="adbtn" onClick={submitHandler}>
                                                        Modifier les données du compte
                                                    </Button>

                                                </Form>


                                            </Col>
                                        </Row>
                                        </div>{/* /.card-body */}
                                    </div>
                                </section>
                            </div>
                            {/* /.row (main row) */}
                        </div>{/* /.container-fluid */}
                    </section>
                </div> 
            }
        </>
    )
})

export default AppUpdateAccount
