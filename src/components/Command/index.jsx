export const Command = ({ id, name, price, qtd }) => {
  return (
    <ul>
      <li> 
        <p>{id}</p>
        <p>{name}</p>
      </li> 
        
      <li>
        <p>R$ {price},00</p>
        <p>{qtd}</p>
      </li>     
    </ul>
  );
};