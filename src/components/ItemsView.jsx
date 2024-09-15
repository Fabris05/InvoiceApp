import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types';

export const ItemsView = ({ tittle, items, handlerDeleteItems }) => {
    return (
        <>
            <h4> {tittle} </h4>
            <table className="table table-hover">
                <thead className="table table-light">
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => {
                        return (
                            <RowItemView
                                key={id}
                                id={id}
                                product={product}
                                price={price}
                                quantity={quantity}
                                handlerDeleteItems = { id => handlerDeleteItems (id) }
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

ItemsView.propTypes = {
    tittle: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}