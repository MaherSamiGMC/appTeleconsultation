import React from 'react'
import { Card } from 'react-bootstrap'
const CardArt = ({article}) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <a href ={`/article/${article._id}`}>
                    <Card.Img variant="top" src={article.image} />
                    <Card.Body>
                        <Card.Title>{article.name}</Card.Title>
                        <Card.Text>{article.description.slice(0, 100)}</Card.Text>
                    </Card.Body>
                </a>
            </Card> 
        </>
    )
}
export default CardArt
