import { useState } from 'react';

export default function ShoppingListForm() {
    const [formData, setFormData] = useState({ product: "", quantity: "" });
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
        })
    }
    return (
        <form action="">
            <h3>Product: {formData.product}</h3>
            <label htmlFor="product">Product Name</label>
            <input type="text" placeholder="product name" name="product" id="product" onChange={handleChange} value={formData.product} />
            <h3>Quantity: {formData.quantity}</h3>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" placeholder="1" name="quantity" id="quantity" onChange={handleChange} value={formData.quantity} />
            <button>Add Item</button>
        </form>
    )
}
