import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {

    // guardamos los valores de los inputs en el estado de React
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity:''
    });

    const {product, price, quantity} = formItemsState; // Desesctructuramos los valores del objeto

    useEffect( () => {
        //console.log('El precio cambió');
    }, [price]);

    const onInputChange = ({ target: {name, value} }) => {
        console.log(name);
        console.log(value);

        setFormItemsState({
                ...formItemsState, 
                [ name ]: value
        });
    };

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault(); //Prevenimos que se cargue la pagina

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            // validamos que sea nummero
            alert("Error el precio no es un número");
            return;
        }
        if (quantity.trim().length < 1) return;
        if (isNaN(quantity.trim())) {
            // validamos que sea número
            alert("Error la cantidad no es un número");
            return;
        }

        handler(formItemsState);

        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });
    };

    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product} // colocamos para que se limpie
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange}
                />

                <input
                    type="text"
                    name="price"
                    value={price} // colocamos para que se limpie
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={onInputChange}
                />

                <input
                    type="text"
                    name="quantity"
                    value={quantity} // colocamos para que se limpie
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange}
                />

                <button type="submit" className="btn btn-primary m-3">
                    Nuevo Item
                </button>
            </form>
        </>
    );
};
