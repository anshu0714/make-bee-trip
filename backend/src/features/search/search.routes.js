const express = require("express");
const { getPopular } = require("./search.controller");

const router = express.Router();

router.get("/popular", getPopular);

module.exports = router;
