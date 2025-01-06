import Styles from "./footer.module.css";
export default function Footer({complatedTodos, TotalTodos}){
    return(
        <div className={Styles.footers}>
            <span className={Styles.item}>Complated Todos : {complatedTodos}</span>
            <span className={Styles.item}>Total Todos : {TotalTodos}</span>
        </div>
    )
}