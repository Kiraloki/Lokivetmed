const CartItem = require("../models/cartItemModel");
const catchAsyncErrors = require("./../utils/catchAsyncError");

//Create New category
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    const categoryName = req.body.categoryName;

    // Check if the categoryName already exists in the database (case-insensitive)
    const existingCategory = await Category.findOne({
      CategoryName: { $regex: new RegExp(`^${categoryName}$`, "i") },
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category type already exists",
      });
    }

    // Create a new category type
    const categoryT = await Category.create({
      categoryName,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      categoryT,
    });
  } catch (error) {
    next(error);
  }
});

//get my cart Items
exports.allCartItems = catchAsyncErrors(async (req, res, next) => {
  const cartItemT = await CartItem.find({ user: req.user._id });
  res.status(200).json({
    success: true,
    cartItemT,
  });
});

//update category  type
exports.updateCategoryType = async (req, res, next) => {
  try {
    const categoryT = await Category.findByIdAndUpdate(
      req.params.type_id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      categoryT,
    });
  } catch (error) {
    next(error);
  }
};

//delete category type
exports.deleteCategoryType = async (req, res, next) => {
  try {
    const categoryT = await Category.findByIdAndRemove(req.params.type_id);
    res.status(200).json({
      success: true,
      categoryT,
    });
  } catch (error) {
    next(error);
  }
};
