const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  drug_name: {
    type: String,
    required: true,
  },

  batch_number: {
    type: String,
    required: true,
  },

  manufacture_date: {
    type: Date,
  },

  expiry_date: {
    type: Date,
    required: true,
  },

  quantity: {
    type: Number,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Drug", drugSchema);
