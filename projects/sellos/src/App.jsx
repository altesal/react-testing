import {useEffect, useState} from "react";


export function App() {
    const api = "/wl-PAG-All-pages-transformed.json"
    const [stamp, setStamp] = useState([]);

    useEffect( () => {
        fetch(api)
            .then(res => res.json())
            .then(data => setStamp(data[0]["Catalog codes"].Mi));
    }, []);


    return (
        <main>
            <h1>Mi listado de sellos MCM</h1>
            {stamp}
        </main>
        );
}