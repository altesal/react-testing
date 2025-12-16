import { useRef,  useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search) //UseRef para guardar la búsqueda anterior y evitar llamadas innecesarias
 
 const getMovies = async () => {
  if (search === previousSearch.current) return //Si la búsqueda es igual a la anterior, no hacer nada

  try {
      setLoading(true)
      console.log('Loaging...test cargando')
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    }catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
      console.log('Loading finished')
    }
  }

  // const getSortedMovies = () => {  
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies
    
  //   console.log(`getSortedMovies ${sortedMovies}`)
    
  //   return sortedMovies
  // }

  //Cálculo que queremos memorizar. Hazla solo cuando cambie cierta info. 
  const sortedMovies = useMemo(()=> {
    console.log('MemoSortedMovies')
    return  sort
       ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
       : movies
  },[sort, movies])  

  return {movies:sortedMovies, loading, getMovies}
}