/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export const Movie = ({movies}) => {
  return (
    <ul>
          {
            movies.map(movie =>(
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title}/>
              </li>
            ))
          }
    </ul>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const renderNoResults = () => {
    
    return (
        <p>no hay peliculas</p>
    )
}