import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
    Link
  } from "react-router-dom";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'


function AppNewPatient({userdetails}) {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [special, setSpecial] = useState('')
    const [tel, setTel] = useState('')
    const [adresse, setAdresse] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

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
