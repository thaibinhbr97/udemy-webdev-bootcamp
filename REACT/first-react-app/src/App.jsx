import './App.css'
// import Greeter from './Greeter'
import Die from './Die'

function App() {
  return <div>
    {/* <Greeter person="Brad" from="Binh" />
    <Greeter person="Stephanie" from="Binh" />
    <Greeter person="Rosa" from="Lucky" /> */}
    <Die numSides={20} />
    <Die numSides={6} />
    <Die numSides={12} />
  </div>
}

export default App
