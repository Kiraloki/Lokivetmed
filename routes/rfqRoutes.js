const express = require("express");
const router = express.Router();

const rfqController = require("../controllers/rfqController");
const catchAsyncErrors = require("../middleware/catchAsyncError");

router.post("/rfq", catchAsyncErrors(rfqController.createRFQ));

module.exports = router;
