import { useState } from 'react';
import './Toggler.css';

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const changeFeeling = () => {
        setIsHappy(!isHappy);
    }
    return (
        <div className='Toggler'>
            <p>This is how I feel now</p>
            <p>{isHappy ? "😁" : "😅"}</p>
            <p>You do not want me to feel that way? Ok :(</p>
            <button onClick={changeFeeling}>
                Click me to change my feeling
            </button>
        </div>
    );
}
