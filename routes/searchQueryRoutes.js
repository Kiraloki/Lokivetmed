const express = require("express");
const router = express.Router();

const searchController = require("../controllers/searchQueryController");
const catchAsyncErrors = require("../middleware/catchAsyncError");
router.post("/search", catchAsyncErrors(searchController.createSearchQuery));

module.exports = router;
