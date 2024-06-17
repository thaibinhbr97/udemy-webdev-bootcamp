// import AlarmIcon from '@mui/icons-material/Alarm';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import './App.css';
import FormDemo from './FormDemo';
import Navbar from './Navbar';
// import RatingDemo from './RatingDemo';

function App() {

  return (
    <>
      {/* <Button variant="contained" onClick={() => alert('HI!')}>Contained</Button>
      <Button size="small" variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button size="large" color="success" variant="contained" onClick={() => alert('HI!')}>Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
      {/* <RatingDemo /> */}
      <Navbar />
      <FormDemo />

    </>
  )
}

export default App
