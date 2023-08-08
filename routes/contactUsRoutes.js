const express = require("express");
const router = express.Router();

const contactUsController = require("../controllers/contactUsController");

// Import catchAsyncErrors
const catchAsyncErrors = require("../middleware/catchAsyncError");

// POST request to create a new contact
router.post("/contact", catchAsyncErrors(contactUsController.createContact));

module.exports = router;
