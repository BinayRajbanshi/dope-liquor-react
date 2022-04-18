import React,{useRef , useEffect} from 'react'
// bootstrap imports
import {Form , Container} from 'react-bootstrap'
// global Context import
import { useGlobalContext } from '../context'


const Search = () => {
  const searchRef = useRef()
  const { setTerm} = useGlobalContext()
  // functions
  const handleChange = () => {
    setTerm(searchRef.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // innitially focusing on the search component
  useEffect(()=>{
    searchRef.current.focus()
  },[])
  return (
    <Container className='font mt-5'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2>Search your favorite Cocktail here</h2>
        <Form.Control ref={searchRef} onChange={handleChange} type="text" placeholder="e.g. Martini" />
      </Form.Group>
    </Form>
    </Container>
  )
}

export default Search
