import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../services/api";
import {
  AddAccountInfos,
  ReloadAccount,
} from "../../../store/modules/user/action";
import { IBank, IProps } from "../../../store/modules/user/types";
import { DashBoardDeposit } from "./style";
// import { Container } from './styles';

const Deposit: React.FC<IProps> = ({ loginToken }: IProps) => {
  const state = useSelector((state: IBank) => state);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<number>(0);
  const dispatch = useDispatch();

  const handlePlanoConta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento == "R"
    );
    if (valor < 0) {
      setValor(0);
      return;
    }
    const postData = {
      conta: state.banco.contaBanco.id,
      data: data,
      descricao: descricao,
      login: loginToken,
      planoConta: tipoMovimento[0].id,
      valor: valor,
    };

    try {
      api
        .post(`lancamentos`, postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          if (response.status == 200) {
            dispatch(ReloadAccount(valor));
          } else {
            alert("Erro no deposito");
          }
        })
        .catch(() => {
          console.log(state.banco.contaBanco.saldo);
        });
    } catch (e) {
      alert("Algo deu errado!");
    }
    setData("");
    setDescricao("");
    setValor(0);
  };

  return (
    <DashBoardDeposit>
      <h3>Deposito</h3>
      <div>
        <div>
          <form onSubmit={handlePlanoConta}>
            <input
              onChange={(e) => setData(e.target.value)}
              type="date"
              value={data}
            />
            <input
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              placeholder="Descrição"
              value={descricao}
            />
            <input
              onChange={(e) => setValor(+e.target.value)}
              type="number"
              placeholder="Valor"
              value={valor}
              min="0"
            />
            <div>
              <button type="submit">Confirmar deposito</button>
            </div>
          </form>
        </div>
      </div>
    </DashBoardDeposit>
  );
};

export default Deposit;
