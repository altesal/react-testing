import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  
const handleSubmit = (event) => {
  event.preventDefault()
  const {query} = Object.fromEntries(
    new window.FormData(event.target)
    
  )
  console.log(query)
}

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input name='query' placeholder='Avengers, Star Warss, The Matrix...'></input>
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
