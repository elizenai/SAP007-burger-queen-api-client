import "./style.css";

export const OrdersKitchen = ({client, table, products, createdAt, updatedAt, status, children}) => {
  return (
  
    <li className="order-list">
      <div className="container-order-kitchen">
        <div className="container-details-order">
          <p className="details-order"><span className="details-order-span">Cliente:</span> {client}</p>
          <p className="details-order"><span className="details-order-span">Mesa:</span> {table}</p>
          <p className="details-order"> <span className="details-order-span">Criação do pedido:</span> {createdAt}</p>
          <p className="details-order"><span className="details-order-span">Status do pedido:</span> {status}</p>
          <p className="details-order"><span className="details-order-span">Última atualização:</span> {updatedAt}</p>
        </div>
      
        <ul className="style-products">Produtos: {products.map((product) => {

          return (
            <div key={product.id}>
              <p>{product.qtd} <span>{product.name}</span></p>
              <p>{product.flavor}</p>
              <p>{product.complement}</p>
              
            </div>
          );
          })}
        </ul>
      </div>
      {children}
    </li> 
  );
};