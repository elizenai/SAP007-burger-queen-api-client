import "./style.css";

export const OrdersKitchen = ({client, table, products, createdAt, updateAt, status}) => {
  return (
  
    <li className="order-list">
      <div className="container-details-order">
        <p className="details-order">Cliente: {client}</p>
        <p className="details-order">Mesa: {table}</p>
        <p className="details-order"> Criação do pedido: {createdAt}</p>
        <p className="details-order">Status dos pedido: {status}</p>
        <p className="details-order">Última atualização: {updateAt}</p>
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
    </li> 
  );
};