import React from 'react'
import { Col, Container , Image} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import Articles from '../../ArticlesBD'

const ArticleScreen = ({match}) => {

    const article = Articles.find(p => p._id === match.params.id)
    
    return (
        <>
        <Container>
            <h1 class="mt-5 mb-3">{article.name}</h1>
            <Col md={6}>
                <Image src= {article.image} alt={article.name} fluid/>
            </Col>

            <Col md={10} className='pt-4'>
                <p class="card-text">{article.description}</p>
                <p style={{textAlign :'right'}}><Link className='btn btn-dark my-3' to='/' >Retour</Link></p>
            </Col>

        </Container>
        </>
    )
}

export default ArticleScreen
