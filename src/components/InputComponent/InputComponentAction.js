export const DETAIL = "DETAIL";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const loadDetail = (donut) => {
  return {
    type: DETAIL,
    payload: donut,
  };
};

export const updateItemProduct = (payload) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
  };
};

export const addItemProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
