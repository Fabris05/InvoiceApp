import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ItemsView } from "./components/ItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {
    
    // estado para mostrar el formulario
    const [activeForm, setActiveForm] = useState(false);

    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    const [total, setTotal] = useState(0);

    // Desesctruramos el cliente para que su instancia no sea tan larga
    const {
        id,
        name,
        client,
        company
    } = invoice; // Entre las llaves colocamos los atrubutos que deseamos


    useEffect( () => {
        const data = getInvoice();
        //console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect( () => {

        setTotal(calculateTotal(items));

        console.log('El counter cambió');
    }, [items]);
    
    useEffect( () => {
        //console.log('El formItemsState cambió');
    }, [counter]);

    const handlerAddItems = ({product, price, quantity}) => {
       
        setItems([
            ...items,
            {
                id: counter,
                product: product.trim(),
                price: +price.trim(), // forma de convertir string a entero
                quantity: parseInt(quantity.trim(), 10), // otra forma
            }
        ]);

        setCounter(counter + 1);
    };

    const handlerDeleteItems = (id) => {
        // Filtramos y devolvemos un nuevo arreglo que no tenga ese id
        setItems(items.filter( item => item.id !== id ));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header fw-bold">Ejemplo Factura</div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row">
                            <div className="col my-3">
                                <ClientView
                                    tittle={"Datos del Cliente"}
                                    client={client}
                                />
                            </div>

                            <div className="col my-3">
                                <CompanyView
                                    tittle={"Datos de la Empresa"}
                                    company={company}
                                />
                            </div>
                        </div>

                        <ItemsView
                            tittle={"Productos de la Factura"}
                            items={items}
                            handlerDeleteItems = { id => handlerDeleteItems (id) }
                        />

                        <TotalView total={total} />
                        
                        <button className="btn btn-secondary"
                        onClick={onActiveForm}> {!activeForm ? 'Agregar Item': 'Ocultar form'} </button>
                        {!activeForm ? '' : <FormItemsView handler = { handlerAddItems } />}
                        
                    </div>
                </div>
            </div>
        </>
    );
};
