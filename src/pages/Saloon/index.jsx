import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { getMenu } from "../../services/api";
import { Button } from "../../components/Button";
import { Command } from "../../components/Command";


export const Saloon = () => {
 const [products, setProducts] = useState([]);
  const [command, setCommand] = useState([]);
  
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

  const handleAddProduct = (item) => {
    console.log(item);
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    command.push(newItem);
    setCommand([...command]);
  };
console.log(handleAddProduct);

  return (
  <>
    <div>
      <Button
        value="breakfast"
        className="btn-products"
        btnText="Café da Manhã"
        onClick={handleShowMenu}
      />

      <Button
        value="all-day"
        className="btn-products"
        btnText="Almoço/Jantar"
        onClick={handleShowMenu}
      />
    </div>
    <ul>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
            <Button 
              className="btn-add-item"
              onClick={handleAddProduct}
            >Adicionar</Button>
          </div>
        );
      })}
    </ul>
    <ul>
      {command.map((item) => {
        return (
          
        )
      })}
    </ul>
  </>
  );
};