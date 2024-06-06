import { useState } from 'react';

function newBoard(numPlayers) {
    return new Array(numPlayers).fill(0);
}

export default function ScoreKeeper({ numPlayers = 3, target = 3 }) {
    const [scores, setScores] = useState(newBoard(numPlayers));
    const [hasWinner, setHasWinner] = useState(false);

    // REACT way
    const incrementScore = (i) => {
        if (!hasWinner) {
            setScores(curScores => {
                return curScores.map((score, idx) => {
                    if (idx === i) {
                        if (score + 1 >= target) setHasWinner(true);
                        return score + 1;
                    }
                    return score;
                });
            })
        }
    };


    // Intuitive way
    // const incrementScore = (idx) => {
    //     // Normal way
    //     // const copyScores = [...scores];
    //     // copyScores[i] += 1;
    //     // return setScores(copyScores);

    //     // REACT way
    //     setScores(curScores => {
    //         const copy = [...curScores];
    //         copy[idx] += 1
    //         return copy;
    //     })
    // }

    const reset = () => {
        setHasWinner(false);
        setScores(newBoard(numPlayers));
    };

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>Player {idx + 1}: {score} points{score >= target && `. CONGRATS!!! The winner is Player ${idx + 1}.`}
                            <button onClick={() => score < target && incrementScore(idx)}>+1</button>
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
