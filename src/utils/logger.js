const pino = require("pino");

const logger = pino({
  level: "info",
  base: {},
  timestamp: pino.stdTimeFunctions.isoTime
});

module.exports = logger;
