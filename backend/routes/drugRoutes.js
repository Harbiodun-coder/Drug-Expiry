const express = require("express");
const router = express.Router();

const { addDrug, getAllDrugs } = require("../controllers/drugController");

router.post("/add", addDrug);

router.get("/", getAllDrugs);

module.exports = router;
