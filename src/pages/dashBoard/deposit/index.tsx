import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../services/api";
import { ReloadAccountAdd } from "../../../store/modules/user/action";
import { IBank, IProps } from "../../../store/modules/user/types";
import { DashBoardDeposit } from "./style";

const Deposit: React.FC<IProps> = ({ loginToken }: IProps) => {
  const state = useSelector((state: IBank) => state);
  const dispatch = useDispatch();

  const handlePlanoConta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Filtra array para saber qual será o ID da transação desejada
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento == "R"
    );

    const data = Object.fromEntries(new FormData(event.currentTarget));

    const valorParaNumero: number = +data.valor;

    if (+data.valor < 0) {
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
            dispatch(ReloadAccountAdd(valorParaNumero));
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

    event.currentTarget.reset();
  };

  return (
    <DashBoardDeposit>
      <h3>Depósito</h3>
      <div>
        <form onSubmit={handlePlanoConta}>
          <input type="date" name="data" defaultValue="" />
          <input type="text" placeholder="Descrição" name="descricao" />
          <input
            type="number"
            placeholder="Valor"
            min="0"
            name="valor"
            step=".01"
          />
          <div>
            <button type="submit">Confirmar depósito</button>
          </div>
        </form>
      </div>
    </DashBoardDeposit>
  );
};

export default Deposit;
