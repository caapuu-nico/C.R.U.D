const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        return res
        .status(400)
        .json({message: error.errors.map((error)=> error.message)}); // mapeamos error para mostrar el mensaje del error
    }

}
module.exports = {
    validateSchema
};