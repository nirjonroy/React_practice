import Hello from './Components/Hello';
import Fruites from './Components/Fruites';
import ConditionalComponent from './Components/ConditionalComponent';
import Message from './Components/Message';

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
      <ConditionalComponent />
      <Message />
    </div>
  )
}

export default App
