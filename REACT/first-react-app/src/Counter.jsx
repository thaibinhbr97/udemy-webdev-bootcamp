export default function Counter() {
    const incrementNum = () => num++;
    let num = 0;
    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={incrementNum}>Increment</button>
        </div>
    );
}
