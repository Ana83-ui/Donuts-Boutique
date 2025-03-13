const mongoose = require("mongoose");
const DonutModel = require("../models/donutModel");

const getAllDonuts = async (req, res) => {
  try {
    const donut = await DonutModel.find();
    res.status(200).send(donut);
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getDonutById = async (req, res) => {
  try {
    const idDonut = req.params._id;
    const donut = await DonutModel.findById(idDonut);
    if (!donut) {
      return res.status(400).send("Producto no encontrado");
    }
    res.status(200).send(donut);
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const addDonut = async (req, res) => {
  try {
    const donut = req.body;
    console.log("Datos recibidos del frontend:", donut);
    await DonutModel.create(donut);
    res.status(200).json("Producto creado correctamente");
  } catch (error) {
    console.error("Error al crear donut:", error);
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

const editDonut = async (req, res) => {
  try {
    const idDonut = req.params._id;
    const newDonut = req.body;
    const donut = await DonutModel.findByIdAndUpdate(idDonut, newDonut, {
      new: true,
    });
    if (!donut) {
      return res.status(404).send("Producto no encontrado");
    }
    res.status(200).send(donut);
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const deleteDonut = async (req, res) => {
  try {
    const idDonut = req.params._id;
    const donut = await DonutModel.findByIdAndDelete(idDonut);
    if (!donut) {
      return res.status(404).json({
        success: false,
        message: "Producto no encontrado",
      });
    }
    res.status(200).json({
      success: true,
      message: "El producto se ha eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};

module.exports = { getAllDonuts, getDonutById, addDonut, editDonut, deleteDonut };
