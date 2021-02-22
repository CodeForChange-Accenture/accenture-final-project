import React from "react";
import { DashBoardPlan } from "./style";
import { useSelector } from "react-redux";
import { IBank } from "../../../store/modules/user/types";

// import { Container } from './styles';

const Plans: React.FC = () => {
  const state = useSelector((state: IBank) => state.plan);

  return (
    <DashBoardPlan>
      <div>
        <h3>Planos</h3>
        {state.map((plans, index) => (
          <section key={index}>
            <p>Conta: {plans.login}</p>
            <p>ID: {plans.id}</p>
            <p>Descrição: {plans.descricao}</p>
            <p>Tipo de movimento: {plans.tipoMovimento}</p>
          </section>
        ))}
      </div>
    </DashBoardPlan>
  );
};

export default Plans;
