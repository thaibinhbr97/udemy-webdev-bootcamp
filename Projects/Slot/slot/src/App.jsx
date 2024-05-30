import './App.css'
import Slot from './Slot'

function App() {
  return <div>
    <Slot valList={["🍒", "🍒", "🍒"]} />
    <Slot valList={["🍒", "🍌", "🍒"]} />
  </div>
}

export default App
