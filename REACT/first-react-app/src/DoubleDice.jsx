export default function DoubleDice() {
    const randDice1 = Math.floor(Math.random() * 6) + 1;
    const randDice2 = Math.floor(Math.random() * 6) + 1;
    return (
        <div>
            <h2>Double Dice</h2>
            <p>Dice 1: {randDice1}</p>
            <p>Dice 2: {randDice2}</p>
            {/* {randDice1 === randDice2 ? <h3>You win!</h3> : null} */}
            {randDice1 === randDice2 && <h3>You win!</h3>}
        </div>
    )
}
