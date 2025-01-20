// import Hello from './Components/Hello';
// import Fruites from './Components/Fruites';
// import ConditionalComponent from './Components/ConditionalComponent';
// import Message from './Components/Message';
// import Counter from './Components/Counter';
// import Form from './Components/Form';
// import Reducer from './Components/Reducer';
// import BankOperation from './Components/BankOperation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';
import Nav from './Nav';

function App() {
// const seatNumbers = [1,7,4];
// const person = {
//   name : "Nirjon Roy",
//   message : "Hay there! this is : ",
//   seatNumbers : [1,7,4],
// }
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
    

    // <div className="App">
    //   <BankOperation />
    //   <Reducer />
    //    <Hello  person={person}/>
    //   <Fruites />
    //   <ConditionalComponent />
    //   <Message />
    //   <Counter />
    //   <Form /> 
    // </div>
  )
}

export default App
