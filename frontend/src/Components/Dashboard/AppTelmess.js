import React from 'react'
import {Row, Col} from 'react-bootstrap'

const AppTelmess = ({userdetails}) => {
    return (
        <div className="content-wrapper list-patients pt-5 pl-2">
            <h4 >{ `Bonjour ${userdetails&& userdetails.firstName}`}</h4>
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
