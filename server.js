require("dotenv").config();

const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const connectDB = require("./config/database");

const sensorRoutes = require("./routes/sensor.routes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", sensorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor iniciado en puerto ${PORT}`);

});