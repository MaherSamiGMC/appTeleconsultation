import React from 'react'
import { Col, Container , Image, Row} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import Articles from '../../ArticlesBD'

const ArticleScreen = ({match}) => {

    const article = Articles.find(p => p._id === match.params.id)
    
    return (
        <>
        <Container className="card-info">
            <Row>
            <h1 class="mt-5 mb-3 mb-5">{article.name}</h1>
            <Col md={6} className='text-left'>
                <p class="card-text">{article.description.p}</p>
                <h2 class="card-text">{article.description.titre2}</h2>
                <p class="card-text">{article.description.p2}</p>
                <p class="card-text">{article.description.p3}</p>
                <p style={{textAlign :'right'}}><Link className='btn btn-dark my-3' to='/' >Retour</Link></p>
            </Col>
            <Col md={6}>
                <Image src= {article.image} alt={article.name} fluid/>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default ArticleScreen
