import React from 'react'
import Articles from '../../ArticlesBD'
import CardArt from './CardArt'
import { Container, Row, Col} from 'react-bootstrap'


const ArticleScreen = () => {
    return (
        <>
            <Container>
                <h2>Actualités</h2>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia</p>
                <Row>
                    {Articles.map( article => 
                        <Col sm={12} md={4} lg={4}>
                            <CardArt  article = {article} />
                        </Col>
                    )}
                </Row>
            </Container>
            
        </>
    )
}

export default ArticleScreen
