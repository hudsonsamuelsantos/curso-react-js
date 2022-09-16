const express = require("express")
const router = express()

// controller
const { register, login } = require("../controllers/UserController")

// middlewares
// algo que executa no meio de uma req 
const validate = require("../middlewares/handleValidation")
const {
    userCreateValidation,
    loginValidation
} = require("../middlewares/userValidations")

// routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)

module.exports = router