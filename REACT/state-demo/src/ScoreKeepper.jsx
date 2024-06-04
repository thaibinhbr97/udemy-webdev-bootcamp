import { useState } from 'react';

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
    const increaseP1Score = () => {
        // JS way
        // const newP1Score = { ...scores, p1Score: scores.p1Score + 1 };
        // setScores(newP1Score);

        // React way
        setScores((oldScores) => {
            return { ...oldScores, p1Score: oldScores.p1Score + 1 };
        });
    }
    const increaseP2Score = () => {
        // JS way
        // const newP2Score = { ...scores, p2Score: scores.p2Score + 1 };
        // setScores(newP2Score);

        // React way
        setScores((oldScores) => {
            return { ...oldScores, p2Score: oldScores.p2Score + 1 };
        });
    }
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    );
}
