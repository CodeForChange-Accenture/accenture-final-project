import { Reducer } from "redux";

import { IBank, IPlan } from "./types";

const INITIAL_STATE: IBank = {
    banco:{
        contaBanco: {
            saldo: 0,
            id: 0,
            lancamentos: []
          },
          contaCredito: {
            saldo: 0,
            id: 0,
            lancamentos: []
          },
    },
    plan: [{
        id: 0,
        descricao: "",
        login: "",
        tipoMovimento: "",
        padrao: true
    }]
}

const AccountAct: Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_ACCOUNT_INFO": {
            const {banco} = action.payload            
            return {...state,banco}
        }
        break;
        case "LOAD_ACCOUNT_PLANS":{
            const {plan} = action.payload  
            return {...state,plan}
        }
        break;
        default:{
            return state
        }
        break;

    }
}

export default AccountAct