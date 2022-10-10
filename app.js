const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/contactDance");
}
const bodyparser = require("body-parser");
const app = express();
const port = 27017;

// mongoose schema
var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: Number,
  address: String,
  more: String,
});
var contact = mongoose.model("contact", contactSchema);

// EXPRESS SPECIFIC STUFF

app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug");
// Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views direct ory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.pug", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});
app.get("/home", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});

app.post("/contact", (req, res) => {
  var myData = new contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("Your request has been submitted");
    })
    .catch(() => {
      res.status(404).send("Your request has not been submitted");
    });
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
