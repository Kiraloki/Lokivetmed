const Review = require("./../models/reviewModel");
const catchAsyncErrors = require("./../utils/catchAsyncError");
const factory = require("./handleFactory");

// post a review by user

exports.addInfo = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productid;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getmyReviewForProduct = catchAsyncErrors(async (req, res, next) => {
  const result = await Review.find({
    product: req.body.product,
    user: req.user.id,
  });

  res.status(200).json({
    message: "success",
    result,
  });
});
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.getAllReviews = factory.getAll(Review);

exports.getAllReviewsForProduct = catchAsyncErrors(async (req, res, next) => {
  const result = await Review.find({
    product: req.body.product,
  });

  res.status(200).json({
    message: "success",
    result,
  });
});

// get review by user and product
