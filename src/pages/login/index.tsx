import React, { useState, FormEvent, useEffect } from "react";
import Logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import { Container, FormLogin } from "./styles";
import { FiArrowRight, FiChevronsRight } from "react-icons/fi";

interface IToken {
  storage: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [storage, setStorage] = useState<IToken>((): any => {
    let storageToken = () => localStorage.getItem("@tokenApp");
    return storageToken();
  });

  useEffect(() => {
    !!storage ? history.push("/dashboard") : localStorage.clear();
  }, [storage]);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData = {
      usuario: login,
      senha: password,
    };

    api.post(`login`, postData).then((response) => {
      console.log(response.data);
      localStorage.setItem("@tokenApp", response.data.token);
      history.push("/dashboard");
    });
  }
  return (
    <Container>
      <FormLogin>
        <Link to="/">
          <img src={Logo} alt="logo gama academy" />
        </Link>
        <form onSubmit={handleLogin}>
          <div className="div-form-login">
            <h3>Faça seu login</h3>
          </div>

          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Digite seu usuário"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />

          <button type="submit">
            Continuar <FiArrowRight size={20} />
          </button>
          <Link to="/recoveryPass">
            <p>
              Esqueci minha senha
              <FiChevronsRight />
            </p>
          </Link>
          <Link to="/">
            <p>
              Ainda não sou cliente
              <FiChevronsRight />
            </p>
          </Link>
        </form>
      </FormLogin>
    </Container>
  );
};

export default Login;
