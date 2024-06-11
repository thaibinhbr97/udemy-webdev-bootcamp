import './App.css';
import './Dice.css';
// import LuckyN from './LuckyN';
import BoxGrid from './BoxGrid';

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
  return (
    <>
      <BoxGrid />
      {/* <LuckyN title='Roll less than 4' winCheck={lessThan4} />
      <LuckyN title='Roll the same number' winCheck={allSameValue} /> */}
    </>
  );
}

export default App
