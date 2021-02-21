import React, { useEffect } from "react";
import logoHandGama from "../../img/logoHandGama.png";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";

import { IUser } from "../../store/modules/user/types";

import { DashBoardPage, SideBar, Main } from "./style";
import {
  FiCommand,
  FiDollarSign,
  FiCreditCard,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import api from "../../services/api";

import { useHistory } from "react-router-dom";
import AccountAct from "../../store/modules/user/reducer";

const DashBoard: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const TokenStorage = null || localStorage.getItem("@tokenApp");

  const TokenDecodedValue = () => {
    if (TokenStorage) {
      const TokenArr = TokenStorage.split(" ");
      const TokenDecode = TokenArr[1];
      const decoded = jwt_decode<IUser>(TokenDecode);
      return decoded.sub;
    } else {
      alert("err");
    }
  };

  const login = TokenDecodedValue();

  useEffect(() => {
    api
      .get(`dashboard?fim=2021-02-18&inicio=2021-02-18&login=${login}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("@tokenApp"),
        },
      })
      .then((response) => {
        dispatch({
          type: "ADD_ACCOUNT_INFO",
          payload: { asd: response.data },
        });
        console.log(response.data);
      })
      .catch((e) => {
        localStorage.clear();
        toast.error("Ops, sua sessão está inspirada.");
        history.push("/login");
      });
  }, []);
  return (
    <>
      <DashBoardPage>
        <SideBar>
          <img src={logoHandGama} alt="Green logo Gama" />
          <div>
            <FiCommand size={30} />
            <p>Depósitos</p>
          </div>
          <div>
            <FiCommand size={30} />
            <p>Planos</p>
          </div>
          <div>
            <FiCommand size={30} />
            <p>Pagamentos</p>
          </div>
          <div>
            <FiCommand size={30} />
            <p>Transações</p>
          </div>
        </SideBar>
        <Main>
          <div className="main-message">
            <div>
              <p>
                Olá <b>Usuário</b>, seja bem vindo!
              </p>
            </div>
            <div>
              <FiEye size={35} />
            </div>
          </div>
          <div className="main-board">
            <div className="balance-infos">
              <div className="account">
                <label>
                  <FiDollarSign size={30} />
                  Conta
                </label>
                <div className="account-balance">
                  <label>Saldo disponivel</label>
                  <h2>R$: 10.000,00</h2>
                  <br />
                  <label>Limite disponivel:</label>
                  <h2>R$: 2.120,21</h2>
                </div>
              </div>
              <div className="credit">
                <label>
                  <FiCreditCard size={30} /> Conta crédito
                </label>
                <div className="credit-balance">
                  <label>Fatura atual</label>
                  <h2>R$: 120,88</h2>
                  <br />
                  <label>Limite disponivel:</label>
                  <h2>R$: 9.120,88</h2>
                </div>
              </div>
            </div>
            <div className="last-sent">
              <label>
                <FiDollarSign size={30} />
                Ultimos lançamentos
              </label>
              {/* Repeat when the api is consumed */}
              <div className="historic">
                <div className="historic-list">
                  <h4>Compra no debito</h4>
                  <label>GamaAcademy</label>
                  <h2>R$: 298,55</h2>
                </div>
                <div className="historic-day">
                  <label>Dia 24 de Jan.</label>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </Main>
      </DashBoardPage>
    </>
  );
};

export default DashBoard;
