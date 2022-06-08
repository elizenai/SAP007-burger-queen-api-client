import { Command } from "../Command";

export const OrdersKitchen = ({client, table, products, createdAt, updateAt, status}) => {
  return (
    <li>
      <p>Cliente: {client}</p>
      <p>Mesa: {table}</p>
      <p>Produtos: {products}</p>
      <p>Criação do pedido: {createdAt}</p>
      <p>Status dos pedido: {status}</p>
      <p>Última atualização: {updateAt}</p>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Command
            name={product.client}
            flavor={product.flavor}
            complement={product.complement}
            qtd={product.qtd}
            />
          </div>
        );
      })};
    </li>
  );
};