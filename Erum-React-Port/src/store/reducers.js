import { TOGGLE_THEME, ADD, SUBTRACT } from './actions'
import { DARK, LIGHT } from '../constants/theme'


export const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const theme = (state.theme === LIGHT) ? DARK : LIGHT
      return {
        ...state,
        theme,
      };

  default:
    return state;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
  case ADD:
    return {
      ...state,
      count: state.count + 1
    };
  
  case SUBTRACT:
    return {
      ...state,
      count: state.count - 1
    };

  default:
    return state;
  }
};