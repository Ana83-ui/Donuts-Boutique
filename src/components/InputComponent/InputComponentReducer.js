import { DETAIL, UPDATE_PRODUCT, ADD_PRODUCT } from "./InputComponentAction";

const initialState = {
  donutDetail: {},
  updateItem: undefined,
  product: [],
};

export const inputComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL:
      return {
        ...state,
        donutDetail: action.payload,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateItem: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    default:
      return state;
  }
};

export default inputComponentReducer;
