import {IBank, IDataAccount} from "./types";

export function AddAccountInfos(banco: IBank){
    return{
        type: "ADD_ACCOUNT_INFO",
        payload:{
            banco:{}
        }
    }
}