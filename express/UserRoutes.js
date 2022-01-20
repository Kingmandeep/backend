const express = require("express");

const router = express.Router()
const registerUser = require("./UserController");

router.route("/api/vi/register").post(registerUser);

module.exports = router;