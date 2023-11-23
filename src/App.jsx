
import { Movies } from './component/Movie';
import { useSearch } from './hooks/useSearch';
import { useMovie } from './hooks/useMovie';
import './App.css'
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

function App() {

  const [sort, setSort] = useState(false)
  const {search,updateSearch,error} = useSearch()
  const { movies,getMovies,loading} = useMovie({search,sort})
 
 
  const debouncedGetMovies = useCallback( debounce(search => {
    console.log('sEARCH' + search)
    getMovies({search})
  },500) 
  ,[getMovies]
  )


  const handleSubmit = (event) => {
    //una alternativa mucho mejor sin hooks useRef
    /*const fields = Object.fromEntries(
      new window.FormData(event.target)
    ) */
    event.preventDefault()
   // const value = inputRef.current.value;
   
   getMovies({search})
  }
  
  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value;
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
debouncedGetMovies(newQuery)
   // getMovies({search: newQuery})
  }


  return (
    <div className='container-web'>
    <h1>MoviesPlus</h1>
    <header>
      <form className='form' onSubmit={handleSubmit} >
        <input onChange={handleChange} value={search} name='search' placeholder='Avengers,Star Wars, The Matrix...'/>
        <input type='checkbox' onChange={handleSort} checked={sort}></input>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </header>

    <main>
      {loading ? <p>Esta cargando</p>  : <Movies movies={movies}/>}
      
    </main>
    </div>
  )
}

export default App
