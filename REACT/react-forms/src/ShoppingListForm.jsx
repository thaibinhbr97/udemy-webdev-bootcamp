import { useState } from 'react';

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });

    const handleChange = (evt) => {
        // First way
        // const changedField = evt.target.name;
        // const newValue = evt.target.value;
        // setFormData(curData => {
        //     return { ...curData, [changedField]: newValue }
        // });

        // Second way
        setFormData(curData => {
            return { ...curData, [evt.target.name]: evt.target.value };
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addItem(formData);
        setFormData({ product: "", quantity: 0 });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input type="text" placeholder="product name" name="product" id="product" onChange={handleChange} value={formData.product} />
            <label htmlFor="quantity">Quantity</label>
            <input type="number" placeholder="1" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} />
            <button>Add Item</button>
        </form>
    )
}
