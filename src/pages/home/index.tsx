import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import { FiArrowRight } from "react-icons/fi";

import { HomePage } from "./style";
import Logo from "../../img/logo.png";

import api from "../../services/api";
import SectionB from "./sectionB";
import SectionC from "./sectionC";
import SectionD from "./sectionD";
import SectionE from "./sectionE";

const Home: React.FC = () => {
  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const postData = {
      cpf,
      nome: name,
      login: userName,
      senha: password,
    };

    if (password !== confirmPass) {
      alert("Confirm pass");
      return;
    }

    try {
      api.post(`usuarios`, postData).then((response) => {
        if (response.status == 200) {
          history.push("/login");
        } else {
          alert("Erro no cadastro");
        }
      });
    } catch (e) {
      alert("Algo deu errado!");
    }
  }

  return (
    <HomePage>
      <div className="home">
        <Link to="/">
          <img className="logo-gama" src={Logo} alt="" />
        </Link>
        <div className="middle-div">
          <div className="access-div">
            <h2>Gama Bank é um projeto de nossos alunos.</h2>
            <h2>Já tem conta?</h2>
            <Link to="/login">
              <button>
                Acessar <FiArrowRight size={20} />
              </button>
            </Link>
          </div>
          <div className="signup-div">
            <div>
              <h4>Peça sua conta e cartão de crédito Gama Bank</h4>
            </div>
            <form onSubmit={createAccount}>
              <InputMask
                mask="999.999.999-99"
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
                placeholder="Digite seu CPF"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
              />
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nome do usuário"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirme sua senha"
              />
              <button type="submit">
                Continuar <FiArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </HomePage>
  );
};

export default Home;
