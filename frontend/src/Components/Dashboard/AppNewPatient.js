import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
    Link
  } from "react-router-dom";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';


function AppNewPatient({userdetails}) {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [tel, setTel] = useState('')
    const [sexe, setSexe] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        //DISPATSH REGISTER
        // if(password !== confirmpassword){
        //     setMessage('mot passe inccorret')
        // }
        // else{
        //     dispatch(Register(nom,prenom,email,special,tel,adresse,password))
        // }
        
    }


    return (
        <div className="content-wrapper">
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
                <div className="card">
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
                                    startDate: '10/18/1984',
                                    minYear: 1901,
                                    }}
                                    onApply={(e)=>setDate(e.target.value)}

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
                                <select  onChange={(e)=>setSexe(e.target.value)} className="form-select form-select-lg mb-2"  aria-label="Default select example">
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
