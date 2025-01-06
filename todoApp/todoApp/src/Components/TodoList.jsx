import Todoitem from "./Todoitem";
import style from "./todolist.module.css";
export default function TodoList({todos, setTodos}){
    return (
        <div className={style.list}>
            {todos.map(item=>(
                
                <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )

}