import style from './todoItem.module.css';
export default function Todoitem({item}){
    return <div className={style.item} key={item}>
        <div className={style.itemName}>
        {item}
        <span>
            <button className={style.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={style.line} />
        </div>
}