import React, { useEffect } from "react";
import { DashBoardPlan } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { IBank } from "../../../store/modules/user/types";
import api from "../../../services/api";
import jwt_decode from "jwt-decode";
import { IUser } from "../../../store/modules/user/types";

// import { Container } from './styles';

const Plans: React.FC = () => {
  const state = useSelector((state: IBank) => state);
  console.log(state);
  const dispatch = useDispatch();
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
      .get(`/lancamentos/planos-conta?login=${login}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("@tokenApp"),
        },
      })
      .then((response) => {
        dispatch({
          type: "LOAD_ACCOUNT_PLANS",
          payload: { plan: response.data },
        });
      });
  }, []);
  return (
    <DashBoardPlan>
      <p>Plans</p>
    </DashBoardPlan>
  );
};

export default Plans;
