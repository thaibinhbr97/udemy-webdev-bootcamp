import './App.css';
import Dice from './Dice';
import './Dice.css';

// requirements
// a set components for:
// play a dice game with numDice number of dice
// shows a win message when total equals goal
// a "roll again" button that re-rolls all the dice

// lift the state as high as possible - but not higher
// App -> LuckyN -> Dice -> Die, Die
// Generally, components are one of two types: presentational (UI) and logical (state or logic)
// App, Dice, Die, Die: presentational, LuckyN: logical


function App() {
  return (<>
    <Dice dice={[3, 6, 1]} />
    <Dice dice={[1, 2, 3]} color="red" />
    <Dice dice={[2, 4, 5]} color="green" />
  </>);
}

export default App
