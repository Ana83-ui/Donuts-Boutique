import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="container-header">
        <div className="header">
          <h1 className="title-h1">Donut's Boutique</h1>
        </div>
      </div>

      <div>{children}</div>

      <div className="footer">
        <p className="title-footer"> Sitio web creado por &copy; Donut&Co </p>
      </div>
    </div>
  );
};

export default HomeLayout;
