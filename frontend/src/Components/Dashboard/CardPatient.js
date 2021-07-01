import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
const CardPatient = (x) => {
    return (
        <>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <img src="https://images.emojiterra.com/google/android-oreo/512px/1f468-1f3fb-2695.png" class="img-circle elevation-2" alt="User Image"/>
                     Nom prenom
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Title>Hello! I'm the body</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default CardPatient
