import { useState } from 'react';
import './Toggler.css';

export default function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [like, setCount] = useState(0);
    const changeFeeling = () => setIsHappy(!isHappy);
    const incrementLike = () => setCount(like + 1);
    return (
        <div className='Toggler'>
            <p>This is how I feel now</p>
            <p>{isHappy ? "😁" : "😅"}</p>
            <p>You do not want me to feel that way? Ok :(</p>
            <button onClick={changeFeeling}>
                Click me to change my feeling
            </button>
            <br />
            <p># of Likes: {like}</p>
            <button onClick={incrementLike}>Increment</button>
        </div>
    );
}
