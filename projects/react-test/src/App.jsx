import { useEffect, useState } from "react";
import './App.css'; 

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true';

export function App() {
const [fact, setFact] = useState();
const [imageUrl, setImageUrl] = useState('');
const getRandomFact = () => {
   fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact}  = data;
        setFact(fact);   //Minuto 37:44
        })
}

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
  useEffect( getRandomFact, [])

const handleClick = () => {
  getRandomFact()
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