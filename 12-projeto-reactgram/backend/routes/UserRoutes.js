const express = require("express")
const router = express()

// controller
const { register } = require("../controllers/UserController")

// middlewares
// algo que executa no meio de uma req 
const validate = require("../middlewares/handleValidation")
const { userCreateValidation } = require("../middlewares/userValidations")

// routes
router.post("/register", userCreateValidation(), validate, register)

module.exports = router