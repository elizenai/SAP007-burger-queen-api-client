import { OrdersKitchen } from "../../components/OrdersKitchen";
import { getProducts } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { orderStatus } from "../../services/api";
import { useState, useEffect } from "react";
import { convertTime } from "../../services/formatTime";
import { Button } from "../../components/Button";
import "./style.css";
import { FiCornerUpLeft } from "react-icons/fi";

export const ReadyOrders = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/saloon");
  };

  useEffect(() => {
    getProducts()
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.filter((item) => {
          return item.status == "finish";
        });
        setOrder(filterData);
        console.log(filterData, "finisheedd");
      });
  }, []);

  const handleServeOrder = (item) => {
    orderStatus(item.id, "served")
      .then((response) => {
        let newOrder = order;
        if (response.status === 200) {
          newOrder = order.filter((element) =>
            element.id !== item.id);
        }
        setOrder(newOrder);
      });
  };

  return (
    <>
    <Button className= "btn-return" onClick={handleReturn}>
      <FiCornerUpLeft/>
    </Button>
      <section className="container-ready-orders">
        <div className="ready-orders">
          <ul className="cards-ready-orders">
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
                      <Button className="btn-serve" value="serve" onClick={() => handleServeOrder(item)}> 
                      Servir</Button>
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