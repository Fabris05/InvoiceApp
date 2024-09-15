import { invoice } from "../data/invoice"

export const getInvoice = () =>{
    //console.log(invoice);

    // let total = 0;

    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantity;
    // })

    // otra forma de sumar e iterar el total de los precios
    const total = calculateTotal(invoice.items);

    // Usamos el operador spread para clonar el objeto invoice y le agregamos el
    // atributo total
    return {...invoice, total};
}

export const calculateTotal = (items = []) => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator , currentValue) => accumulator + currentValue, 0);
}