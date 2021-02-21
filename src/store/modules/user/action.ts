import {IDataAccount} from "./types";

export function AddAccountInfos(asd: IDataAccount){
    return{
        type: "ADD_ACCOUNT_INFO",
        payload:{
            asd: {}
        }
    }
}