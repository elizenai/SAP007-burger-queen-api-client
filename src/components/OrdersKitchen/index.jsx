import "./style.css";

export const OrdersKitchen = ({client, table, products, createdAt, updateAt, status}) => {
  return (
  
    <li className="order-list">
      <p>Cliente: {client}</p>
      <p>Mesa: {table}</p>
      <p>Criação do pedido: {createdAt}</p>
      <p>Status dos pedido: {status}</p>
      <p>Última atualização: {updateAt}</p>
      <ul>Produtos: {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.flavor}</p>
            <p>{product.complement}</p>
            <p>{product.qtd}</p>
          </div>
        );
        })}
      </ul>
    </li> 
  );
};