import { useState } from "react";
import Style from "./form.module.css";
export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
    return (
        <form action="" className={Style.todoform} onSubmit={handleSubmit}>
        <div className={Style.inputContainer}>
        <input 
        className={Style.modernInput}
            type="text" 
            onChange={(e) => setTodo(e.target.value)} 
            value={todo}
            placeholder="Enter a new todo"
        />
        <button type="submit" className={Style.modernButton}>Add Todo</button>
        </div>
        </form>
    );
}