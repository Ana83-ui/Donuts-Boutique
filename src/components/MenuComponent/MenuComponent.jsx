import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuOption } from "./MenuComponentAction";
import WelcomeComponent from "../Welcome/WelcomeComponent";
import CreatePage from "../../pages/CreatePage/CreatePage";
import ListPage from "../../pages/ListPage/ListPage";
import ContactPage from "../../pages/ContacPage/ContactPage";
import { useLocation, useNavigate } from "react-router";

const MenuComponent = () => {
  const menuOption = useSelector(
    (state) => state.menuComponentReducer.menuOption
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(changeMenuOption({ menuOption: "" }));
    }
  }, [location, dispatch]);

  const menuOptionsHandler = (option) => {
    dispatch(
      changeMenuOption({
        menuOption: option,
      })
    );
  };

  return (
    <div>
      <div className="btn-home">
        <div>
          <button className="btn-action" onClick={() => { menuOptionsHandler("CREATE"); navigate("/crear");}}>Añadir producto</button>
          <button className="btn-action" onClick={() => { menuOptionsHandler("LIST"); navigate("/lista");}}>Explora el Mundo Donut</button>
          <button className="btn-action" onClick={() => { menuOptionsHandler("CONTACT"); navigate("/contacto");}}>¿Dónde estamos?</button>
        </div>
      </div>
      <div className="menu_container">
        <div>
          {menuOption === "CREATE" ? (
            <CreatePage />
          ) : menuOption === "LIST" ? (
            <ListPage />
          ) : menuOption === "CONTACT" ? (
            <ContactPage />
          ) : (
            <div>
              <WelcomeComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
