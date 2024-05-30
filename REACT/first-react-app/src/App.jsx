import './App.css';
// import ColorList from './ColorList'
// import Die from './Die'
// import DoubleDice from './DoubleDice'
// import Greeter from './Greeter'
// import Heading from './Heading'
// import ListPicker from './ListPicker'
// import ObjectPicker from './ObjectPicker'
// import Slot from './Slot'
import ShoppingList from './ShoppingList';

const data = [
  { name: "eggs", quantity: 12, completed: false },
  { name: "milk", quantity: 1, completed: true },
  { name: "chicken breasts", quantity: 4, completed: false },
  { name: "carrots", quantity: 6, completed: true }
];

function App() {
  return <div>
    <ShoppingList items={data} />
    {/* <Slot valList={["🍒", "🍒", "🍒"]} />
    <Slot valList={["🍒", "🍌", "🍒"]} /> */}
    {/* <ColorList colors={["red", "teal", "blue", "pink"]} />
    <ColorList colors={["olive", "orangered", "slaygrey", "black"]} />
    <Heading color="magenta" text="Welcome!" fontSize="48px" />
    <DoubleDice />
    <Heading color="blue" text="blah" fontSize="40px" />
    <DoubleDice />
    <Heading text="greek greek" fontSize="36px" />
    <DoubleDice />
    <ListPicker values={[1, 2, 3]} />
    <ListPicker values={["a", "b", "c"]} />
    <ObjectPicker values={{ x: 1, y: 2, z: 3 }} />
    <Greeter person="Brad" from="Binh" />
    <Greeter person="Stephanie" from="Binh" />
    <Greeter />
    <Die numSides={20} />
    <Die />
    <Die numSides={12} /> */}
  </div>
}

export default App
