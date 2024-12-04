import { useState } from "react"

export default function Form(){
    const [name, SetName] = useState({firstName: "", lastName: ""});
    // function handleChange(e){
    //     SetName(e.target.value);
    // }
    function handleClick(e){
        e.preventDefault();
        console.log(name);
    }
    return <div>

        {name.firstName}-{name.lastName}
        <form action="">
            <input onChange={(e)=>SetName({...name, firstName: e.target.value})} type="text"  value={name.firstName}/>
            <input onChange={(e)=>SetName({...name, lastName: e.target.value})} type="text"  value={name.lastName}/>
            <button onClick={(e)=>handleClick(e)}>submit</button>
        </form>
    </div>
}