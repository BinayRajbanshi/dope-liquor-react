import React from 'react'
import { Container, Row , Col , Card , Button } from 'react-bootstrap'


const SingleCocktail = ({name , image , glass}) => {
  return (
    <Col sm={12} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </Col>
  )
}

export default SingleCocktail
