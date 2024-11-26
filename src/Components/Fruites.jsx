export default function Fruites(){
    const fruites = ['Apple', 'Mango', 'Bananna', 'Guava']
    return <div>
        <ul>
            {fruites.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            )

            )}
        </ul>
    </div>
}