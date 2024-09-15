import PropTypes from 'prop-types';

export const CompanyView = ({tittle, company}) => {

    return(

        <>
             <h3>{ tittle }</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{company.name}</li>
                  <li className="list-group-item">{company.fiscalNumber}</li>
            </ul>
        </>

    )

}

CompanyView.propTypes = {
    tittle: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}