import React , { createContext, useReducer } from 'react';
import { TransectionReducer } from "../reducer/expence_tran_reducer";
import { ActionType } from "../action/actionType";

const INITIAL_TRANSECTION_STATE = [
    {
        desc:"Cash",
        amount:200,
    },
    {
        desc:"Book",
        amount:-50,
    },
    {
        desc:"Camera",
        amount:150,
    },
]

const transectionContext = createContext(INITIAL_TRANSECTION_STATE)

const TransectionProvider = ({children}) => {

    let [state , dispatch] = useReducer(TransectionReducer, INITIAL_TRANSECTION_STATE)

    function addTransection(transObj){
        dispatch({
            type : ActionType.addTransection,
            payload : transObj,
        })
    }

    return(
        <transectionContext.Provider value={{
            transection : state,
            addTransection,
        }}>
            {children}
        </transectionContext.Provider>
    );
} 

export {
    transectionContext,
    TransectionProvider,
}