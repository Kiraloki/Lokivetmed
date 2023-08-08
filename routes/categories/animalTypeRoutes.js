const express = require("express");
const animalController = require("../../controllers/categories/animalController");
const authController = require("./../../controllers/authController");
const router = express.Router();

router.get("/", animalController.allAnimalType);

// router.use(authController.protect);

// router.use(authController.restrictTo("admin"));

// router.post("/animal/create", animalController.createAnimalType);
// router.patch("/animal/update/:type_id", animalController.updateAnimalType);
// router.delete("/animal/delete/:type_id", animalController.deleteAnimalType);

module.exports = router;
