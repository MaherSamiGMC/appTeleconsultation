import React from 'react'
import { useState,useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
    Link
  } from "react-router-dom";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { updateUserProfile,deleteUser } from '../../Redux/Actions/userActions';
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'


const AppUpdateAssistant = ({userdetails,history}) => {

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userUpdateProfile)
    const {Loading,error,userInfo}=userRegister

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [tel, setTel] = useState('')
    const [sexe, setSexe] = useState('')
    useEffect(() => {
        setNom(userdetails && userdetails.assistant.lastName)
        setPrenom(userdetails && userdetails.assistant.firstName)
        setEmail(userdetails && userdetails.assistant.email)
        setDate(userdetails && userdetails.assistant.dateOfBirth)
        setTel(userdetails && userdetails.assistant.phoneNumber)
        setSexe(userdetails && userdetails.assistant.gender)
    }, [userdetails])
    const submitHandler=(e)=>{
        e.preventDefault()
        const updateAssistant={firstName:prenom,lastName:nom,phoneNumber:tel,email,dateOfBirth:date,gender:sexe,password:"123456",affiliateDoctor:userdetails._id}
        //DISPATCH UPDATE

        dispatch(updateUserProfile('assistant',userdetails.assistant._id,'authDoctor',updateAssistant))  
    }
    const deleteAssistant=()=>{
        dispatch(deleteUser('assistant',userdetails.assistant._id))
        history.push("/Dashboard/new-assistant")
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
                                    <h1 className="m-0">Modifier les données de l'assistant :</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                                    <li className="breadcrumb-item active">Modifier les données de l'assistant</li>
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
                                                {' '}Modifier Assistant :
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
                                                        <DateRangePicker
                                                            initialSettings={{
                                                            singleDatePicker: true,
                                                            showDropdowns: true,
                                                            startDate: '10/18/1984',
                                                            minYear: 1901,
                                                            }}
                                                            onApply={(e)=>setDate(e.target.value)}
                                                            value={date}
                                                        >
                                                            <input type="text"  className="form-control col-9" />
                                                        </DateRangePicker>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group controlId="formBasicTel">
                                                                <Form.Control 
                                                                value={tel} onChange={(e)=>setTel(e.target.value)}
                                                                type="text" placeholder="Numero télephonique" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                        <select  onChange={(e)=>setSexe(e.target.value)} className="form-select form-select-lg mb-2" value={sexe} aria-label="Default select example">
                                                                        <option selected>Assistant : </option>
                                                                        <option  value="Homme">Homme</option>
                                                                        <option  value="Femme">Femme</option>
                        
                                                        </select>
                                                        </Col>
                                                    </Row>

                                                    
                                                    <Button variant="primary" type="submit" className="adbtn" onClick={submitHandler}>
                                                        Modifier les données de l'assistant
                                                    </Button>
                                                    {'  '}
                                                    <Button variant="primary" type="submit" className="adbtn" onClick={deleteAssistant}>
                                                        Supprimer les données de l'assistant
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
}

export default AppUpdateAssistant
