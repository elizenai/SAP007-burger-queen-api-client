import { useState } from "react";
import "./style.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { userLogin } from "../../services/api";
import { Label } from "../../components/Label";
import image from "../../img/logo-removebg-preview.png";

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
      <section className="all-content">
        <figure>
          <img src= {image} alt="logo"/>
        </figure>
        <h1 className="text-form"> Acesse sua conta </h1>
        <div className="container">
          <form className="form-container">
            <Label className="textLabel">Email</Label>
            <Input placeholder= "Digite seu email" type= "email"value= {email} onChange={(e) => setEmail(e.target.value)}/>
            <Label className="label-password">Senha:</Label>
            <Input placeholder= "*******" type= "password" value= {password} minLength="6" onChange={(e) => setPassword(e.target.value)}/>
            <Button className="button" btnText="Entrar" onClick = {handleClick}/>
          </form>
        </div>
      </section>
    </Layout>
  ); 
};