import { useState } from "react";
import "./style.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { userLogin } from "../../services/api";
import { Label } from "../../components/Label";
import image from "../../img/logo-hamburger.png";
import { statusError } from "../../services/error";
import { setToken } from "../../services/token";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeErro, setErro] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    userLogin(email, password)
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
          <img src={image} alt="logo" />
        </figure>
        <h1 className="text-form"> Acesse sua conta </h1>
        <div className="container">
          <form className="form-container">
            <Label className="text-label">Email:</Label>
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
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="button" btnText="Entrar" onClick={handleClick} />
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
