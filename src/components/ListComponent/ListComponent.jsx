import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../core/redux/service/productFetch";
import { getProducts } from "./ListComponentAction";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import WelcomeComponent from "../Welcome/WelcomeComponent";

const ListComponent = () => {
  const products = useSelector((state) => state.listComponentReducer.products);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const productsAll = async () => {
    const products = await getAllProducts();
    dispatch(getProducts(products));
    setIsLoading(false);
  };

  useEffect(() => {
    productsAll();
  }, [dispatch]);

  const toggleFavorite = (_id) => {
    dispatch(addFavoriteProduct(_id));
  };

  const goToDetailHandler = (_id) => {
    navigate("/detalle", {
      state: {
        _id,
      },
    });
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : location.pathname === "/" ? (
        <WelcomeComponent />
      ) : (
        <div>
          <div className="back">
            <h1 className="title-list-principal">Donuts para todos los sabores</h1>
            <button className="back-btn" onClick={goToHome}>Volver</button>
          </div>

          <div className="list-product">
            {products && products.length > 0 ? (
              products.map((p, idx) => (
                <div key={idx} className="product-card">
                  <div className="product-info">
                    <span className="title-list">Id:</span>
                    <span className="title-list">{p._id}</span>
                  </div>
                  <div className="product-info">
                    <span className="title-list">{p.name}</span>
                  </div>
                  <button onClick={() => {goToDetailHandler(p._id);}} className="btn-action-list">Detalles</button>
                </div>
              ))
            ) : (
              <div className="no-products">
                <h2>No hay productos que mostrar</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
