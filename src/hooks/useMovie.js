import respontseMovies from '../result-json/API.json'; 
// import withoutResults from '../result-json/APIerror.json'
export const useMovie = () => {
  
    const movies =respontseMovies.Search;

    const mappedMovies = movies?.map(movie => (
      { id: movie.imdbID,
        title:movie.Title,
        year:movie.Year,
        poster:movie.Poster,
      }
    ))
  
    return { movies : mappedMovies}
  
}
