import style from './todoItem.module.css';
export default function Todoitem({item, todos, setTodos}) {
    function handleDelete(item){
        console.log("delete button click for", item);
        
        setTodos(todos.filter((todo)=> todo !== item));
    }
    return <div className={style.item} key={item}>
        <div className={style.itemName}>
        {item.name}
        <span>
            <button onClick={()=> handleDelete(item)} className={style.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={style.line} />
        </div>
}