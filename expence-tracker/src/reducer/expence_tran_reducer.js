import { ActionType } from "../action/actionType";

export const TransectionReducer = ((state , action) => {

    switch (action.type) {
        case ActionType.addTransection :
            return [action.payload, ...state]
        default:
            return state
    }
})