import './App.css'
import Die from './Die'
import Greeter from './Greeter'

function App() {
  return <div>
    <Greeter person="Brad" from="Binh" />
    <Greeter person="Stephanie" from="Binh" />
    <Greeter />
    <Die numSides={20} />
    <Die />
    <Die numSides={12} />
  </div>
}

export default App
