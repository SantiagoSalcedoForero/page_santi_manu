export function Cabeza({ title, name = 'user'}) {
    console.log(title, name)
    return <h1>{title}, dice {name}</h1>
}

export function UserCard({name, amount, married, address, greet}) {
    return <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? 'married' : 'single'}</p>
        <ul>
            <li>{address.city}</li>
            <li>{address.street}</li>
        </ul>
    </div>
}