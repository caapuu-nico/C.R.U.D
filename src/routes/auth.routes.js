const {Router} = require("express");

const {login, register, logout, profile} = require ("../controllers/auth.controller")
const {authValidate} = require ("../middlewares/authValidate")
const {validateSchema} = require("../middlewares/validator.middleware")
const {registerSchema, loginSchema} = require("../schemas/auth.schema")
const router = Router();


router.post("/register",validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema),login);
router.post("/logout", logout);
router.get("/profile", authValidate, profile)


module.exports = router ;