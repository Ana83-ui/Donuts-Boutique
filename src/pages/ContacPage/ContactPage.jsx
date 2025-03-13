import React from "react";
import { useNavigate } from "react-router";
import caseros from "../../assets/imagenes/caseros.jpg";

const ContactPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-contact">
      <div className="btn-back-contact">
        <button className="back-btn-contact" onClick={goToHome}>Volver</button>
      </div>
      <div>
        <div className="contact">
          <div className="locate">
            <h2 className="title-contact">Donde los donuts se hacen realidad...</h2>
            <div>
              <h2 className="title-contact-2">Pastelería Donutopia</h2>
            </div>
            <div className="locate-contact">
              <span className="title-id">Dirección: </span>
              <span>Calle del Azúcar 123, Local 4 </span>
            </div>
            <div className="locate-contact">
              <span className="title-id">Ciudad: </span>
              <span>Madrid</span>
            </div>
            <div className="locate-contact">
              <span className="title-id">Email: </span>
              <span>info@pasteleria_donutopia.com </span>
            </div>
            <div className="locate-contact">
              <span className="title-id">Nuestro horario: </span>
              <span>De Lunes a Viernes: 10:00h - 20:00h</span>

              <p className="horario">Sábados: 10:00h - 15:00h</p>
            </div>
          </div>

          <div>
            <img src={caseros} className="img-contact" alt="imagen de varios donuts caseros decorados con chocolate y almendras frescas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
