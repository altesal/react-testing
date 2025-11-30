import { useEffect, useState } from "react";

export function App() {
const [fact, setFact] = useState('Lorem ipsum cat fact whatever...');

useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact));
  }, []);

return (
    <main>
        <h1>App de gatitos</h1>
        {fact && <p>{fact}</p> }
    </main>
  );
}