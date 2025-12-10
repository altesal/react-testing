import './App.css'
import { useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
 
  useEffect( () => {
    if (search === ''){
      setError('No se pueden buscar pelíoculas vacías')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar películas con un número')
      return
    }    
    
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }    
    
    setError(null)
  } , [search])

  return { search, updateSearch, error }
}

function App() {
  const { movies } = useMovies()
  const {search, updateSearch, error } = useSearch()
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({search})
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Warss, The Matrix...'></input>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
