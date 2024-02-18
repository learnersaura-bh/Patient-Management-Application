const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const initialiseDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to db");
  } catch (err) {
    console.log("Error while connecting to db", error.message);
  }
};

module.exports = initialiseDb;
