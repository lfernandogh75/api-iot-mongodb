const express = require("express");

const router = express.Router();

const {

    guardarMedicion,

    obtenerMediciones,

    ultimaMedicion

} = require("../controllers/sensor.controller");

router.post("/temperatura", guardarMedicion);

router.get("/temperaturas", obtenerMediciones);

router.get("/ultima", ultimaMedicion);

module.exports = router;