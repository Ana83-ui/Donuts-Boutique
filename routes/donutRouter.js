const express = require("express");
const { getAllDonuts, addDonut, getDonutById, editDonut, deleteDonut } = require("../controllers/donutController");

const router = express.Router();

router.get("/donut", getAllDonuts);
router.post("/donut", addDonut);
router.get("/donut/:_id", getDonutById);
router.patch("/donut/:_id/", editDonut);
router.delete("/donut/:_id/", deleteDonut);

module.exports = router;
