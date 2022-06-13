import { useState, useEffect } from "react";
// import { orderStatus  } from "../../services/api"; 
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/token";
import { OrdersKitchen } from "../../components/OrdersKitchen";
import { getProducts } from "../../services/api";
import "./style.css";


export const Kitchen = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
  removeToken();
  navigate("/");
  };

  useEffect(() => {
    getProducts()
    .then((response) => response.json())
    .then((data) => {
      setOrder(data);
      
    });
  }, []);

  return (
  <>
    <Header onClick={handleLogout}/>
    <section className="container-kitchen">
      <div className="container-products-kitchen">
        <ul className="cards-order">
          {order.map((item) => {
            
            return (
              <OrdersKitchen 
                key={item.id}
                client={item.client_name}
                table={item.table}
                createdAt={item.createdAt}
                updateAt={item.updateAt}
                status={item.status}

                products={item.Products}
              />
            );
            
          })}
        </ul>
      </div>
        
    </section>

  </>
  );
};
