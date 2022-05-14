import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { registerUser } from "../../services/api";
import { Select } from "../../components/Select";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password, role)
    .then((response) => {
    console.log(response);
    window.open("/");     
    })
    .catch((error) => console.log(error));
    // mostrar o erro
  };
  return (
  <Layout> 
    <form>
      <Input placeholder="Digite seu nome" type="text" value= {name} onChange={(e) => setName(e.target.value)}/>
      <Input placeholder= "Digite seu email" type= "email" value= {email} onChange={(e) => setEmail(e.target.value)}/>   
      <Input placeholder= "*******" type= "password" value= {password} onChange={(e) => setPassword(e.target.value)}/>
        <Select name={role} optionValues={[{id:"saloon", title:"salão"},{id:"kitchen", title: "cozinha"}]} onChange={(e) => setRole(e.target.value)}
        />
      <Button type= "submit" className="button" btnText="cadastrar" onClick= {handleSubmit}/>
    </form>
  </Layout>
  ); 

};