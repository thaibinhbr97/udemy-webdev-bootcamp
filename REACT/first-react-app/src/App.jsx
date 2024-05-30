import './App.css'
import Die from './Die'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import ObjectPicker from './ObjectPicker'

function App() {
  return <div>
    <ListPicker values={[1, 2, 3]} />
    <ListPicker values={["a", "b", "c"]} />
    <ObjectPicker values={{ x: 1, y: 2, z: 3 }} />
    <Greeter person="Brad" from="Binh" />
    <Greeter person="Stephanie" from="Binh" />
    <Greeter />
    <Die numSides={20} />
    <Die />
    <Die numSides={12} />
  </div>
}

export default App
