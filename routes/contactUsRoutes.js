const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");

const contactUsController = require("../controllers/contactUsController");

// POST request to create a new contact
router.post("/", contactUsController.createContact);
router.use(authController.protect);
router.use(authController.restrictTo("admin"));
router.get("/", contactUsController.getAllContactUsInfo);
module.exports = router;
