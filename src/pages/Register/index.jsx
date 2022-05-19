import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { registerUser } from "../../services/api";
import { Select } from "../../components/Select";
import { statusError } from "../../services/error";
import { setToken } from "../../services/token";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { Label } from "../../components/Label";
import image from "../../img/logo-hamburger.png";
import "../Login/style.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [codeErro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErro(statusError(response));
      })
      .then((data) => {
        setToken(data.token);
        navigate(data.role === "saloon" ? "/saloon" : "/kitchen");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <section className="all-content">
          <figure>
            <img src={image} alt="logo"/>
          </figure>
          <h1 className="text-form"> Cadastre-se </h1>
          <div className="container">
            <form className="form-container">
              <Label className="textLabel">Nome:</Label>
              <Input
                placeholder="Digite seu nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label className="textLabel">Email:</Label>
              <Input
                placeholder="Digite seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label className="label-password">Senha:</Label>
              <Input
                placeholder="*******"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Select className= "select-style"
                name={role}
                optionValues={[
                  { id: "selected", title: "selecione"},
                  { id: "saloon", title: "salão" },
                  { id: "kitchen", title: "cozinha" },
                ]}
                onChange={(e) => setRole(e.target.value)}
              />
              <Button
                type="submit"
                className="button"
                btnText="Cadastrar"
                onClick={handleSubmit}
              />
            </form>
            <ErrorMessage
            disable={codeErro ? false : true}
            message={codeErro}
          />
        </div>
      </section>
    </Layout>
  );
};
