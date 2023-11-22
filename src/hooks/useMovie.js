import { useState } from 'react';
import { searchMovies } from '../services/movies';


export const  useMovie =  (search) => {

    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const getMovies = async () => {
    try{
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
  
    } catch (e){
      setError(e.message)
    } 
    // tanto em try como en catch 
    finally {
      setLoading(false)
    }
      
}
  return { movies, getMovies,loading}
}