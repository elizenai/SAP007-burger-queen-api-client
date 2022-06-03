export const Command = ({ id, name, price, flavor, complement, qtd }) => {
  return (
    <ul>
      <li> 
        <p>{id}</p>
        <p>{name}</p>
        <p>{flavor}</p>
        <p>{complement}</p>
      </li> 
        
      <li>
        <p>R$ {price},00</p>
        <p>{qtd}</p>
      </li>     
    </ul>
  );
};