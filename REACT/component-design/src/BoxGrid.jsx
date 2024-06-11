import { useState } from 'react';
import Box from "./Box";
import './BoxGrid.css';
import { createBoxes } from './utils';

export default function BoxGrid({ numBoxes = 9 }) {
    const [boxes, setBoxes] = useState(createBoxes(numBoxes));
    const reset = () => setBoxes(createBoxes(numBoxes));

    // REACT way
    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value;
                }
            })
        })
    }
    // // JS way
    // const toggleBox = (idx) => {
    //     const newBoxes = [...boxes];
    //     newBoxes[idx] = !newBoxes[idx];
    //     setBoxes(newBoxes);
    // }

    return (
        <div className="BoxGrid">
            {boxes.map((value, idx) => <Box key={idx} isActive={value} toggle={() => toggleBox(idx)} />)}
            <button onClick={reset}>Reset</button>
        </div>
    )
}
