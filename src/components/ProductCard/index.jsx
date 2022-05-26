import { Button } from "../Button";
import "./style.css";
export const ProductCard = ({image, price, name}) => {
  return (
    <li className="product">
      <img className="product-img" src={image} alt={name}/>
      <p className="product-name">{name}</p>
      <p className="product-price">R$ {price},00 </p>
       {/* <div>{children}</div> */}
       <Button
       type="submit"
       className="btn-add-product"
      //  onClick={}
       >Adicionar</Button>
    </li>
  );
};