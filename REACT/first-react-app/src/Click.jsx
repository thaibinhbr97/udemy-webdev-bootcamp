function handleClick() {
    console.log("CLICKED THE BUTTON!")
}

export default function Click() {
    return (
        <div>
            <p>Click The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
