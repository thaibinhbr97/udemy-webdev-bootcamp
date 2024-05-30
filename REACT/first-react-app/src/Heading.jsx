export default function Heading({ color = "teal", text, fontSize }) {
    return <h1 style={{ color: color, fontSize: fontSize }}> {text}</h1 >
}
