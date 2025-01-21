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
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import Products from './Pages/Products';
import { createContext, useState } from "react"
import Checkout from './Checkout';
import Login from './Login';
export const userContext = createContext();
function App() {
  const [user, setUser] = useState("guest");
// const seatNumbers = [1,7,4];
// const person = {
//   name : "Nirjon Roy",
//   message : "Hay there! this is : ",
//   seatNumbers : [1,7,4],
// }

  return (
    <BrowserRouter>
    <Nav />
    {/* <input type="text" name="" value={user} onChange={(e=> setUser(e.target.value))} id="" /> */}
    
    <userContext.Provider value={{user, setUser}}>
    <Login />
    <Checkout />
    </userContext.Provider>
    
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products/:id" element={<Products />}/>
       <Route path="/Dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
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
