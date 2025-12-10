import responseMovies from '../mocks/pelis.json'
import withoutResults from '../mocks/no-results.json'

//customHook que haga el fetching de datos películas, del estado... 
export function useMovies () {
  const movies = responseMovies.Search
  //Mapeos para evitar que los componentes dependan mucho del contrato de la API
  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year : movie.Year,
      poster: movie.Poster
  }))

  return {movies: mappedMovies}
}