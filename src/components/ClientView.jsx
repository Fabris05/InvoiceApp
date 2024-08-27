export const ClientView = ({client}) => {
    
    const { name: nameClient, lastName, address } = client; // con los ':' le damos un alias al atributo

    const { country, city, street, number } = client.address; // Sub atributos de la direccion del cliente
    
    return(
        <>
            <h3>Datos del Cliente</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient}</li>
                <li className="list-group-item">{lastName}</li>
                <li className="list-group-item">
                    {country} / {city}
                </li>
                <li className="list-group-item">
                    {street} {number}
                </li>
            </ul>
        </>
    )
}