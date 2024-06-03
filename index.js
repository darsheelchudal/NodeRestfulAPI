import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";

const app = express();
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("You are at homepage");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

app.get("/product/", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

//Update aproduct
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //cannot find any product in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with id : ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with id : ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json();
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
