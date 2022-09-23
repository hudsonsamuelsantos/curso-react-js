const express = require("express")
const router = express.Router()

// controller
const { insertPhoto, deletePhoto } = require("../controllers/PhotoController")

// middlewares
const { photoInsertValidation } = require("../middlewares/PhotoValidation")
const authGuard = require("../middlewares/AuthGuard")
const validate = require("../middlewares/handleValidation")
const { imageUpload } = require("../middlewares/imageUpload")

// routes
router.post(
    "/",
    authGuard,
    imageUpload.single("image"),
    photoInsertValidation(),
    validate,
    insertPhoto
)
router.delete("/:id", authGuard, deletePhoto)

module.exports = router