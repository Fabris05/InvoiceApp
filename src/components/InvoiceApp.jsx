import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () => {
  // Desesctruramos el cliente para que su instancia no sea tan larga
  const { id, name, client, company, items } = getInvoice(); // Entre las llaves colocamos los atrubutos que deseamos

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header fw-bold">Ejemplo Factura</div>
          <div className="card-body">

            {/* Importamos compomente */}
            <InvoiceView id = {id} name = {name}/>

            <div className="row">
              <div className="col my-3">

                <ClientView client={client}/>

              </div>

              <div className="col my-3">

               <CompanyView company={company}/>
               
              </div>
            </div>

            <h4>Productos de la Factura</h4>
            <table className="table table-hover">
              <thead className="table table-light">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ id, product, price, quantity }) => {
                  return (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
