import React from 'react'
import {Row, Col} from 'react-bootstrap'
import CardPatient from './CardPatient'
import { Accordion } from 'react-bootstrap'

const AppTelmess = ({userdetails}) => {
    return (
        <div className="content-wrapper list-patients">
            <h1>{ `Bonjour ${userdetails.firstName}`}</h1>
            {/* <Row>
                <Accordion defaultActiveKey="0">
                    {userdetails.patients.map( x => 
                        <Col sm={12} md={4} lg={4} className='mb-4'>
                            <CardPatient   x = {x} />
                        </Col>
                    )}
                </Accordion>
            </Row> */}
        </div>
    )
}

export default AppTelmess
