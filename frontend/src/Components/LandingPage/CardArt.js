import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
const CardArt = ({article}) => {
    return (
        <>
        {console.log(article)}
            <Card>
                <Link to ={`/Actualités/${article._id}`}>
                    <Card.Img variant="top" src={article.image} />
                    <Card.Body className='text-left'>
                        <Card.Title>{article.name}</Card.Title>
                        <Card.Text>{article.description.p.slice(0,100)}</Card.Text>
                    </Card.Body>
                </Link>
            </Card> 
        </>
    )
}
export default CardArt
