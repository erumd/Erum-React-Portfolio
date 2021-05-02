import React, { createContext, useReducer, useContext } from "react"
import { themeReducer } from './reducers'
import { LIGHT, DARK } from '../constants/theme'

const now = new Date();

const StoreContext = createContext();
const { Provider } = StoreContext;

const defaultState = {
  theme: (now.getHours() > 6 && now.getHours() < 20) ? LIGHT : DARK,
}

const ThemeProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(themeReducer, defaultState)

  return <Provider value={[state, dispatch]} {...props} />;
}

const useThemeContext = () => {
  return useContext(StoreContext);
}

export { ThemeProvider, useThemeContext }