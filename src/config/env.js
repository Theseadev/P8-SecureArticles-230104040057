const path = require("path");
const dotenv = require("dotenv");

// Paksa load .env dari ROOT project
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  dbUri: process.env.DB_URI || "",
  logLevel: process.env.LOG_LEVEL || "info",
};
