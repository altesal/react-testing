import { useEffect, useState } from "react";
import './App.css'; 
import {getRandomFact} from './services/facts'


const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true';

export function App() {
const [fact, setFact] = useState();
const [imageUrl, setImageUrl] = useState('');


useEffect(() => {
  if (!fact) return;
   const firstWord = fact.split(' ')[0];
        const threeword = fact.split(' ').slice(0,3).join(' ');
        //MDN (Mozilla Developer Network) para JavaScript es la plataforma de documentación de referencia gratuita y oficial de Mozilla
        console.log(firstWord);
        console.log(threeword);
        
  fetch(CAT_ENDPOINT_IMAGE_URL.replace('${firstWord}', threeword))
          .then(res => res.json())
          .then(response => {
            console.log(response);
            const {url} = response;  
            setImageUrl(url);
            console.log(url);
            
          });
}, [fact]);

//Es bueno que un efecto tenga una sola responsabilidad. Recuperar la cita al renderizar la pagina
// Recuperar la cita antes de cargar la página
  useEffect( () => {
    getRandomFact().then(setFact)
    
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