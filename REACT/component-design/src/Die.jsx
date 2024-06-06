import './Die.css'

// Single die
export default function Die({ val, color = "slateblue" }) {
    return (
        <div className="Die" style={{ backgroundColor: color }}>
            {val}
        </div>
    )
}
