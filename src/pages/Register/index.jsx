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
    // mostrar o erro
  };
  return (
    <Layout>
      <section className="all-content">
        <form>
          <Input
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="*******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Select
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
            btnText="cadastrar"
            onClick={handleSubmit}
          />
        </form>
        <ErrorMessage
          disable={codeErro ? false : true}
          message={codeErro}
          />
      </section>
    </Layout>
  );
};
