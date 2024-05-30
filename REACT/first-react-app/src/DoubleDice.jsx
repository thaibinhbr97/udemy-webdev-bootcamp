export default function DoubleDice() {
    const randDice1 = Math.floor(Math.random() * 6) + 1;
    const randDice2 = Math.floor(Math.random() * 6) + 1;
    const isWinner = randDice1 === randDice2;
    const styles = {
        color: isWinner ? "green" : "red"
    };
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {/* {isWinner ? <h3>You win!</h3> : null} */}
            {isWinner && <h3>You win!</h3>}
            <p>Dice 1: {randDice1}</p>
            <p>Dice 2: {randDice2}</p>
        </div>
    )
}
