import { IBank } from "./types"

export function AddAccountInfos(banco: IBank){
    return{
        type: "ADD_ACCOUNT_INFO",
        payload:{
            banco
        }
    }
}

export function LoadAccountPlans(plan: IBank){
    return{
        type: "LOAD_ACCOUNT_PLANS",
        payload:{
            plan
        }
    }
}