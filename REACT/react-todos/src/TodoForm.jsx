import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, InputAdornment } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

export default function TodoForm({ add }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        add(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="New Todo" variant="outlined" onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit">
                                    <AddCircleIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}
