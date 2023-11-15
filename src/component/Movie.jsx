
 const ListOfMovie = ({movies}) => {
  return (
    <ul>
          {
            movies.map(movie =>(
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title}/>
              </li>
            ))
          }
    </ul>
  )
}



 const MoviesNoResults = () => {
    
    return (
        <p>no hay peliculas</p>
    )
}


export function Movies ({movies}) {
  const hasMovies = movies?.length > 0;
     
   return (
    hasMovies
     ? <ListOfMovie movies={movies}/>
     : <MoviesNoResults/> 
   )
}