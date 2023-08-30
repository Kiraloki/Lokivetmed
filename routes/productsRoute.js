const express = require("express");
const productController = require("./../controllers/productController");
const cartController = require("./../controllers/cartController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:subcategoryid", productController.getProductbySubcatid);
router.get("/one/:productid", productController.getProductbyid);
router.use(authController.protect);
router.post("/one/:productid/addtocart", cartController.addItemToCart);
router.post("/addtocart", cartController.addItemToCart);

module.exports = router;
