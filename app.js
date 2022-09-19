// IMPORT PACKAGE
require("dotenv").config();
require("express-async-errors");
// ASYNC ERRORS
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// CUSTOM MIDDLEWARES
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
// THIRD-PARTY MIDDLEWARES
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send(`<h1> Store API</h1> <a href="/api/v1/products"></a>`);
});
app.use("/api/v1/products", productsRouter);

// PRODUCT ROUTES
app.use(notFound);
app.use(errorHandler);
// PORT INSTANCE
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
