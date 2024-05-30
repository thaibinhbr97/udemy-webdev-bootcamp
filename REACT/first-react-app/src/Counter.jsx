import { useState } from 'react';

export default function Counter() {
    const [num, setNum] = useState(5);
    const incrementNum = () => {
        setNum(num + 1);
    };
    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={incrementNum}>Increment</button>
        </div>
    );
}
