import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { createOrder, getMenu, getProducts } from "../../services/api";
import { Button } from "../../components/Button";
import "./style.css";
import { Input } from "../../components/Input";
import { Command } from "../../components/Command";
import { Select } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/token";
import { Header } from "../../components/Header";
import { filterProducts } from "../../services/filter";
import { MdRemoveCircle } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
// import { OrdersKitchen } from "../../components/OrdersKitchen";


export const Saloon = () => {
  const [products, setProducts] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [chooseTable, setChooseTable] = useState("");
  const [nameClient, setNameClient] = useState("");
  const [sumOrders, setSumOrders] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  const showMenu = (option) => {
    getMenu()
      .then((response) => response.json())
      .then((data) => setProducts(filterProducts(data, option)));
  };

  const handleShowMenu = (e) => {
    showMenu(e.target.value);
  };

  const handleFinishedOrder = () => {
    getProducts()
    .then((response) => response.json())
    .then((data) => {
      const filterData = data.filter((item) => {
        return item.status == "finish";
      });
      setOrderProducts(filterData);
      console.log(filterData, "filteeer");
    });
  };
      

  const handleAddOrders = (item) => {
    const verifyIdProduct = orderProducts.find((itemOrder) => itemOrder.id === item.id);
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct) {
      verifyIdProduct.qtd++;
      console.log(newOrderProducts, "estou no if");
    } else {
      const product = { ...item, qtd: 1 };
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

  const handleSubmitOrder = () => {
    createOrder(nameClient, chooseTable, orderProducts)
      .then((response) => {
        if (response.status === 200) {
          setNameClient("");
          setChooseTable("");
          setOrderProducts([]);
        } else {
        console.log("Deu ruim");
        }
        
      });
  };

  useEffect(() => {
    showMenu("breakfast");
  }, []);

  useEffect(() => {
    const amount = orderProducts.reduce((previousPrice, item) => {
      return previousPrice + item.qtd * item.price;
    }, 0);
    setSumOrders(amount);
  }, [orderProducts]);

  return (
    <>
      <Header onClick={handleLogout} />
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

            <Button
              value="ready-order"
              className="btn-products"
              onClick={handleFinishedOrder}
            >Pedidos Prontos</Button>
          </div>
          {/* (? <ul className="cards-order">
          {orderProducts.map((item) => {
            
            return (
              <OrdersKitchen 
                key={item.id}
                client={item.client_name}
                table={item.table}
                createdAt={convertTime(item.createdAt)}
                updatedAt={convertTime(item.updatedAt)}
                status={item.status}
                products={item.Products}
                onClick={() => handleStatusFinish(item)}
              />
            );
            
          })}
        </ul>:) */}
          <div className="menu-products">
            <ul className="all-products">
              {products.map((item) => {
                return (

                  <ProductCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    flavor={item.flavor}
                    complement={item.complement}
                    price={item.price}
                    onClick={() => handleAddOrders(item)}
                  />

                );
              })}
            </ul>
          </div>
        </div>

        <aside className="order">
          <div className="products-command">
            <h2 className="order-command">Pedido:</h2>
            <div className="client-table">
              <Input
                className="client-name"
                placeholder="Nome do Cliente"
                value={nameClient}
                onChange={(e) => setNameClient(e.target.value)}
              />
              <Select
                className="select-table"
                value={chooseTable}
                onChange={(e) => setChooseTable(e.target.value)}
                optionValues={[
                  { id: "selected", title: "Mesa" },
                  { title: "1" },
                  { title: "2" },
                  { title: "3" },
                  { title: "4" },
                  { title: "5" },
                ]}
              />
            </div>
            <ul className="item-command">

              {orderProducts.map((item) => {

                return (
                  <li className="command-itens" key={`Product${item.id}`}>
                    <Command
                      name={item.name}
                      qtd={item.qtd}
                      flavor={item.flavor}
                      complement={item.complement}
                      price={item.price * item.qtd}
                    />
                    <Button
                      className="btn-remove"
                      onClick={() => handleRemoveOrders(item)}>
                      <MdRemoveCircle />
                    </Button>
                    <Button
                      className="btn-add"
                      onClick={() => handleAddOrders(item)}>
                      <MdAddCircle />
                    </Button>
                  </li>
                );

              })}
            </ul>
            <div className="order-completion">
              <p className="total-order">
                Valor Total: R${sumOrders},00
              </p>

              <Button
                className="btn-send-order"
                onClick={handleSubmitOrder}>
                Enviar Pedido
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};