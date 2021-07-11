import React from 'react'
import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import moment from 'moment'
import 'moment/locale/fr';
import {useDispatch} from 'react-redux'
import { deleteUser } from '../../Redux/Actions/userActions';

const AppModal = ({Profil}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete=()=>{
    dispatch(deleteUser("patient",Profil._id)) 
    window.location.reload()
  }
    return (
    <div className="modal-profile">
      <Button variant="primary" onClick={handleShow} className="link-profil">
      <i class="fas fa-external-link-alt"></i> Voir Profil
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} className="modal-profile">
        <Row className="m-0">
          <Col md={5} className="block-profile">
            <Modal.Body  className="d-flex p-2">
              <Col className="d-inline-flex">
                  <div className="text-center card-box">
                      <div className="member-card pt-2 pb-2">
                          <div className="thumb-lg member-thumb mx-auto">
                          {Profil && Profil.gender == "Homme" ? <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" /> :<img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle img-thumbnail" alt="profile-image" /> 

                          }
                          
                          </div>

                          <div className="mt-3">
                              <h4 className="text-uppercase">{Profil && Profil.firstName} {Profil && Profil.lastName}</h4>
                              <ul>
                                <li className="text-muted mb-0"><i class="fas fa-envelope-square"></i> {Profil && Profil.email}</li>
                                <li className="text-muted mb-0"><i class="fas fa-phone-square-alt"></i> <a href={`tel:$`} className="text-muted">{Profil && Profil.phoneNumber}</a></li>
                                <li className="text-muted "><i class="fas fa-calendar-alt"></i> {Profil && Profil.dateOfBirth}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </Col>
            </Modal.Body>
          </Col>
          <Col md={7} className="pt-4" >
            <div className="msg mb-3">
              <h5 className="mb-2">Messages :</h5>
              <div className="scroll style-1">{ Profil && Profil.messages.length > 0 ? Profil && Profil.messages.map(x =>
                  <div>
                    <p className="ques mb-1">{x.question}</p> 
                    <p className="text-right rep mb-1">{x.response}</p>
                  </div>
                  ) 
                  : <p className="nothing">aucun message</p>
                  }
              </div>
            </div>


            <div className="rdv">
              <h5 className="mb-2">rendez vous :</h5>
              <div>{Profil && Profil.appointments.length > 0 ? Profil && Profil.appointments.map(x =>
                <div>
                  <p className="mb-0">Sujet : {x.title}</p> 
                  <p className="mb-1">Vous avez un rendez vous le <strong>{moment(x.endDate).format("MMM Do YYYY")}</strong></p>
                </div>
                  )  
                  : <p className="nothing">Aucun rendez vous fixé</p>
                  }
              </div>
            </div>


          </Col>
        </Row>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer fenêtre</Button>
          <Button variant="danger" onClick={handleDelete}>Supprimer les données du patient</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default AppModal
