import { useEffect, useState } from "react";
import './App.css'; 
import {getRandomFact} from './services/facts'
import { getImage } from "./services/image";
import { useCatImage } from "./hooks/useCatImage";



export function App() {
const [fact, setFact] = useState();
const {imageUrl} = useCatImage({fact})


useEffect( () => {
  getRandomFact().then(newFact => setFact(newFact))
}, [])

const handleClick = async () => {
  const newFact = await getRandomFact()
  setFact(newFact)
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