import { useState } from 'react';

export default function SignupForm() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const updateFirstname = (evt) => setFirstname(evt.target.value);
    const updateLastname = (evt) => setLastname(evt.target.value);
    const handleSubmit = () => {
        console.log(firstname, lastname);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" placeholder="John" value={firstname} onChange={updateFirstname} />
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" placeholder="Doe" value={lastname} onChange={updateLastname} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
