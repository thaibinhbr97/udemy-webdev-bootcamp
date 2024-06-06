import { useState } from 'react';
import { v4 as uuid } from "uuid";

function randomEmojis() {
    const choices = ['😀', '🤣', '🥳', '😎', '😤', '🤬', '🤢', '😈', '😵', '🫣', '🙄', '🥱', '😹', '👶🏿', '😿']
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmojis() }])
    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, { id: uuid(), emoji: randomEmojis() }]);
    };
    const deleteEmoji = (id) => {
        // delete the emoji with the specified id

        // JS way
        // const updatedEmojis = emojis.filter(e => e.id !== id);
        // setEmojis(updatedEmojis)

        // REACT way
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id);
        })
    }
    const makeAllHearts = () => {
        // JS way
        // const heartEmojis = emojis.map((item) => {
        //     return {
        //         ...item,
        //         emoji: '❤️'
        //     }
        // })
        // setEmojis(heartEmojis);

        // REACT way
        setEmojis(prevEmojis => {
            return prevEmojis.map((item) => { return { ...item, emoji: '❤️' } })
        })
    }
    return (<div>
        {emojis.map(e => <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>)}
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={makeAllHearts}>Make them all hearts</button>
    </div>);
}
