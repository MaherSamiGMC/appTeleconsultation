import React from 'react'
import { Col, Container , Image} from 'react-bootstrap'
import{ Link } from 'react-router-dom'
import Articles from '../../ArticlesBD'

const ArticleScreen = ({match}) => {

    const article = Articles.find(p => p._id === match.params.id)
    
    return (
        <>
        <Container>
            
                <Col md={6} className='mt-5'>
                    <Image src= {article.image} alt={article.name} fluid/>
                </Col>

                <Col md={8} className='pt-4'>
                    <h5 class="card-title">{article.name}</h5>
                    <p class="card-text">{article.description}</p>
                </Col>

            <Link className='btn btn-light my-3 ml-auto' to='/' >Retour</Link>
        </Container>
        </>
    )
}

export default ArticleScreen
