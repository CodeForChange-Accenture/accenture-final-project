import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { ErrorStyle } from'./style';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';


const Error: React.FC = () => {
  return (
    <ErrorStyle>
      <header>
      <Link to="/">
        <img className="logo-gama" src={Logo} alt=""/>
      </Link>
      </header>
    
      <form>
        <FiAlertTriangle id="Triangle" color=' #8C52E5' size={120} />
        <h3 className="title-error">
            Oops, algo deu errado! Confime seus dados e tente novamente!
        </h3>
        <Link to="/">
            <button type="submit">Voltar<FiArrowLeft size={20}/></button>
        </Link> 
      </form>
    </ErrorStyle>
  );
  }

export default Error;