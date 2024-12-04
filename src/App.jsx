import Hello from './Components/Hello';
import Fruites from './Components/Fruites';
import ConditionalComponent from './Components/ConditionalComponent';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Form from './Components/Form';

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
      <Counter />
      <Form />
    </div>
  )
}

export default App
