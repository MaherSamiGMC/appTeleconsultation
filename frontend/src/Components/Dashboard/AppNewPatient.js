import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Col, Row, Form, Button } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Register } from '../../Redux/Actions/userActions';
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'
import axios from 'axios'
import generator from "generate-password";

function AppNewPatient({userdetails}) {
    const userRegister = useSelector(state => state.userRegister)
    const {Loading,error,userInfo}=userRegister
    const dispatch = useDispatch()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [tel, setTel] = useState('')
    const [sexe, setSexe] = useState('')
    
    const submitHandler=async(e)=>{
        e.preventDefault()
        const newpatient={firstName:prenom,lastName:nom,phoneNumber:tel,email,dateOfBirth:date,gender:sexe,password:generator.generate({
          length: 10,
          numbers: true
      }),affiliateDoctor:userdetails._id}
        //DISPATCH REGISTER
        dispatch(Register('patient','newpatient',newpatient))
        await axios.post('http://localhost:5000/api/mail',{sender:newpatient.email,password:newpatient.password})


        
    }


    return (
        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Liste des patients :</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">Liste des patients</li>
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
                        {' '}Ajouter un nouveau patient :
                    </h3>

                  </div>{/* /.card-header */}
                  <div className="card-body">
                  <Row >
                    <Col  md={{ size: 9, offset: 1 }}>
                        <p className="mb-5"><strong>Rensigner ci-dessous les informations du nouveau patient à ajouter : </strong></p>
                        {error && <Message variant='danger'>"Merci de renseigner tous les champs correctement"</Message>}
                        {!error && userInfo && userInfo.newPatient && <Message variant='success'>"Patient ajouté avec succès"</Message>}
                        {Loading && <Loader/>}
                        <Form >
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicNom">
                                        <Form.Control 
                                        value={nom} onChange={(e)=>setNom(e.target.value)}
                                        type="text" placeholder="Nom du patient" required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPrenom">
                                        <Form.Control 
                                        value={prenom} onChange={(e)=>setPrenom(e.target.value)}
                                        type="text" placeholder="Prenom du patient" />
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
                                        type="text" placeholder="Votre Télephone" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <select  onChange={(e)=>setSexe(e.target.value)} className="form-select form-select-lg mb-2" value={sexe} aria-label="Default select example">
                                                <option selected>Le sexe du patient : </option>
                                                <option  value="Homme">Homme</option>
                                                <option  value="Femme">Femme</option>
 
                                </select>
                                </Col>
                            </Row>

                            

                            <Button variant="primary" type="submit" className="adbtn" onClick={submitHandler}>
                                Ajouter un patient
                            </Button>
                        </Form>


                    </Col>
                </Row>
                  </div>{/* /.card-body */}
                </div>

              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    )
}

export default AppNewPatient
