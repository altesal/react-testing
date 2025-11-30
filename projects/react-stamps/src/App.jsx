import { useEffect, useState } from "react";


export function App() {

    const api = "/wl-PAG-All-pages-transformed.json";
    //const api ="https://catfact.ninja/fact";
    const [stamp, setStamp] = useState(null);

    useEffect(() => {
        fetch(api)
            .then(res =>  res.json() )
            //.then(data =>   setStamp(data.fact) )
            .then(data =>   setStamp(data[0].Title) )
           
    }, []);


// useEffect(() => {
//     fetch('https://catfact.ninja/fact')
//       .then(res => res.json())
//       .then(data => setFact(data.fact));
//   }, []);





  return (
    <main>
      <h1>App MCM</h1>
        {stamp && <p>{stamp}</p> }
    </main>
  );
}