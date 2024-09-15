import PropTypes from 'prop-types';

export const ClientView = ({tittle, client}) => {
    
    const { name: nameClient, 
        lastName, 
        address: {country, city, street, number} } = client; // con los ':' le damos un alias al atributo
    
    return(
        <>
            <h3> {tittle} </h3>
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

ClientView.propTypes = {
    tittle: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}
