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

const token = getToken();

export const getMenu = () => {
  return fetch("https://lab-api-bq.herokuapp.com/products",{
    method:"GET",
    headers:{ "Content-Type": "application/json", Authorization: token},
  });
};
