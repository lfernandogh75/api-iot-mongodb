const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema(
  {
    temperatura: Number,
    humedad: Number,
    fecha: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "temperaturas"
  }
);

module.exports = mongoose.model("SensorData", SensorSchema);