import React , {useContext} from 'react'
import { Container, Row , Col , Card , Button } from 'react-bootstrap'
  import {useGlobalContext} from '../context'
  import Loading from './Loading'
import MisMatched from './MisMatched'
import {Link} from 'react-router-dom'


const CocktailList = () => {
  const {cocktailData , loading} = useGlobalContext()
  if(loading){
    return <Loading/>
  }
  if(cocktailData.length === 0) {
    return <MisMatched/>
  }
  return (
    <Container className='font'>
      <Row>
        {cocktailData.map((item)=>{
          const{id , name , img , glass , type} = item
          
          return <Col className='mt-5' xs={12} sm={6} md={4} xl={3} key={id}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               <span>{glass} <br/> {type} </span>
              </Card.Text>
              <Button as={Link} to={`/details/${id}`} variant="secondary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        })}
      </Row>
    </Container>
  )
}

export default CocktailList
