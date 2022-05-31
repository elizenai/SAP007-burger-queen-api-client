import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { getMenu } from "../../services/api";
import { Button } from "../../components/Button";
import "./style.css";
import { Input } from "../../components/Input";
import { Command } from "../../components/Command";

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
  
  const handleAddOrders = (item) => {
    const verifyIdProduct = orderProducts.find((itemOrder) => itemOrder.id === item.id); 
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct){
      verifyIdProduct.qtd ++;
      console.log(newOrderProducts, "estou no if");
    } else {
      const product = {...item, qtd: 1};
      console.log("entrei no else");
      newOrderProducts.push(product);
    }
    setOrderProducts(newOrderProducts); 
  };

  const handleRemoveOrders = (item) => {
    const verifyIdProduct = orderProducts.find((itemOrder) => itemOrder.id === item.id);
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct.qtd > 1) {
      verifyIdProduct.qtd -= 1;
    } else {
      newOrderProducts = newOrderProducts.filter((itemOrder) => itemOrder.id != item.id);
      
    }
    setOrderProducts(newOrderProducts);
  };
  
  
  useEffect(() => {
    console.log(orderProducts, "ORDER PRODUCT");
  }, [orderProducts]);

  return (
  <>
    <section className="container-saloon">
      <div className="container-products">
        <div className="buttons">
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
        <ul className="all-products">
          {products.map((item) => {
            return (
              
              <ProductCard 
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                onClick={() => handleAddOrders(item)}
              ></ProductCard>
          
            );
          })}
        </ul>
      </div> 

      <aside className="order">
        <div className="products-command">
          <h2 className="order-command">Pedido:</h2>
          <ul>

            <div>
              <Input  
              className= "client-name"
              placeholder= "nome do cliente"/>

              {/* <Select/> */}
            </div>
              
            {orderProducts.map((item) => {

              return (
                <li className="command-itens"key={`Product${item.id}`}>
                  <Command
                  name={item.name} 
                  qtd={item.qtd}
                  price={item.price * item.qtd}
                  />
                  <Button 
                    className="btn-remove"
                    onClick={() => handleRemoveOrders(item)}>
                    remover
                  </Button>
                </li>
              );

            })}
          </ul>
        </div>
      </aside>
    </section>
  </>
  );
};