import React from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useNavigate } from "react-router";
import abby from "../../assets/imagenes/abby.jpg";
const CreatePage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="volver">
        <button className="back-btn" onClick={goToHome}>Volver</button>
      </div>
      <div className="creacion">
        <div>
          <img className="img-create" src={abby} alt="imagen de donuts de chocolate sobre una tabla  de madera"
          />
        </div>
        <InputComponent />
      </div>
    </div>
  );
};

export default CreatePage;
