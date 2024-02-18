const express = require("express");

const {
  getPatients,
  addPatient,
  editPatient,
  deletePatient,
} = require("../controllers/patient.controller");

const patientRouter = express.Router();

patientRouter.get("/", async (req, res) => {
  try {
    const patients = await getPatients();
    if (patients.length > 0) {
      res.status(200).json(patients);
    } else {
      // res.send("No patients");
      res.status(204).json({ message: "No Patients in the list" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

patientRouter.post("/", async (req, res) => {
  try {
    const addedPatient = await addPatient(req.body);
    if (addedPatient) {
      res.status(201).json(addedPatient);
    } else {
      res.status(400).json({ message: "Patient could not be added" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

patientRouter.put("/:patientId", async (req, res) => {
  try {
    const id = req.params.patientId;
    const updatedPatient = await editPatient(id, req.body);
    if (updatedPatient) {
      res.status(200).json(updatedPatient);
    } else {
      res.status(400).json({ message: "Patient could not be updated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

patientRouter.delete("/:patientId", async (req, res) => {
  try {
    const deletedPatient = await deletePatient(req.params.patientId);
    if (deletedPatient) {
      res.status(200).json(deletedPatient);
    } else {
      res
        .status(400)
        .json({ error: "Patient could not be deleted successfully. " });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = patientRouter;
