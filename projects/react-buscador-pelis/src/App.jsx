import './App.css'
import responseMovies from './mocks/pelis.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

  return (
    <div className="page"> 
      <header>
      <form className='form'>
        <input placeholder='Avengers, Star Warss, The Matrix...'></input>
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
