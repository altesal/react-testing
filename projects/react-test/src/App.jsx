import { useEffect, useState } from "react";
import './App.css'; 
import {getRandomFact} from './services/facts'
import { useCatImage } from "./hooks/useCatImage";


//Nuevo customHook: nos traemos el estado y su efecto
const useCatFact = () => {
  const [fact, setFact] = useState();
  
  //Dentro del customHook sí que podría tener sentido explicar la implementación (nombres...)
  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  //Lo anterior es justo lo que queríamos que hiciera el sig. efecto, pero también el botón!
  // recuperar la cita al cargar la página
   useEffect( () => {
    refreshRandomFact()
   }, [])
  
   return { fact, refreshRandomFact }
}

export function App() {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({fact})

const handleClick = async () => {
  //const newFact = await getRandomFact()
  refreshRandomFact()
}

return (
    <main  >
        <h1>App de gatitos Estilos verticales</h1>
          <button onClick={handleClick}>Get new fact</button>
          {fact && <p>{fact}</p> }
          {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando las primeras palabras del hecho: ${fact}`} /> }
        <h1>App de gatitos - Estilos horizontales</h1>
        <section>
          {fact && <p>{fact}</p> }
          {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando las primeras palabras del hecho: ${fact}`} /> }
        </section>
    </main>
  );
}