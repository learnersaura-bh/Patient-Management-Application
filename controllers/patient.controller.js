const Patient = require("../models/patient.model");

const getPatients = async () => {
  try {
    const patients = await Patient.find();
    return patients;
  } catch (error) {
    console.log("Error while fetching Patients: ", error.message);
    throw error;
  }
};

const addPatient = async (patientData) => {
  try {
    const newPatient = new Patient(patientData);
    const addedPatient = await newPatient.save();
    return addedPatient;
  } catch (error) {
    console.error("Error while adding patient: ", error.message);
    throw error;
  }
};

const editPatient = async (patientId, updatedData) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      updatedData,
      { new: true },
    );
    if (updatedPatient) {
      return updatedPatient;
    }
  } catch (error) {
    console.error("Error while updating patient: ", error.message);
    throw error;
  }
};

const deletePatient = async (patientId) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(patientId);
    if (deletedPatient) {
      return deletedPatient;
    } else {
      throw new Error("Patient not found.");
    }
  } catch (error) {
    console.error("Error while deleting patient:", error.message);
    throw new error();
  }
};



module.exports = { getPatients, addPatient, editPatient, deletePatient };
