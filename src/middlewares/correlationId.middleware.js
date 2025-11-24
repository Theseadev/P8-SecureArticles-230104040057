// src/middlewares/correlationId.middleware.js

const { v4: uuidV4 } = require("uuid");

function correlationId(req, res, next) {
  const incomingId = req.headers["x-correlation-id"];
  const cid = incomingId || uuidV4();

  req.correlationId = cid;
  res.setHeader("x-correlation-id", cid);

  next();
}

module.exports = correlationId;
