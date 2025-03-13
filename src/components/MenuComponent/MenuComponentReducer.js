import { MENU_OPTION } from "./MenuComponentAction";

const initialState = {
  menuOption: "",
};

export const menuComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OPTION:
      return {
        ...state,
        menuOption: action.payload.menuOption,
      };
    default:
      return state;
  }
};

export default menuComponentReducer;
