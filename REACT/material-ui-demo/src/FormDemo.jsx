import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (e, newValue) => {
        setVolume(newValue);
    }
    return (
        <Box sx={{ border: "1px solid red", p: 6, width: 300, height: 300, margin: "0 auto" }}>
            <h1>Name is: {name}</h1>
            <TextField id="outlined-basic" placeholder="Fido" label="Puppy Name" variant="outlined" value={name} onChange={updateName} />
            <h2>Volume is: {volume}</h2>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
                <VolumeUp />
            </Stack>
        </Box >
    )
}
