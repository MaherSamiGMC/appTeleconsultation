import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {  Col, Row, Form, Button } from 'react-bootstrap'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Register } from '../../Redux/Actions/userActions';
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../Components/LandingPage/Message'
import Loader from '../../Components/LandingPage/Loader'
import { withRouter} from 'react-router-dom'
import generator from "generate-password";
import axios from 'axios'


const AppNewAssistant=withRouter(({userdetails,history}) => {
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
        const newassistant={firstName:prenom,lastName:nom,phoneNumber:tel,email,dateOfBirth:date,gender:sexe,password:generator.generate({
          length: 10,
          numbers: true
      }),affiliateDoctor:userdetails._id}
        //DISPATCH REGISTER

        dispatch(Register('assistant','newAssistant',newassistant))
        await axios.post('http://localhost:5000/api/mail',{sender:newassistant.email,password:newassistant.password})

        history.push('/Dashboard')
         window.location.reload()  
    }


    return (
        <div className="content-wrapper list-patients">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Nouveau Assistant :</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                  <li className="breadcrumb-item active">Nouveau Assistant</li>
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
                        {' '}Ajouter un nouveau Assistant :
                    </h3>

                  </div>{/* /.card-header */}
                  <div className="card-body">
                  <Row >
                    <Col  md={{ size: 9, offset: 1 }}>
                        <p className="mb-5"><strong>Rensigner ci-dessous les informations du nouveau Assistant ?? ajouter : </strong></p>
                        {error && <Message variant='danger'>"Merci de renseigner tous les champs correctement"</Message>}
                        {!error && userInfo && userInfo.newAssistant && <Message variant='success'>"Assistant ajout?? avec succ??s"</Message>}
                        {Loading && <Loader/>}
                        <Form >
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicNom">
                                        <Form.Control 
                                        value={nom} onChange={(e)=>setNom(e.target.value)}
                                        type="text" placeholder="Nom l'assistant" required/>
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
                                type="email" placeholder="Adresse Email de l'assistant" />
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
                                        type="text" placeholder="Numero T??lephonique" />
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
                                Ajouter un assistant
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
        {/* /.content */}
      </div>
    )
})

export default AppNewAssistant
