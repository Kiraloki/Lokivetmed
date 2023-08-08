const express = require("express");
const medicalTypeController = require("../../controllers/categories/medicalTypeController");
const authController = require("./../../controllers/authController");
const router = express.Router();

router.get("/", medicalTypeController.allmedicalCareType);
// router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

// router.post("/medical/create", medicalTypeController.createMedicalType);
// router.patch(
//   "/medical/update/:type_id",
//   medicalTypeController.updatemedicalCareType
// );
// router.delete(
//   "/medical/delete/:type_id",
//   medicalTypeController.deleteMedicalCareType
// );

module.exports = router;
