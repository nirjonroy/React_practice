export default function Fruites(){
    // const fruites = ['Apple', 'Mango', 'Bananna', 'Guava']
    const fruites = [
        {name: "apple", price: 5},
        {name: "mango", price: 10},
    ]
    return <div>
        <ul>
            {fruites.map((fruit) => (
                <li key={fruit.name}>{fruit.name} {fruit.price}</li>
            )

            )}
        </ul>
    </div>
}