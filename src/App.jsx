
import { Movies } from './component/Movie';
import { useSearch } from './hooks/useSearch';
import { useMovie } from './hooks/useMovie';
import './App.css'
import {  useRef } from 'react';

function App() {

  const { movies:mappedMovies} = useMovie()
  const {search,updateSearch,error} = useSearch()

  


  const handleSubmit = (event) => {
    //una alternativa mucho mejor sin hooks useRef
    /*const fields = Object.fromEntries(
      new window.FormData(event.target)
    ) */
    event.preventDefault()
   // const value = inputRef.current.value;
   
   console.log(search)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if(newQuery.startsWith(' ')) return
    updateSearch(event.target.value)
  }


  return (
    <div className='container-web'>
    <h1>Hola Mundo</h1>
    <header>
      <form className='form' onSubmit={handleSubmit} >
        <input onChange={handleChange} value={search} name='search' placeholder='Avengers,Star Wars, The Matrix...'/>
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
