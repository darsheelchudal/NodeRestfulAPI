import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";
import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
// import userRoute from "./routes/userRoute.js  ";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/product", productRoute);
// app.use("/api/users", userRoute);

//routes
app.get("/", (req, res) => {
  throw new Error("fake error");
  // res.send("Hello nod api");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog, My name is Darsheel");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`Node API app is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error : ", error);
  });

app.use(errorMiddleware);
