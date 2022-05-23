import "./style.css";
export const ProductCard = ({image, price, name}) => {
  return (
    <li className="product">
      <img className="product-img" src={image} alt={name}/>
      <h3 className="product-name">{name}</h3>
      <h4 className="product-price">R$ {price},00 </h4>
       {/* <div>{children}</div> */}
    </li>
  );
};