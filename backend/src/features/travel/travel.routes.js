const express = require("express");
const { getTravel } = require("./travel.controller");

const router = express.Router();

router.get("/", getTravel);

module.exports = router;