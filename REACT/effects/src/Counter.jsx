import { useEffect, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    function myEffect() {
        console.log("MY EFFECT WAS CALLED!");
    }
    useEffect(myEffect, [count]);
    const increment = () => {
        setCount(c => c + 1);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    }



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}
