import { Reducer } from "redux";

import { IDataAccount } from "./types";

const INITIAL_STATE: IDataAccount = {
    contaBanco:{
        saldo: 10,
        id: 0,
        lancamentos: ""
    },
    contaCredito:{
        saldo: 5,
        id: 0,
        lancamentos: ""
    },
}

const AccountAct: Reducer<IDataAccount> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_ACCOUNT_INFO": {
            console.log(action.payload);
            return {...state,...action.payload}
        }
        default:{
            return state
        }
    }
}

export default AccountAct