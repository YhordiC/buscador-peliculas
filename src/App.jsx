
import { Movies } from './component/Movie';
import { useMovie } from './hooks/useMovie';
import './App.css'
import { useEffect, useRef, useState } from 'react';

function App() {

  const { movies:mappedMovies} = useMovie()
  const inputRef = useRef()
  const [query,setQuery] = useState('')
  const [error,setError] = useState(null)


  const handleSubmit = (event) => {
    //una alternativa mucho mejor sin hooks useRef
    /*const fields = Object.fromEntries(
      new window.FormData(event.target)
    ) */
    event.preventDefault()
   // const value = inputRef.current.value;
    console.log(query)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if(newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(()=>{

    if(query.match(''))
    if(query.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con número')
      return
    }
  },[query])
  return (
    <div className='container-web'>
    <h1>Hola Mundo</h1>
    <header>
      <form className='form' onSubmit={handleSubmit} >
        <input onChange={handleChange} value={query} name='query' placeholder='Avengers,Star Wars, The Matrix...'/>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </header>

    <main>
      <Movies movies={mappedMovies}/>
    </main>
    </div>
  )
}

export default App
