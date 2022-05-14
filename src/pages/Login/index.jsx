import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { userLogin } from "../../services/api";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
      e.preventDefault();
      userLogin(email, password)
      .then((response) => {
      console.log(response);
      window.open("/register");     
      })
      .catch((error) => console.log(error));
    // mostrar o erro
    };
      
    return (
    <Layout>
      <Input placeholder= "Digite seu email" type= "email"value= {email} onChange={(e) => setEmail(e.target.value)}/>
      <Input placeholder= "*******" type= "password" value= {password} onChange={(e) => setPassword(e.target.value)}/>
      <Button className="button" btnText="Entrar" onClick = {handleClick}/>
    </Layout>
  ); 
};