import { createContext, useReducer } from "react";
import { ShoeStoreReducer } from '../reducer/shoeStoreReducer'

const INITIALSTATE = {
    cart: [],
}

const CombineContext = createContext(INITIALSTATE)

const ShoeStoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ShoeStoreReducer, INITIALSTATE)
    // console.log("state =>", state)

    function handleChange(obj) {
        dispatch(obj)
    }

    return (
        <CombineContext.Provider value={{
            state,
            handleChange,
        }}>
            {children}
        </CombineContext.Provider>
    );
}

export {
    INITIALSTATE,
    CombineContext,
    ShoeStoreProvider,
}