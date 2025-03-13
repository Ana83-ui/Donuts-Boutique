export const MENU_OPTION = "MENU_OPTION";

export const changeMenuOption = (payload) => {
  return {
    type: MENU_OPTION,
    payload,
  };
};
