import { Reducer } from "redux";

import { IBank, IDataAccount } from "./types";

const INITIAL_STATE: IBank = {
    banco:{
        contaBanco:{
            saldo: 0,
            id: 0,
            lancamentos: ""
        },
        contaCredito:{
            saldo: 0,
            id: 0,
            lancamentos: ""
        }
    }
}

const AccountAct: Reducer<IBank | any> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD_ACCOUNT_INFO": {
            const {banco} = action.payload            
            return {...state.banco,banco}
        }
        default:{
            return state
        }
    }
}

export default AccountAct