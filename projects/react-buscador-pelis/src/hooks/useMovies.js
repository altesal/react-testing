import withResults from '../mocks/pelis.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'

//customHook que haga el fetching de datos películas, del estado... 
export function useMovies ({search}) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search
  //Mapeos para evitar que los componentes dependan mucho del contrato de la API
  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year : movie.Year,
      poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults)
      
      fetch(`httpS://www.omdbapi.com/?apikey=f129656a&s=${search}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
    })
    }  else {
      setResponseMovies(withoutResults)
    }
  }

  return {movies: mappedMovies, getMovies}
}