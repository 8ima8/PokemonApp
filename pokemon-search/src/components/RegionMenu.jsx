import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RegionMenu() {
const [regions, setReagions] = useState([]);

useEffect(() => {
    fetch('https://pokeapi.co/api/v2/region/')
    .then((res) => res.json())
    .then((data) => setReagions(data.results));
}, []);

return (
    <div>
    <h1>Regiones Pokemon</h1>
    </div>
);
}
