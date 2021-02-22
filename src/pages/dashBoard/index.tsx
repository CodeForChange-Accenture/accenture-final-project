import React, { useCallback, useEffect, useState } from "react";
import logoHandGama from "../../img/logoHandGama.png";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { IBank } from "../../store/modules/user/types";

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

import Deposit from "./deposit";
import Transactions from "./transactions";
import Payment from "./payments";
import Plans from "./plans";

import jwt_decode from "jwt-decode";
import { IUser } from "../../store/modules/user/types";

const DashBoard: React.FC = () => {
  const history = useHistory();
  const [bankAction, setBankAction] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: IBank) => state);
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
          payload: { banco: response.data },
        });
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
          <div onClick={() => setBankAction("deposit")}>
            <FiCommand size={30} />
            <p>Depósitos</p>
          </div>
          <div onClick={() => setBankAction("plan")}>
            <FiCommand size={30} />
            <p>Planos</p>
          </div>
          <div onClick={() => setBankAction("payments")}>
            <FiCommand size={30} />
            <p>Pagamentos</p>
          </div>
          <div onClick={() => setBankAction("transactions")}>
            <FiCommand size={30} />
            <p>Transações</p>
          </div>
        </SideBar>
        <Main>
          <div className="main-message">
            <div>
              <p>
                Olá <b>{login}</b>, seja bem vindo!
              </p>
            </div>
            <div>
              <FiEye size={35} />
            </div>
          </div>
          <div className="main-board">
            {bankAction == "deposit" && <Deposit />}
            {bankAction == "transactions" && <Transactions />}
            {bankAction == "payments" && <Payment />}
            {bankAction == "plan" && <Plans />}
            <div className="balance-infos">
              <div className="account">
                <label>
                  <FiDollarSign size={30} />
                  Conta
                </label>
                <div className="account-balance">
                  <label>Saldo disponivel</label>
                  <h2>R$: {state.banco.contaBanco.saldo}</h2>
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
                  <h2>R$: {state.banco.contaCredito.saldo}</h2>
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
