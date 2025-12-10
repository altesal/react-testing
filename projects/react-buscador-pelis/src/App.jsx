import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  
const handleSubmit = (event) => {
  event.preventDefault()
  const fields_all = Object.fromEntries(new window.FormData(event.target))
  console.log(fields_all)
  const fields = new window.FormData(event.target)
  const query = fields.get('query')
  console.log(query)
}

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input name='query' placeholder='Avengers, Star Warss, The Matrix...'></input>
        <input name='otracosa' placeholder='Avengers, Star Warss, The Matrix...'></input>
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
