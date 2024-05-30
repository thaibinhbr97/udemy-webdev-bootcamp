export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} style={{
                    color: item.completed ? "grey" : "red",
                    textDecoration: item.completed ? "line-through" : "none"
                }}
                >{item.name} - {item.quantity}
                </li>
            ))
            }
        </ul >
    );
}
