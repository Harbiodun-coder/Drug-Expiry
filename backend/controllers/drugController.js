const Drug = require("../models/Drug");

exports.addDrug = async (req, res) => {
  try {
    const drug = new Drug(req.body);

    await drug.save();

    res.json({
      message: "Drug added successfully",
      drug,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();

    res.json(drugs);
  } catch (error) {
    res.status(500).json(error);
  }
};
