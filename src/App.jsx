import respontseMovies from './result-json/API.json'; 
import withoutResults from './result-json/APIerror.json'
import { Movie,renderNoResults } from './component/Movie';
import './App.css'

function App() {
  const movies =respontseMovies.Search;
  const hasMovies = movies?.length > 0;  

  return (
    <div className='container-web'>
    <h1>Hola Mundo</h1>
    <header>
      <form className='form'>
        <input type='text' placeholder='Avengers,Star Wars, The Matrix...'/>
        <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      {
       hasMovies ?
       (
        <Movie movies={movies}/>
       ) : <renderNoResults/>
      }
    </main>
    </div>
  )
}

export default App
