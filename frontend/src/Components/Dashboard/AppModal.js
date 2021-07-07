import React from 'react'
import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
const AppModal = ({Profil}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn">
      <i class="fas fa-external-link-alt"></i> Voir Profil
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} className="modal-profile">
        <Modal.Body className="d-flex p-0">
        <Col lg={8}>
    <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" />
            </div>

            <div className="">
                <h4 className="text-uppercase">{Profil && Profil.firstName} {Profil && Profil.lastName}</h4>
                <p className="text-muted">Date<span>| </span><span className="text-pink"> 20/20/2021</span></p>
            </div>
        </div>
    </div>
</Col>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AppModal
