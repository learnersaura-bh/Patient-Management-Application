const mongoose = require("mongoose");

const wardSchema = mongoose.Schema({
  wardNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    enum: [
      "General Ward",
      "Medical Ward",
      "Surgical Ward",
      "Intensive Care Unit (ICU)",
      "Cardiac Care Unit (CCU)",
      "Pediatric Ward",
      "Maternity Ward",
      "Geriatric Ward",
      "Psychiatric Ward",
      "Neonatal Intensive Care Unit (NICU)",
    ],
  },
});

const Ward = mongoose.model("Ward", wardSchema);

module.exports = Ward;
