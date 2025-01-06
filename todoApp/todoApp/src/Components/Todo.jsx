import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    
    const [todos, setTodos] = useState([]);
    const complatedTodos = todos.filter((todo) => todo.done).length;
    const TotalTodos = todos.length;
    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer complatedTodos={complatedTodos} TotalTodos={TotalTodos} />
            {/* <h1>{complatedTodos}</h1> */}
        </div>
    );
}