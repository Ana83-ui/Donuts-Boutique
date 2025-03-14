const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
  name: {
    type: String,
  },
  flavor: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const donutModel = mongoose.model("Donuts", commentSchema, "donut");

module.exports = donutModel;
