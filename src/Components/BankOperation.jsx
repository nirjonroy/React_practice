import { useReducer, useState } from "react"

export default function BankOperation(){
    function reducer(state, action){
        if(action.type=="add"){
            return {...state, balance:state.balance + action.payload}
        }
        if(action.type=="withdraw"){
            return {...state, balance:state.balance - action.payload}

        }

    }
    const [state, dispatch] = useReducer(reducer, {balance: 0})
    const [amount, setAmount] = useState(0)
    return (
        <div>
            {state.balance}
            <input type="text" name="" onChange={(e)=>setAmount(e.target.value)} id="" value={amount} />
            <button onClick={()=>dispatch({type:"add", payload: Number(amount)})}>Deposit</button>
            <button onClick={()=>dispatch({type:"withdraw", payload: Number(amount)})}>withdraw</button>
        </div>
        
    )
}