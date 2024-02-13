const {z} = require("zod");

const registerSchema = z.object({
username: z.string({
    required_error: "Nombre usuario requerido"
}),
email: z.string({
    required_error: "Email es requerido"}
).email({
    message: "Email invalido"
}),
password: z.string({
    required_error: "Contraseña requerida"
}).min(6, {
    message: "La contraseña debe tener minimo 6 caracteres"
})
});
const loginSchema = z.object({
    email: z.string({
        required_error: "Email es requerido"}
    ).email({
        message: "Email invalido"
    }),
    password: z.string({
        required_error: "Contraseña requerida"
    }).min(6, {
        message: "La contraseña debe tener minimo 6 caracteres"
    })

})

module.exports = {
    registerSchema,
    loginSchema
}