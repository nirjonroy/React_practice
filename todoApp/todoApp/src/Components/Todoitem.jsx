import style from './todoItem.module.css';
export default function Todoitem({item, todos, setTodos}) {
    function handleDelete(item){
        console.log("delete button click for", item);
        
        setTodos(todos.filter((todo)=> todo !== item));
    }
    function handleClick(name){
        const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
        console.log('clickdded', name);
        setTodos(newArray);
        console.log(todos)
    }
    const className = item.done ? style.complated : "";
    return <div className={style.item} key={item}>
        <div className={style.itemName}>
            <span className={className} onClick={()=>handleClick(item.name)}>
            {item.name}
            </span>
        
        <span>
            <button onClick={()=> handleDelete(item)} className={style.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={style.line} />
        </div>
}