import './App.css'
import { useState, useEffect } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    //Validar (Ojo, podría hacerse perfectamente de FORMA NO CONTROLADA...)
    //Ojo, estados son asíncronos
    const newQuery = event.target.value
    setQuery(newQuery)
    if (newQuery === ''){
      setError('No se pueden buscar pelíoculas vacías')
      return
    }  
    if (newQuery.match(/^\d+$/)){
      setError('No se puede buscar películas con un número')
      return
    }    
    if (newQuery.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }    
    setError(null)

  }

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='query' placeholder='Avengers, Star Warss, The Matrix...'></input>
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
