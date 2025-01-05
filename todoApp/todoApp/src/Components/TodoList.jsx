import Todoitem from "./Todoitem";
import style from "./todolist.module.css";
export default function TodoList({todos}){
    return (
        <div className={style.list}>
            {todos.map(item=>(
                
                <Todoitem key={item} item={item}/>
            ))}
        </div>
    )

}