const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const drugRoutes = require("./routes/drugRoutes");
const checkDrugExpiry = require("./cron/expiryChecker");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/drugs", drugRoutes);
checkDrugExpiry();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
