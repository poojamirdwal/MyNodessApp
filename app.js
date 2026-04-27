const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;



app.listen(PORT, () => {
  console.log(`my appliaction running on port ${PORT}`);
});
app.get("/", (req, res) => {
console.log("hello world");
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/filltheform", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});