import { getRandomFact } from '../services/facts';
import { useState, useEffect } from "react";

export function useCatFact()  {
  const [fact, setFact] = useState();
  
  //Dentro del customHook sí que podría tener sentido explicar la implementación (nombres...)
  const refreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // recuperar la cita al cargar la página
   useEffect( () => {
    refreshRandomFact()
   }, [])
  
   return { fact, refreshRandomFact }
}