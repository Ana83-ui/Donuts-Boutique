import { LOAD_INFO } from "./ListComponentAction";

const initialState = {
  products: undefined,
};

export const listComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INFO:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default listComponentReducer;
