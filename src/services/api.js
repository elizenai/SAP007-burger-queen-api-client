import { getToken } from "./token";

export const registerUser = (name, email, password, role) => {
  return fetch("https://lab-api-bq.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body:JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant:"Queens Burger",
    })
  }); 
};

export const userLogin = (email, password) => {
  return fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email:email,
      password:password,
    })  
  });
};


export const getMenu = () => {
  return fetch("https://lab-api-bq.herokuapp.com/products",{
    method:"GET",
    headers:{ "Content-Type": "application/json", Authorization: getToken()},
  });
};

export const createOrder = (client, table, products) => {
  return fetch("https://lab-api-bq.herokuapp.com/orders",{
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    body: JSON.stringify({
    client: client,
    table: table,
    products: products,
    })
  });
};

export const getProducts = () => {
  return fetch("https://lab-api-bq.herokuapp.com/orders",{
  method: "GET",
  headers: {"Content-Type": "application/json", Authorization: getToken() },
  });
};

export const orderStatus = (orderId, status) => {
  return fetch(`https://lab-api-bq.herokuapp.com/orders/${orderId}`,{
    method: "PUT",
    headers: {"Content-Type": "application/json", Authorization: getToken()},
    body: JSON.stringify({
    status: status,
    })
  });
};