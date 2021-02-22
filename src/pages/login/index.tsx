import React, { useState, FormEvent, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowRight, FiChevronsRight } from "react-icons/fi";

import api from "../../services/api";

import Logo from "../../img/logo.png";
import { Container, FormLogin, Header } from "./styles";

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

  function loginSys(event: FormEvent<HTMLFormElement>) {
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
      <Header>
        <Link to="/">
          <img src={Logo} alt="logo gama academy" />
        </Link>
      </Header>
      <FormLogin>
        <form onSubmit={loginSys}>
          <div className="div-form-login">
            <h3>Faça seu login</h3>
          </div>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Digite seu usuário"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
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
