const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true';

export const getImage = async (firstWord) => {
   const res = await fetch(CAT_ENDPOINT_IMAGE_URL.replace('${firstWord}', firstWord))
   const data = await res.json()
   const { url } = data
   return url
} 
        
        
          