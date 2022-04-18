import React, { useEffect , useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams ,Link } from 'react-router-dom'
import Loading from '../components/Loading'

const Single = () => {
const {id} = useParams()
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


  const[loading , setLoading] = useState(false)
  const [cocktail, setCocktail] = useState([])

  useEffect(()=>{
    fetchData()
  }, [id])

  const fetchData = async () =>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if(data.drinks){
        const newDrinks = () =>{
          const { strDrink:name ,
            strAlcoholic:type,
            strCategory:category,
            strDrinkThumb:img,
            strInstructions:info,
            strGlass:glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          const ingredients = [strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5]
          return {name , category , img   , info , type ,ingredients,glass }
        }
        setCocktail(newDrinks)
        setLoading(false)
      }
      else{
        return <h3>Data Not Found!</h3>
      }
      setLoading(false)
      console.log(data)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  if(loading) {
    return <Loading/>
  }
  const {name , category , img , info , type , glass ,ingredients } = cocktail
  return (
    <section className='section cocktail-section'>
        <Link to='/' className='btn btn-secondary'>
          Back Home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={img} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>Type :</span> {type}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {info}
            </p>
            {/* <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p> */}
          </div>
        </div>
      </section>
  )
}

export default Single
