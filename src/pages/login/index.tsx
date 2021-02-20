import React, { useState } from 'react';
import Logo from "../../img/logo.png";
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { Container, FormLogin } from './styles';
import { FiArrowRight, FiChevronsRight } from 'react-icons/fi';

const Login: React.FC = () => {

  return (
    <Container>
      <FormLogin>
        <Link to="/">
          <img src={Logo} alt="logo gama academy" />
        </Link>
        <form>
          <div className="div-form-login">
            <h3>Faça seu login</h3>
          </div>
          <input
            type="text"
            placeholder="Digite seu usuário" />

          <input
            type="password"
            placeholder="Digite sua senha" />

          <button type="submit">
            Continuar <FiArrowRight size={20} />
          </button>
          <Link to="/recoveryPass">
            <p>Esqueci minha senha<FiChevronsRight /></p>
          </Link>
          <Link to="/">
            <p>Ainda não sou cliente<FiChevronsRight /></p>
          </Link>
        </form>

      </FormLogin>
    </Container>
  )
}

export default Login;