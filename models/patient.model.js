const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true,
  },
  medicalHistory: {
    type: String,
  },
  contact: {
    type: String,
  },
  assignedWard: {
    type: Number,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
