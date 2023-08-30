const CartItem = require("../models/cartItemModel");
const factory = require("./handleFactory");
const catchAsyncErrors = require("./../utils/catchAsyncError");

//Add items to cart
exports.addItemToCart = catchAsyncErrors(async (req, res, next) => {
  try {
    // console.log(req.params);
    if (req.params.productid) req.body.productid = req.params.productid;
    const productid = req.body.productid;

    // Check if item already exists in userscart
    const existingCartItem = await CartItem.findOne({
      product: productid,
      user: req.user.id,
    });

    if (existingCartItem) {
      const CartItemadded = await CartItem.findByIdAndUpdate(
        existingCartItem._id,
        {
          quantity: existingCartItem.quantity + 1,
          product: productid,
          user: req.user.id,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      return res.status(200).json({
        success: true,
        message: "CartItem added ",
        CartItemadded,
      });
    }

    // Create a new category type
    const categoryT = await CartItem.create({
      quantity: req.body.quantity || 1,
      product: productid,
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
exports.getAllMyCartItems = catchAsyncErrors(async (req, res, next) => {
  const cartItemT = await CartItem.find({ user: req.user.id }).populate({
    path: "product",
    select: ["name", "images"],
  });
  res.status(200).json({
    success: true,
    cartItems: cartItemT,
  });
});

// get my cart items

//update cart items
// exports.updateCartItem = async (req, res, next) => {
//   try {
//     const categoryT = await Category.findByIdAndUpdate(
//       req.params.cart_item_id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json({
//       success: true,
//       categoryT,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.getMyCartItem = factory.getOne(CartItem);
exports.updateCartItem = factory.updateOne(CartItem);

//delete cart item
// exports.deleteCartItem = async (req, res, next) => {
//   try {
//     const categoryT = await CartItem.findByIdAndRemove(req.params.cart_item_id);
//     res.status(200).json({
//       success: true,
//       categoryT,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.deleteCartItem = factory.deleteOne(CartItem);

// get all cart items
exports.getAllCartItems = factory.getAll(CartItem);
// get by user id
// most added items
// get one cart item
