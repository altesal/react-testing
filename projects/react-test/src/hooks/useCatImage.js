import { useEffect, useState } from "react";
import { getImage } from "../services/image";

export function useCatImage ({fact}) {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0];
    getImage(firstWord).then(newUrlImage => setImageUrl(newUrlImage)) 
  }, [fact]);
  return  {imageUrl}
}
