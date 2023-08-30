const Contact = require("../models/contactUsModel");
const factory = require("./handleFactory");
// const ErrorHandler = require("../utils/appError");
// const catchAsyncErrors = require("../utils/catchAsyncError");

// exports.createContact = catchAsyncErrors(async (req, res, next) => {
//   const { name, email, message } = req.body;

//   // Check if any of the required fields are missing
//   if (!name || !email || !message) {
//     return next(
//       new ErrorHandler("Name, email, and message are required fields", 400)
//     );
//   }

//   const newContact = new Contact({
//     name,
//     email,
//     message,
//   });

//   await newContact.save();
//   console.log(res);
//   res.status(200).json({
//     success: true,
//     message: "Info shared successfully",
//   });
// });

exports.createContact = factory.createOne(Contact);

exports.getAllContactUsInfo = factory.getAll(Contact);

// get all contact us info admin
// exports.getAllContactUsInfo = catchAsyncErrors(async (req, res, next) => {
//   const Info = await Contact.find();
//   res.status(200).json({
//     success: true,
//     Info,
//   });
// });

// get specific contact us info admin
