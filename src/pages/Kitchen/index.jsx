import { useState, useEffect } from "react";
import { orderStatus } from "../../services/api"; 
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/token";
import { OrdersKitchen } from "../../components/OrdersKitchen";
import { getProducts } from "../../services/api";
import { convertTime } from "../../services/formatTime";
import "./style.css";
import { Button } from "../../components/Button";



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
      const filterData = data.filter((item) => {
        return item.status == "pending";
      });
      setOrder(filterData);
      console.log(filterData, "filteeer");
    });
  }, []);

  const handleStatusFinish = (item) => {
    orderStatus(item.id,"finish")
    .then((response) => {
      let newOrder = order;
      if(response.status === 200) {
      newOrder = order.filter((element) => 
      element.id !== item.id);
      }
      setOrder(newOrder);
    });
  };

  return (
  <>
    <Header onClick={handleLogout}/>
    <section className="container-kitchen">
      <div className="container-products-kitchen">
        <ul className="cards-order">
          {order.map((item) => {
            
            return (
              <>
                <OrdersKitchen 
                  key={item.id}
                  client={item.client_name}
                  table={item.table}
                  createdAt={convertTime(item.createdAt)}
                  updatedAt={convertTime(item.updatedAt)}
                  status={item.status}
                  products={item.Products}
                >
                  <div className="btn-finish-serve">
                    <Button className="btn-finish" value="finish" onClick={() => handleStatusFinish(item)}> 
                    Finalizar</Button>
                  </div>
                </OrdersKitchen>
              </>
            );
            
          })}
        </ul>
      </div>
        
    </section>

  </>
  );
};
