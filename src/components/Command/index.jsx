export const Command = ({ id, name, price, flavor, complement, qtd }) => {
  return (
    <ul>
      <li> 
        <p>{qtd} <span>{name}</span> </p>
        <p>{id}</p>
        <p>{flavor}</p>
        <p>{complement}</p>
      </li> 
        
      <li>
        <p>R$ {price},00</p>
      </li>     
    </ul>
  );
};