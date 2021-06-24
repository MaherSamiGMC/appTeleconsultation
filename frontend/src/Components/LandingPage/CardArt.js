import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
const CardArt = ({article}) => {
    return (
        <>
            <Card>
                <Link to ={`/Actualités/${article._id}`}>
                    <Card.Img variant="top" src={article.image} />
                    <Card.Body>
                        <Card.Title>{article.name}</Card.Title>
                        <Card.Text>{article.description.slice(0, 100)}</Card.Text>
                    </Card.Body>
                </Link>
            </Card> 
        </>
    )
}
export default CardArt
