export function AddAccountInfos(){
    return{
        type: "ADD_ACCOUNT_INFO",
        payload:{
            banco:{}
        }
    }
}

export function LoadAccountPlans(){
    return{
        type: "LOAD_ACCOUNT_PLANS",
        payload:{
            plan:{}
        }
    }
}