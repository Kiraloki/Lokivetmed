const SearchQuery = require("../models/searchQueryModel");
const factory = require("./handleFactory");

// exports.createSearchQuery = catchAsyncErrors(async (req, res, next) => {
//   const { query } = req.body;

//   if (!query) {
//     return next(new ErrorHandler("Query field is required", 400));
//   }

//   try {
//     const newSearchQuery = new SearchQuery({
//       query,
//     });

//     await newSearchQuery.save();

//     res.status(200).json({
//       success: true,
//       message: "Search query saved successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

exports.createSearchQuery = factory.createOne(SearchQuery);

// exports.getAllSearchQueries = catchAsyncErrors(async (req, res, next) => {
//   const searchQueryT = await SearchQuery.find();
//   res.status(200).json({ success: true, searchQueryT });
// });

exports.getAllSearchQueries = factory.getAll(SearchQuery);

// get single search query

// get top search queries
