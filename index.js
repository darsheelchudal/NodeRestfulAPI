import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://darsheelchudal11:darsheel@cluster0.i4rjtg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//routes
app.get("/", (req, res) => {
  res.send("You are at homepage");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog");
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
