import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { getMenu } from "../../services/api";
import { Button } from "../../components/Button";


export const Saloon = () => {
 const [products, setProducts] = useState([]);
  
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
          <div key={item.id}>
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.price}
            ></ProductCard>
          </div>
        );
      })}
    </ul>
  </>
  );
};