import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../services/api";
import { IBank } from "../../../store/modules/user/types";
import { DashBoardDeposit } from "./style";
// import { Container } from './styles';

interface IProps {
  loginToken?: string;
}

const Deposit: React.FC<IProps> = ({ loginToken }: IProps) => {
  const state = useSelector((state: IBank) => state);
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<any>(0);

  const handlePlanoConta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento == "R"
    );

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
          } else {
            alert("Erro no deposito");
          }
        });
    } catch (e) {
      alert("Algo deu errado!");
    }
  };

  return (
    <DashBoardDeposit>
      <h3>Deposito</h3>
      <div>
        <div>
          <form onSubmit={handlePlanoConta}>
            <input onChange={(e) => setData(e.target.value)} type="date" />
            <input
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              placeholder="Descrição"
            />
            <input
              onChange={(e) => setValor(e.target.value)}
              type="text"
              placeholder="Valor"
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
