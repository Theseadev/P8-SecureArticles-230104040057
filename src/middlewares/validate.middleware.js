const validate = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false, // tampilkan semua error sekaligus
      allowUnknown: true, // ijinkan field yg tidak didefinisikan (tapi di-strip)
      stripUnknown: true, // otomatis buang field asing
    };

    // Validasi body, params, query sekaligus
    const { error, value } = schema.validate(
      {
        body: req.body,
        params: req.params,
        query: req.query,
      },
      options
    );

    // Jika error, balikan response 422
    if (error) {
      return res.status(422).json({
        success: false,
        message: "Validation error",
        details: error.details.map((d) => d.message),
        cid: req.correlationId,
      });
    }

    // FIX PENTING: Tidak menimpa req.body langsung (Express tidak suka)
    if (value.body) Object.assign(req.body, value.body);
    if (value.params) Object.assign(req.params, value.params);
    if (value.query) Object.assign(req.query, value.query);

    next();
  };
};

module.exports = validate;
