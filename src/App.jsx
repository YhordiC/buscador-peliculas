
import { Movies } from './component/Movie';
import { useMovie } from './hooks/useMovie';
import './App.css'

function App() {

  const { movies:mappedMovies} = useMovie()
  

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
      <Movies movies={mappedMovies}/>
    </main>
    </div>
  )
}

export default App
