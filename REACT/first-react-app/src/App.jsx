import './App.css';
import ColorBoxeGrid from './ColorBoxeGrid';
// import ColorBox from './ColorBox';
// import TogglerCounter from './TogglerCounter';
// import Toggler from './Toggler';
// import ColorList from './ColorList'
// import Die from './Die'
// import DoubleDice from './DoubleDice'
// import Greeter from './Greeter'
// import Heading from './Heading'
// import ListPicker from './ListPicker'
// import ObjectPicker from './ObjectPicker'
// import Slot from './Slot'
// import Click from './Click';
// import Form from './Form';
// import Clicker from './Clicker';
// import Counter from './Counter';

// import ShoppingList from './ShoppingList';
// const data = [
//   { id: 1, name: "eggs", quantity: 12, completed: false },
//   { id: 2, name: "milk", quantity: 1, completed: true },
//   { id: 3, name: "chicken breasts", quantity: 4, completed: false },
//   { id: 4, name: "carrots", quantity: 6, completed: true }
// ];

// import PropertyList from './PropertyList';
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  '#F94144',
  '#F3722C',
  '#F8961E',
  '#F9844A',
  '#F9C74F',
  '#90BE6D',
  '#43AA8B',
  '#4D908E',
  '#577590',
  '#277DA1'
];


function App() {
  return <div>
    <ColorBoxeGrid colors={colors} />
    {/* <ColorBox colors={colors} /> */}
    {/* <TogglerCounter /> */}
    {/* <Toggler /> */}
    {/* <Counter /> */}
    {/* <Clicker message="Hi!" buttonText="Please Click Me <3" />
    <Clicker message="Please Stop Clicking Me!" buttonText="do not click" /> */}
    {/* <Form />
    <Click /> */}
    {/* <PropertyList properties={properties} /> */}
    {/* <ShoppingList items={data} /> */}
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
