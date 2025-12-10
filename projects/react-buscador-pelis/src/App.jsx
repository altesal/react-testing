import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


function App() {
  const { movies } = useMovies()
  const inputRef = useRef() //Valor inicial dentro del useRef, en este caso vacío

const handleSubmit = (event) => {
  event.preventDefault()
  //cada vez que haya un clic, sacamos el valor de la referencia
  //al acceder a una referencia, hacerlo desde la propiedad (nativa) current
  const inputElement = inputRef.current.value
  //alert(inputElement)
  console.log(inputElement)
}

  return (
    <div className="page"> 
      <header>
      <form className='form' onSubmit={handleSubmit}>
        <input ref={inputRef}  placeholder='Avengers, Star Warss, The Matrix...'></input>
        <button   type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
