const {Router} = require("express");

const {login, register, logout, profile} = require ("../controllers/auth.controller")
const {authValidate} = require ("../middlewares/authValidate")
const router = Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authValidate, profile)


module.exports = router ;