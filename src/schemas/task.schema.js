const {z} = require("zod");

const taskSchema = z.object({
    title: z.string({
        required_error:"requiere un titulo"
    }),
    description: z.string({
        required_error: "description Deberia ser un texto"
    }),
    date: z.string().datetime().optional()
});

module.exports = { taskSchema}