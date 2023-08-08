const express = require("express");
const treatmentTypeControllers = require("../../controllers/categories/treatmentTypeControllers");
const authController = require("./../../controllers/authController");
const router = express.Router();

router.get("/", treatmentTypeControllers.allTreatmentType);

// router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

// router.post("/treatment/create", treatmentTypeControllers.createTreatmentType);
// router.patch(
//   "/treatment/update/:type_id",
//   treatmentTypeControllers.updatetreatmentType
// );
// router.delete(
//   "/treatment/delete/:type_id",
//   treatmentTypeControllers.deleteTreatmentType
// );

module.exports = router;
