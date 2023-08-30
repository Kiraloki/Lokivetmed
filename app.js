const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();

// Config
dotenv.config();
app.use(cors());
app.options("*", cors());

app.use(cookieParser());
app.use(express.json());

//Route Imports
const user = require("./routes/userRoutes");
// const animalType = require("./routes/categories/animalTypeRoutes");
// const treatmentType = require("./routes/categories/treatmentTypeRoute");
const product = require("./routes/productsRoute");
// const essential = require("./routes/categories/dailyEssentialRoutes");
// const medical = require("./routes/categories/medicalCareRoute");
const order = require("./routes/orderRoutes");
const review = require("./routes/reviewRoutes");
// const varieties = require("./routes/varietyRoutes");
const contactUs = require("./routes/contactUsRoutes");
const cart = require("./routes/cartRoutes");
// const healthCheck = require("./routes/healthCheckRoutes");
const rfq = require("./routes/rfqRoutes");
const search = require("./routes/searchQueryRoutes");
const category = require("./routes/categoryRoutes");
const ErrorHandler = require("./utils/appError");

app.use("/api/v1/user", user);
// app.use("/api/v1/animal", animalType);
// app.use("/api/v1/treatment", treatmentType);
// app.use("/api/v1/essential", essential);
// app.use("/api/v1/medical", medical);
app.use("/api/v1/category", category);
app.use("/api/v1/product", product);
app.use("/api/v1/review", review);

app.use("/api/v1/order", order);
// app.use("/api/v1", varieties);
app.use("/api/v1/contact", contactUs);
// app.use("/api/v1", healthCheck);
app.use("/api/v1/rfq", rfq);
app.use("/api/v1/searchquery", search);
app.use("/api/v1/cart", cart);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//Middleware for error
app.use(globalErrorHandler);

module.exports = app;
