const Ward = require("../models/ward.model");

//getWards , addWard , deleteWard , editWard

const getWards = async () => {
  try {
    const wardList = await Ward.find();
    if (wardList.length > 0) {
      return wardList;
    } else {
      throw new Error("The ward List is Empty");
    }
  } catch (error) {
    throw error;
  }
};

const addWard = async (wardData) => {
  try {
    const newWard = new Ward(wardData);
    const addedWard = await newWard.save();
    return addedWard;
  } catch (error) {
    throw error;
  }
};

const deleteWard = async (wardId) => {
  try {
    const deletedWard = await Ward.findByIdAndDelete(wardId);
    if (deletedWard) {
      return deletedWard;
    }
  } catch (error) {
    throw error;
  }
};

const editWard = async (wardId, updatedData) => {
  try {
    const updatedWard = await Ward.findByIdAndUpdate(wardId, updatedData, {
      new: true,
    });
    return updatedWard;
  } catch (error) {
    throw error;
  }
};

module.exports = { getWards, addWard, deleteWard, editWard };
