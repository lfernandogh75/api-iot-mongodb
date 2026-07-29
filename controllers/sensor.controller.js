const SensorData = require("../models/SensorData");

const guardarMedicion = async (req, res) => {

    try {

        const medicion = await SensorData.create(req.body);

        res.status(201).json({

            ok: true,

            mensaje: "Medición almacenada",

            data: medicion

        });

    } catch (error) {

        res.status(500).json({

            ok: false,

            mensaje: error.message

        });

    }

}

const obtenerMediciones = async (req, res) => {

    const datos = await SensorData.find().sort({ fecha: -1 });

    res.json(datos);

}

const ultimaMedicion = async (req, res) => {

    const dato = await SensorData.findOne().sort({ fecha: -1 });

    res.json(dato);

}

module.exports = {

    guardarMedicion,

    obtenerMediciones,

    ultimaMedicion

}