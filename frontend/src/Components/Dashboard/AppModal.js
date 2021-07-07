import React from 'react'
import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
const AppModal = ({Profil}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <div className="modal-profile">
      <Button variant="primary" onClick={handleShow} className="link-profil">
      <i class="fas fa-external-link-alt"></i> Voir Profil
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} className="modal-profile">
        <Modal.Body className="d-flex p-2">
        <Col className="d-inline-flex">
    <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto">
            {Profil && Profil.gender == "Homme" ? <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" /> :<img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle img-thumbnail" alt="profile-image" /> 

            }
            
            </div>

            <div className="mt-3">
                <h4 className="text-uppercase">{Profil && Profil.firstName} {Profil && Profil.lastName}</h4>
                <p className="text-muted mb-0"><i class="fas fa-envelope-square"></i> {Profil && Profil.email}</p>
                <p className="text-muted mb-0"><i class="fas fa-phone-square-alt"></i> {Profil && Profil.phoneNumber}</p>
                <p className="text-muted "><i class="fas fa-calendar-alt"></i> {Profil && Profil.dateOfBirth}</p>

            </div>
        </div>
    </div>
</Col>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="danger">Supprimer</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}

export default AppModal
