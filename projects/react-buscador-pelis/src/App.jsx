import './App.css'
import responseMovies from './mocks/pelis.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

//Hacer un customHook que se preocupe de todo el fetching de datos películas, del estado... 
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

function App() {
  const { movies: mappedMovies} = useMovies()

  return (
    <div className="page"> 
      <header>
      <form className='form'>
        <input placeholder='Avengers, Star Warss, The Matrix...'></input>
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
