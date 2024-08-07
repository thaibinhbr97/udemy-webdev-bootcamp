import './Board.css';
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay, reset }) {
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let isDraw = true;
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
            if (!squares[a] || !squares[b] || !squares[c]) {
                isDraw = false;
            }
        }
        if (isDraw) return 'D';
        return null;
    };

    const handleClick = (idx) => {
        if (calculateWinner(squares) || squares[idx]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[idx] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    console.log(winner);
    let status;

    if (winner === 'D') {
        status = "Draw"
    } else if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


    return (
        <div className="game-board">
            <h1>Tic Tac Toe</h1>
            <h2 className="status">{status}</h2>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <br />
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    );
}
