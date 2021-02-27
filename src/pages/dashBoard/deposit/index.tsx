import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { ReloadAccountAdd } from "../../../store/modules/user/action";
import { IBank, IProps } from "../../../store/modules/user/types";
import { DashBoardDeposit } from "./style";
import CurrencyInput from "react-currency-masked-input";

const Deposit: React.FC<IProps> = ({ loginToken }: IProps) => {
  const state = useSelector((state: IBank) => state);
  const dispatch = useDispatch();

  const handlePlanoConta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //Filtra array para saber qual será o ID da transação desejada
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento === "R"
    );

    const data = Object.fromEntries(new FormData(event.currentTarget));

    const valorParaNumero: number = +data.valor;

    if (+data.valor < 0) {
      toast.error("Valor inválido!");
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
    const inputReset: any = document.getElementById("valorInp");

    try {
      api
        .post(`lancamentos`, postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Depósito realizado com sucesso!");
            dispatch(ReloadAccountAdd(valorParaNumero));
            inputReset.value = "";
          } else {
            toast.error("Erro no depósito");
          }
        })
        .catch(() => {
          toast.error("Erro no depósito!");
        });
    } catch (e) {
      toast.error("Erro no depósito!");
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
          <CurrencyInput
            type="number"
            name="valor"
            placeholder="Valor"
            id="valorInp"
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
