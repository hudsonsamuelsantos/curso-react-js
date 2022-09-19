const express = require("express")
const router = express()

// controller
const { register, login, getCurrentUser, update } = require("../controllers/UserController")

// middlewares
// algo que executa no meio de uma req 
const validate = require("../middlewares/handleValidation")
const {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/AuthGuard")
const { imageUpload } = require("../middlewares/imageUpload")

// routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)

module.exports = router