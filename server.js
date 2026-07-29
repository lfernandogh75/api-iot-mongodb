require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/database");
const sensorRoutes = require("./routes/sensor.routes");

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Ruta de prueba
app.get("/", (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: "Servidor IoT LGH funcionando correctamente",
        version: "1.0.0"
    });
});

// API
app.use("/api", sensorRoutes);

// Puerto asignado por Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
});