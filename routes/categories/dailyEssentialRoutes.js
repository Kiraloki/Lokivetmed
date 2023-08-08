const express = require("express");
const dailyEssentialController = require("../../controllers/categories/dailyEssentialController");
const authController = require("./../../controllers/authController");
const router = express.Router();

router.get("/", dailyEssentialController.allEssentialsType);

// router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

// router.post("/essential/create", dailyEssentialController.createEssentialsType);
// router.patch(
//   "/essential/update/:type_id",
//   dailyEssentialController.updateEssentialType
// );
// router.delete(
//   "/essential/delete/:type_id",
//   dailyEssentialController.deleteEssentialType
// );

module.exports = router;
