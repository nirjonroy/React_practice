import { act } from "react";
import { useReducer } from "react";
import { useState } from "react";

export  default function Reducer(){
    const [count, setCount] = useState(0);
    const [state, dispatch] =  useReducer(reducer, 0);
    function reducer(state, action){
        if(action.type == "increment"){
            return state + action.payload;
        }
        if(action.type == "deincrement"){
            return state - action.payload;
        }
    }
return(
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>deincrement</button>
        {state}
        <button onClick={()=>dispatch({type:"increment", payload: 1})}>increment</button>
        <button onClick={()=>dispatch({type:"deincrement", payload: 1})}>deincrement</button>
    </div>
)
}