const express = require("express")
const router = express.Router()

// controller

// middlewares
const { photoInsertValidation } = require("../middlewares/PhotoValidation")
const authGuard = require("../middlewares/AuthGuard")
const validate = require("../middlewares/handleValidation")

// routes

module.exports = router