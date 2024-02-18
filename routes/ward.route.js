const express = require("express");
const {
  getWards,
  addWard,
  deleteWard,
  editWard,
} = require("../controllers/ward.controller");

const wardRouter = express.Router();

wardRouter.get("/", async (req, res) => {
  try {
    const wards = await getWards();
    res.status(200).json(wards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
wardRouter.post("/", async (req, res) => {
  try {
    const wardAdded = await addWard(req.body);
    res.status(201).json(wardAdded);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

wardRouter.put("/:wardId", async (req, res) => {
  try {
    const updatedWard = await editWard(req.params.wardId, req.body);
    res.status(200).json(updatedWard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
wardRouter.delete("/:wardId", async (req, res) => {
  try {
    const deletedWard = await deleteWard(req.params.wardId);
    res.status(200).json(deletedWard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = wardRouter;
