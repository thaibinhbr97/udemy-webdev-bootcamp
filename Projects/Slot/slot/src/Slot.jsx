export default function Slot({ valList }) {
    let count = 0
    for (let i = 0; i < valList.length; i++) {
        if (valList[i] === valList[0]) {
            count++;
        }
    }
    const hasWinner = count === valList.length;
    const styles = { color: hasWinner ? "green" : "red" };
    return (
        <div>
            <h1>{valList.map((val) => val)}</h1>
            <h2 style={styles}>{hasWinner ? "You win!" : "You lose :("}</h2>
            {hasWinner && <h3>Congrats with  💌</h3>}
        </div>
    )
}
