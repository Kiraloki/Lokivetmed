const SearchQuery = require("../models/searchQueryModel");
const ErrorHandler = require("../utils/appError");
const catchAsyncErrors = require("../utils/catchAsyncError");

exports.createSearchQuery = catchAsyncErrors(async (req, res, next) => {
  const { query } = req.body;

  if (!query) {
    return next(new ErrorHandler("Query field is required", 400));
  }

  try {
    const newSearchQuery = new SearchQuery({
      query,
    });

    await newSearchQuery.save();

    res.status(200).json({
      success: true,
      message: "Search query saved successfully",
    });
  } catch (error) {
    next(error);
  }
});
