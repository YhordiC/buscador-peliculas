import { useState,useEffect } from "react"
export function useSearch () {
    
  const [search,updateSearch] = useState('')
  const [error,setError] = useState(null)

  useEffect(()=>{

    if(search.match(/^\d+$/)){ // expresion regular 
      setError('No se puede buscar una pelicula con número')
      return
    }
    setError(null)
  },[search])

  return {search,updateSearch,error }
}