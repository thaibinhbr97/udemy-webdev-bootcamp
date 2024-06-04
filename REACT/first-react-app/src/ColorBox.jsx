import { useState } from 'react';
import './ColorBox.css';

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const switchColor = () => {
        const randomColor = randomChoice(colors)
        setColor(randomColor);
    };
    return (<div className='ColorBox' onClick={switchColor} style={{ backgroundColor: color }}></div >);
}

export default ColorBox;
