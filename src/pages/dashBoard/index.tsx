import React, { useEffect, useState } from "react";
import logoHandGama from "../../img/logoHandGama.png";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { IBank } from "../../store/modules/user/types";
import {
  AddAccountInfos,
  LoadAccountPlans,
} from "../../store/modules/user/action";

import { DashBoardPage, SideBar, Main } from "./style";
import {
  FiDollarSign,
  FiCreditCard,
  FiEye,
  FiEyeOff,
  FiLogOut,
  FiMaximize2,
  FiBook,
  FiCornerDownRight,
} from "react-icons/fi";
import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import Deposit from "./deposit";
import Transactions from "./transactions";
import Plans from "./plans";

import jwt_decode from "jwt-decode";
import { IUser } from "../../store/modules/user/types";

const formatMoney = (value: number) => {
  return new Intl.NumberFormat().format(value);
};

const DashBoard: React.FC = () => {
  const history = useHistory();
  const [bankAction, setBankAction] = useState("");
  const [visible, setVisible] = useState(true);
  const [inicio, setInicio] = useState("2021-01-01");
  const [fim, setFim] = useState("2021-02-22");

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
      toast.error("Erro autenticação");
    }
  };

  const login = TokenDecodedValue();

  useEffect(() => {
    async function loadBankInfo() {
      await api
        .get(`dashboard?fim=${fim}&inicio=${inicio}&login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          dispatch(AddAccountInfos(response.data));
        })
        .catch((e) => {
          localStorage.clear();
          toast.error("Ops, sua sessão está inspirada.");
          history.push("/login");
        });
    }

    async function loadAccount() {
      await api
        .get(`/lancamentos/planos-conta?login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          dispatch(LoadAccountPlans(response.data));
        });
    }
    loadBankInfo();
    loadAccount();
  }, [inicio, fim]);

  return (
    <>
      <DashBoardPage>
        <SideBar>
          <img src={logoHandGama} alt="Green logo Gama" />
          <div onClick={() => setBankAction("deposit")}>
            <FiCornerDownRight size={30} />
            <p>Depósitos</p>
          </div>
          <div onClick={() => setBankAction("plan")}>
            <FiBook size={30} />
            <p>Planos</p>
          </div>
          <div onClick={() => setBankAction("transactions")}>
            <FiMaximize2 size={30} />
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
            <div className="eye-visible">
              <div onClick={() => setVisible(!visible)}>
                {visible ? <FiEye size={35} /> : <FiEyeOff size={35} />}
              </div>
              <div>
                <Link to="/">
                  <FiLogOut onClick={() => localStorage.clear()} size={35} />
                </Link>
              </div>
            </div>
          </div>
          <div className="main-board">
            {bankAction === "deposit" && <Deposit loginToken={login} />}
            {bankAction === "transactions" && (
              <Transactions loginToken={login} />
            )}
            {bankAction === "plan" && <Plans />}
            <div className="balance-infos">
              <div className="account">
                <label className="icon-center">
                  <FiDollarSign size={30} />
                  Conta
                </label>
                <div className="account-balance">
                  <label>Saldo disponível</label>
                  <h2>
                    {visible
                      ? `R$: ${formatMoney(state.banco.contaBanco.saldo)}`
                      : `*****`}
                  </h2>
                  <br />
                  <label>Limite disponível:</label>
                  <h2>{visible ? `R$: 2.120,21` : `*****`}</h2>
                </div>
              </div>
              <div className="credit">
                <label className="icon-center">
                  <FiCreditCard size={30} /> Conta crédito
                </label>
                <div className="credit-balance">
                  <label>Fatura atual</label>
                  <h2>
                    {visible
                      ? `R$: ${state.banco.contaCredito.saldo}`
                      : `*****`}
                  </h2>
                  <br />
                  <label>Limite disponível:</label>
                  <h2>{visible ? `R$: 9.120,88` : `*****`}</h2>
                </div>
              </div>
            </div>
            <div className="last-sent">
              <div className="date-ranges">
                <div className="title-historic">
                  <label className="icon-center">
                    <FiDollarSign size={30} /> Últimos lançamentos
                  </label>
                </div>
                <div>
                  <label>Início:</label>
                  <input
                    value={inicio}
                    onChange={(e) => setInicio(e.target.value)}
                    type="date"
                  />
                </div>
                <div>
                  <label>Fim:</label>
                  <input
                    value={fim}
                    onChange={(e) => setFim(e.target.value)}
                    type="date"
                  />
                </div>
              </div>
              {/* Repeat when the api is consumed */}
              {state.banco.contaBanco.lancamentos.map((lancamentos, index) => (
                <div key={index} className="historic">
                  <div className="historic-list">
                    <h4>{lancamentos.descricao}</h4>
                    <label>GamaAcademy</label>
                    <h2>R$ {formatMoney(lancamentos.valor)}</h2>
                  </div>
                  <div className="historic-day">
                    <label>{lancamentos.data}</label>
                  </div>
                </div>
              ))}
              {/*  */}
            </div>
          </div>
        </Main>
      </DashBoardPage>
    </>
  );
};

export default DashBoard;
