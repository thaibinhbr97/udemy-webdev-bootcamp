import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingListForm from './ShoppingListForm';

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Bananas", quantity: 8 },
        { id: uuid(), product: "Eggs", quantity: 12 },
    ]);
    const addItem = (item) => {
        if (!item.product) {
            return;
        }
        setItems(curItems => [...curItems, { ...item, id: uuid() }]);
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}
