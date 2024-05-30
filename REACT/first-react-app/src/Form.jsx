function handleSubmit(evt) {
    evt.preventDefault();
    console.log("SUBMITED THE FORM!")
}

export default function Form() {
    return <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
}
