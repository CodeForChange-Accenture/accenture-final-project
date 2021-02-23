import React, { FormEvent } from "react";
import { DashBoardTransaction } from "./style";
import api from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { IBank, IProps } from "../../../store/modules/user/types";
import {
  ReloadAccountCredit,
  ReloadAccountRemove,
} from "../../../store/modules/user/action";

const Transactions: React.FC<IProps> = ({ loginToken }: IProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IBank) => state);

  const handleTransactionUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Filtra array para saber qual será o ID da transação desejada
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento == "TU"
    );

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const valorParaNumero: number = +data.valor;

    if (valorParaNumero < 0) {
      alert("Valor inválido!");
      return;
    }

    const postData = {
      conta: state.banco.contaBanco.id,
      contaDestino: data.contaDestino,
      data: data.data,
      descricao: data.descricao,
      login: loginToken,
      planoConta: tipoMovimento[0].id,
      valor: valorParaNumero,
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
            dispatch(ReloadAccountRemove(valorParaNumero));
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

    console.log(data);
    event.currentTarget.reset();
  };

  const handleTransactionAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Filtra array para saber qual será o ID da transação desejada
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento == "TC"
    );

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const valorParaNumero: number = +data.valor;

    if (valorParaNumero < 0) {
      alert("Valor inválido!");
      return;
    }

    const postData = {
      conta: state.banco.contaBanco.id,
      data: data.data,
      descricao: data.descricao,
      login: loginToken,
      planoConta: tipoMovimento[0].id,
      valor: valorParaNumero,
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
            dispatch(ReloadAccountCredit(valorParaNumero));
          } else {
            alert("Erro na transação");
          }
        })
        .catch(() => {});
    } catch (e) {
      alert("Algo deu errado!");
    }

    event.currentTarget.reset();
  };
  return (
    <DashBoardTransaction>
      <div className="transaction-main">
        <div className="transaction-user">
          <form onSubmit={handleTransactionUser}>
            <h4>Para outro usuário</h4>
            <input type="date" name="data" />
            <input
              type="text"
              name="contaDestino"
              placeholder="Usuário destino"
            />
            <input type="text" name="descricao" placeholder="Descrição" />
            <input
              type="number"
              name="valor"
              min="0"
              step=".01"
              placeholder="Valor"
            />
            <button type="submit">Confirmar transação entre usuários</button>
          </form>
        </div>
        <div className="transaction-credit">
          <form onSubmit={handleTransactionAccount}>
            <h4>Para sua conta credito</h4>
            <input type="date" name="data" />
            <input type="text" name="descricao" placeholder="Descrição" />
            <input
              type="number"
              name="valor"
              min="0"
              step=".01"
              placeholder="Valor"
            />
            <button type="submit">Confirmar transação conta credito</button>
          </form>
        </div>
      </div>
    </DashBoardTransaction>
  );
};

export default Transactions;
