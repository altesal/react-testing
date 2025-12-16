// https://cursoreact.dev/05-use-callback-use-memo-use-ref
// 56:40
import './App.css'
import { useState, useEffect , useRef} from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import  debounce  from 'just-debounce-it'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
 
  useEffect( () => {
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
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
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({search, sort})

const debouncedGetMovies = debounce( (search) => {
    console.log('Debounced search', search)
    getMovies({search})
  }, 500)

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMovies({search:newSearch})
    debouncedGetMovies({newSearch})  
  }
  
  useEffect( ()=> {
    console.log('Llamada a  getMovies - Cambio únicamente en la Search (pero no en el sort!!)')
  }, [getMovies])

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Warss, The Matrix...'></input>
        <input type='checkBox' onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        { loading ? <p>Loading...</p> : <Movies movies={movies} /> }
      </main>
    </div>
  )
}

export default App
