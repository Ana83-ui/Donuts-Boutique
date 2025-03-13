const express = require("express");
const donutRouter = require("./routes/donutRouter");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./database/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", donutRouter);

app.listen(3000, () => {
  console.log("Escuchando servidor en puerto http://localhost:3000");
});
