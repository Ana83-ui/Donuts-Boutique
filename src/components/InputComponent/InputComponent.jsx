import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../src/core/redux/service/productFetch";
import { addItemProduct, loadDetail, updateItemProduct } from "./InputComponentAction";
import { useLocation, useNavigate } from "react-router";
import { deleteProduct, editProduct, addNewProduct } from "../../core/redux/service/productFetch";

const InputComponent = () => {
  const donutDetail = useSelector(
    (state) => state.inputComponentReducer.donutDetail
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const goToList = () => {
    navigate("/lista");
  };

  const location = useLocation();
  const { state } = location;
  const { _id } = state || {};

  const [isEditing, setIsEditing] = useState(false);
  const [newDonut, setNewDonut] = useState({
    name: "",
    flavor: "",
    price: "",
  });

  const editProductById = async (_id) => {
    const updatedProduct = {
      name: newDonut.name,
      flavor: newDonut.flavor,
      price: newDonut.price,
    };
    const response = await editProduct(_id, updatedProduct);
    if (response) {
      dispatch(updateItemProduct({ _id, updatedProduct }));
      setIsEditing(false);
      navigate("/lista");
    } else {
      console.log("Error al actualizar el producto");
    }
  };

  useEffect(() => {
    if (_id && donutDetail) {
      setNewDonut({
        name: donutDetail.name || "",
        flavor: donutDetail.flavor || "",
        price: donutDetail.price || "",
      });
    }
  }, [donutDetail, _id]);

  const addProduct = async () => {
    if (!newDonut.name || !newDonut.flavor || !newDonut.price) {
      alert("Todos los campos deben ser completados");
      return;
    }
    const newProduct = {
      name: newDonut.name,
      flavor: newDonut.flavor,
      price: parseInt(newDonut.price),
    };
    const response = await addNewProduct(newProduct);
    if (response) {
      dispatch(addItemProduct(newProduct));
      setNewDonut({
        name: "",
        flavor: "",
        price: "",
      });
      navigate("/lista");
    } else {
      console.log("Error al agregar el producto");
    }
  };

  const deleteProductById = async (_id) => {
    const response = await deleteProduct(_id);
    if (response) {
      navigate("/lista");
    } else {
      console.log("Error al eliminar el producto");
    }
  };

  const detailDonut = async (_id) => {
    if (_id) {
      const donut = await getProductById(_id);
      dispatch(loadDetail(donut));
    }
  };

  useEffect(() => {
    if (_id) {
      detailDonut(_id);
    } else {
      setNewDonut({
        name: "",
        flavor: "",
        price: "",
      });
    }
  }, [_id]);

  const inputHandler = (nameProp, valueProp) => {
    const updatedDonut = { ...newDonut, [nameProp]: valueProp };
    setNewDonut(updatedDonut);
  };

  const title = _id ? "¡Detalles glaseados!" : "¡Diseña tu donut!";

  return (
    <div>
      <div>
        {_id && (
          <button className="back-btn-contact" onClick={goToList}>Volver</button>
        )}
      </div>

      <div className="container-crear">
        <div className="title-creacion">
          <h1 className="title">{title}</h1>
        </div>

        <div className="detail-container">
          <div className="container-create">
            <div>
              <span className="title-id">Nombre: </span>
              {_id ? (
                isEditing ? (
                  <input type="text" value={newDonut.name} name="name" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
                ) : (
                  <span className="title">{donutDetail.name}</span>
                )
              ) : (
                <input className="input-light" type="text" value={newDonut.name} name="name" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>)}
            </div>

            <div>
              <span className="title-id">Sabor: </span>
              {_id ? (
                isEditing ? (
                  <input type="text" value={newDonut.flavor} name="flavor" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
                ) : (
                  <span className="title">{donutDetail.flavor}</span>
                )
              ) : (
                <input className="input-light" type="text" value={newDonut.flavor} name="flavor" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
              )}
            </div>

            <div>
              <span className="title-id">Precio: </span>
              {_id ? (
                isEditing ? (
                  <input type="text" value={newDonut.price} name="price" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>
                ) : (
                  <span className="title">{donutDetail.price}</span>
                )
              ) : (
                <input className="input-light" type="text" value={newDonut.price} name="price" onChange={(e) => inputHandler(e.target.name, e.target.value)}/>)}
            </div>
          </div>
          <div>
            {_id ? (
              <div className="buttons">
                <button className="btn-action-detail" onClick={() => deleteProductById(_id)}>Eliminar</button>
                {isEditing ? (
                  <button className="btn-action-detail" onClick={() => editProductById(_id)}>Guardar</button>
                ) : (
                  <button className="btn-action-detail" onClick={() => setIsEditing(true)}>Modificar</button>
                )}
              </div>
            ) : (
              <button className="btn-action-registro" onClick={addProduct}>Registrar</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
