import { ActionType } from "../action/actionType";

export const ShoeStoreReducer = ((state, action) => {

    switch (action.type) {
        case ActionType.addToCart:
            return (
                {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            )
        case ActionType.removeToCart:
            return (
                {
                    ...state,
                    cart: state.cart.filter((data) => data.key !== action.payload)
                }
            )
        case ActionType.allRemoveToCart:
            return (
                {
                    ...state,
                    cart: []
                }
            )
        case ActionType.changeQuantityValue:
            return (
                {
                    ...state,
                    cart: state.cart.filter((data) => (data.key === action.payload.key) ? data.quantity = action.payload.quantity : data.quantity)
                }
            )
        default:
            return state
    }
})