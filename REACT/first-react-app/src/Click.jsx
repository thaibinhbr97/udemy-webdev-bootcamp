function handleClick() {
    console.log("CLICKED THE BUTTON!");
}

function handleHover() {
    console.log("HOVERED!!!");
}

export default function Click() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover over me</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
