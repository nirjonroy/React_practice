import Fruite from "./Fruite"

export default function Fruites(){
    // const fruites = ['Apple', 'Mango', 'Bananna', 'Guava']
    const fruites = [
        {name: "apple", price: 5},
        {name: "mango", price: 10},
        {name: "bananna", price: 100},
    ]
    return <div>
        <ul>
        {fruites.map((fruit, index) => (
                    <Fruite key={index} name={fruit.name} price={fruit.price} />
                ))}
        </ul>
    </div>
}