export default function Fruite({name, price}){
    return <div>
        { price > 5 ?
        (
            <li>{name} {price}</li>
            
        ):
        ("")

        }
        
        </div>;
}