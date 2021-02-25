import React from "react";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { HomePage } from "./style";
import Logo from "../../img/logo.png";

import api from "../../services/api";
import SectionB from "./sectionB";
import SectionC from "./sectionC";
import SectionD from "./sectionD";
import SectionE from "./sectionE";

type Inputs = {
  cpf: string;
  name: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

const Home: React.FC = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, getValues } = useForm<Inputs>();

  function createAccount(data: Inputs) {
    const postData = {
      cpf: data.cpf.replace(/[^\d]/g, ""),
      nome: data.name,
      login: data.userName,
      senha: data.password,
    };

    api
      .post(`usuarios`, postData)
      .then((response) => {
        if (response.status === 200) {
          history.push("/login");
        } else {
          toast.error("Erro no cadastro!");
        }
      })
      .catch(() => {
        toast.error("Algo deu errado!");
      });
  }

  return (
    <HomePage>
      <ToastContainer />
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
            <form onSubmit={handleSubmit(createAccount)}>
              {errors.cpf && (
                <span className="form-error">Esse campo é obrigatório</span>
              )}
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                ref={register({ required: true }) as any}
                placeholder="Digite seu CPF"
                required={true}
              />
              {errors.name && (
                <span className="form-error">Esse campo é obrigatório</span>
              )}
              <input
                type="text"
                name="name"
                ref={register({ required: true })}
                placeholder="Nome completo"
                required={true}
              />
              {errors.userName && (
                <span className="form-error">Esse campo é obrigatório</span>
              )}
              <input
                type="text"
                name="userName"
                ref={register({ required: true })}
                placeholder="Nome do usuário"
                required={true}
              />
              {errors.password && (
                <span className="form-error">Esse campo é obrigatório</span>
              )}
              <input
                type="password"
                name="password"
                ref={register({ required: true })}
                placeholder="Digite sua senha"
                required={true}
              />
              {errors.confirmPassword && (
                <span className="form-error">As senhas não correspondem</span>
              )}
              <input
                type="password"
                name="confirmPassword"
                ref={
                  register({
                    required: true,
                    validate: (value) => value === getValues("password"),
                  }) as any
                }
                placeholder="Confirme sua senha"
                required={true}
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
