const {z} = require("zod");

const registerSchema = z.object({
username: z.string({
    required_error: "Nombre usuario requerido"
}),
email: z.string({
    required_error: "Email is required"}
).email({
    message: "Invalid email"
}),
password: z.string({
    required_error: "Password required"
}).min(6, {
    message: "The password must be at least 6 characters."
})
});
const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"}
    ).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "Password required"
    }).min(6, {
        message: "The password must be at least 6 characters"
    })

})

module.exports = {
    registerSchema,
    loginSchema
}