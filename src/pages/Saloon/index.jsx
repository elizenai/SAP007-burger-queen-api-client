import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { getMenu } from "../../services/api";
import { Button } from "../../components/Button";


export const Saloon = () => {
 const [products, setProducts] = useState([]);
 const [orderProducts, setOrderProducts] = useState([]);
  
 const filter = (data, type) =>  {
   return data.filter((item) => item.type === type);
 };

  const showMenu = (option) => {
    getMenu()
      .then((response) => response.json())
      .then((data) => setProducts(filter(data, option)));    
  };

  useEffect(() => {
    showMenu("breakfast");
  }, []);

  
  const handleShowMenu = (e) => {
    showMenu(e.target.value);
  };
  
  const handleOrders = (item) => {
    const verifyIdProduct = orderProducts.find((itemOrder) => itemOrder.id === item.id); 
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct){
      verifyIdProduct.qtd ++;
    } else {
      const product = {...item, qtd: 1};
      newOrderProducts.push(product);
    }
    setOrderProducts(newOrderProducts);
    
  };
  
  useEffect(() => {
    console.log(orderProducts, "ORDER PRODUCT");
  }, [orderProducts]);

  return (
  <>
    <div>
      <Button
        value="breakfast"
        className="btn-products"
        onClick={handleShowMenu}
      >Café da Manhã</Button>

      <Button
        value="all-day"
        className="btn-products"
        onClick={handleShowMenu}
      >Almoço e Jantar</Button>
    </div>
    <ul>
      {products.map((item) => {
        return (
          
          <ProductCard 
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            onClick={() => handleOrders(item)}
          ></ProductCard>
      
        );
      })}
    </ul>
    <h2>pedido</h2>
    <ul>
      {orderProducts.map((item) => {

        return (
          <p key={`Product${item.id}`}>
            {item.name} : {item.qtd}
          </p>
        );

      })}
    </ul>
    
  </>
  );
};