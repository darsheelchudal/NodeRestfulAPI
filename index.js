import express from "express";

const app = express();
const PORT = 8000;

//routes
app.get("/", (req, res) => {
  res.send("You are at homepage");
});

app.listen(8000, () => {
  console.log(`Node API app is running on PORT ${8000}`);
});
