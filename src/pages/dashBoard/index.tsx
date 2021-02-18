import React from 'react';
import logoHandGama from "../../img/logoHandGama.png"
import {DashBoardPage} from "./style"
import {FiCommand, FiDollarSign, FiCreditCard} from 'react-icons/fi';

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
              <label><FiDollarSign size={30}/>Conta</label>
                <div className="account-balance">
                  <label>Saldo disponivel</label>
                  <h2>R$: 10.000,00</h2>
                  <br/>
                  <label>Limite disponivel:</label>
                  <h2>R$: 2.120,21</h2>
                </div>
            </div>
            <div className="credit">
              <label><FiCreditCard size={30}/> Conta crédito</label>
                <div className="credit-balance">
                  <label>Fatura atual</label>
                  <h2>R$: 120,88</h2>
                  <br/>
                  <label>Limite disponivel:</label>
                  <h2>R$: 9.120,88</h2>
                </div>
              </div>
          </div>
          <div className="last-sent">
            <label><FiDollarSign size={30}/>Ultimos lançamentos</label>
            {/* Repeat when the api is consumed */}
            <div className="historic">
              <div className="historic-list">
                <h4>Compra no debito</h4>
                <label>GamaAcademy</label>
                <h2>R$: 298,55</h2>
              </div>
              <div className="historic-day">
                <label>Dia  24 de Jan.</label>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </DashBoardPage>
  );
}

export default DashBoard;