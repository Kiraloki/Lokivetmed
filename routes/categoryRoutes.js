const express = require("express");
const categoryController = require("./../controllers/categoryController");
const subCategoryController = require("./../controllers/subcategoryController");
// const authController = require("./../../controllers/authController");
const router = express.Router();

router.get("/", categoryController.allCategoryTypes);
router.get("/:categoryid", subCategoryController.allSubCategoryTypes);

// router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

// router.post("/create", animalController.createAnimalType);
// router.patch("/animal/update/:type_id", animalController.updateAnimalType);
// router.delete("/animal/delete/:type_id", animalController.deleteAnimalType);

module.exports = router;
