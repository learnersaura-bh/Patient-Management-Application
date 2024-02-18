const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const initialiseDb = require("./db/db");
const patientRouter = require("./routes/patient.route");
const wardRouter = require("./routes/ward.route");

initialiseDb();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/patients", patientRouter);
app.use("/wards", wardRouter);

app.get("/", async (req, res) => {
  res.send("Patient management App");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
