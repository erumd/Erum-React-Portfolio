import React, { createContext, useReducer, useContext } from "react"
import { reducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const defaultState = {
  count: 0
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext }