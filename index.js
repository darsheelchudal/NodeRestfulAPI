import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";

const app = express();
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("You are at homepage");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(8000, () => {
      console.log(`Node API app is running on PORT ${8000}`);
    });
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
