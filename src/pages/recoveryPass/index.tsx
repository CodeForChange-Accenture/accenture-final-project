import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { toast } from "react-toastify";

import { RecoveryStyle } from "./style";
import { FiArrowRight } from "react-icons/fi";

import api from "../../services/api";

const RecoveryPass: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [recovered, setRecovered] = useState(false);

  function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const postData = {
      login: user,
      email: "matheus@matheus.com",
    };

    const postData1 = {
      usuario: user,
      senha: password,
    };
    if (password === "" || password !== confirmPass || user === "") {
      toast.error("As senhas não são compativeis ou estão inválidas");
      return;
    } else {
      api
        .post(`nova-senha`, postData)
        .then((response) => {
          api.post("altera-senha", postData1, {
            params: { senhaTemporaria: response.data },
          });
        })
        .then(() => {
          toast.success("A Nova senha foi definida");
          setRecovered(true);
        })
        .catch((e) =>
          toast.error("As senhas não são compativeis ou estão inválidas")
        );
    }
  }
  return (
    <RecoveryStyle>
      <header>
        <Link to="/">
          <img className="logo-gama" src={Logo} alt="" />
        </Link>
      </header>

      <div>
        <form onSubmit={createAccount}>
          <h3 className="title-recovery">Esqueci minha senha</h3>
          <p id="subtitle-recovery">
            Confirme seu Usuário e escolha sua nova senha.
          </p>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Confirme seu Usuário"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua nova senha"
          />
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirme sua nova senha"
          />
          <button type="submit">
            Enviar
            <FiArrowRight size={20} />
          </button>
          {recovered && (
            <Link to="/login">
              <p>
                Acessar Gama Bank
                <FiArrowRight />
              </p>
            </Link>
          )}
        </form>
      </div>
    </RecoveryStyle>
  );
};

export default RecoveryPass;
