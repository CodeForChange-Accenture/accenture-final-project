import React from 'react';
import logoHandGama from "../../img/logoHandGama.png"
import {DashBoardPage} from "./style"
import {FiCommand} from 'react-icons/fi';

const DashBoard: React.FC = () => {
  return (
    <DashBoardPage>
      <div className="side-bar">
        <img src={logoHandGama} alt="Green logo Gama"/>
        <div>          
          <FiCommand size={30}/>
          <p>
          Depósitos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
          Planos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
            Pagamentos
          </p>
        </div>
        <div>
          <FiCommand size={30}/>
          <p>
          Transações
          </p>
        </div>
      </div>
      <div className="main">
        <div className="main-message">
          <p>Olá <b>Usuário</b>, seja bem vindo!</p>
        </div>
        <div className="main-board">
          <div className="balance-infos">
            <div className="account">
              <span>Conta</span>
            </div>
            <div className="credit">
              <span>Conta crédito</span>
            </div>
          </div>
          <div className="last-sent">
            <span>Ultimos lançamentos</span>
          </div>
        </div>
      </div>
    </DashBoardPage>
  );
}

export default DashBoard;