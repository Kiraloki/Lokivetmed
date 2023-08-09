const SubCategory = require("./../models/subCategoryModel");
const catchAsyncErrors = require("./../utils/catchAsyncError");
const Category = require("../models/categoryModel");

//Create New subcategory
exports.createSubCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    const subCategoryName = req.body.subCategoryName;
    const imageUrl = req.body.imageUrl;
    const categoryName = req.params.categoryName;

    const category = await Category.find({ categoryName: categoryName });

    // Check if the subcategoryName already exists in the database (case-insensitive)
    const existingSubCategory = await SubCategory.findOne({
      subCategoryName: { $regex: new RegExp(`^${subCategoryName}$`, "i") },
    });

    if (existingSubCategory) {
      return res.status(400).json({
        success: false,
        message: "Sub Category type already exists",
      });
    }

    // Create a new sub category type
    const categoryT = await subCategory.create({
      subCcategoryName,
      imageUrl,
      category: category.id,
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

//get all sub category types
exports.allSubCategoryTypes = catchAsyncErrors(async (req, res, next) => {
  const subCategoryT = await SubCategory.find({
    category: req.params.categoryid,
  });
  res.status(200).json({
    success: true,
    subCategoryT,
  });
});

//update Subcategory  type
exports.updateSubCategoryType = async (req, res, next) => {
  try {
    const categoryT = await SubCategory.findByIdAndUpdate(
      req.params.id,
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

//delete sub  category type
exports.deleteSubCategoryType = async (req, res, next) => {
  try {
    const SubCategoryT = await SubCategory.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      SubCategoryT,
    });
  } catch (error) {
    next(error);
  }
};
