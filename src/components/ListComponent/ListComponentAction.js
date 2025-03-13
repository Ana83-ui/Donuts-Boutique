export const LOAD_INFO = "LOAD_INFO";

export const getProducts = (payload) => {
  return {
    type: LOAD_INFO,
    payload,
  };
};
