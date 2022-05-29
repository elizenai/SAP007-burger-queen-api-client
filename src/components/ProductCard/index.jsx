import { Button } from "../Button";
import "./style.css";
export const ProductCard = ({image, price, name, onClick}) => {
  return (
    <li className="product">
       <img className="product-img" src={image} alt={name}/>
       <p className="product-name">{name}</p>
       <p className="product-price">R$ {price},00 </p>
       <Button
       type="submit"
       className="btn-add-product"
       onClick={onClick}
       >Adicionar</Button>
    </li>
  );
};