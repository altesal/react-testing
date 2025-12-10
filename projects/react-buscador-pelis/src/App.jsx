import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


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
