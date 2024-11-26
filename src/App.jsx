import Hello from './Components/Hello';
import Fruites from './Components/Fruites';

function App() {
const seatNumbers = [1,7,4];
const person = {
  name : "Nirjon Roy",
  message : "Hay there! this is : ",
  seatNumbers : [1,7,4],
}
  return (
    <div className="App">
      <Hello  person={person}/>
      <Fruites />
    </div>
  )
}

export default App
