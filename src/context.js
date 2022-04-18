import React , {useEffect, useState , useContext} from 'react'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const Ladiba = React.createContext()

const AppProvider = ({children}) => {
    const[cocktailData , setCocktailData] = React.useState([])
    const[loading , setLoading] = useState(false)
    const[term , setTerm] = useState('mar')

    // fetching Data
    useEffect(()=>{
        fetchData()
    },[term])
    const fetchData = async () =>{
        setLoading(true)
        try{
            const res = await fetch(`${URL}${term}`)
            const data = await res.json()
            setLoading(false)
            // setting the data in to simple form 
            const {drinks} = data;
            if(drinks){
                const newDrinks = 
                   drinks.map((item)=>{
                        const {
                            idDrink:id,
                            strDrink:name ,
                            strAlcoholic:type,
                            strDrinkThumb:img,
                            strGlass:glass
                        } = item
                        return {id,name ,type , img , glass}
                    })
                
                setCocktailData(newDrinks)
            }
            else{
                setLoading(false)
                setCocktailData([])
            }
        
        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
    }



    return <Ladiba.Provider
value={{loading , 
    cocktailData ,
   
    setTerm
}}
    >
        {children}
    </Ladiba.Provider>
}
// making custom hook for context
export const useGlobalContext = () => {
    return useContext(Ladiba)
}


export {AppProvider }
