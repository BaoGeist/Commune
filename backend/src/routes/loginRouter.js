const express = require('express')
const router = express.Router()
const LoginController = require("../controllers/loginController.js")



router.get("/", LoginController.getAllUsers)

router.post("/login", LoginController.loginUser)

router.get("/name", function (req, res) {
    res.send("Wiki home page")
})

module.exports = router