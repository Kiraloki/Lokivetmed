const express = require("express");
const userController = require("../controllers/userContoller.js");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);

router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

////////////////////////////////////////////////////////////////

// router.route("/register").post(registerUser);
// router.route("/login").post(loginUser);
// router.route("/password/forgot").post(forgotPassword);
// router.route("/password/reset/:token").put(resetPassword);
// router.route("/me").get(isAuthenticatedUser, getUserDetails);

// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// router.route("/me/update").put(isAuthenticatedUser, updateProfile);
// // router.route('/add-to-cart').post(isAuthenticatedUser, addToCart)
// // router.route('/cart-items/:id').get(isAuthenticatedUser, getCartItems)
// // router.delete('/cart/:userId/items/:itemId', removeCartItem);

// router
//   .route("/admin/users")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

// router
//   .route("/admin/user/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

// router.route("/logout").get(logout);

// module.exports = router;
