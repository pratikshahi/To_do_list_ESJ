//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["WakeUp", "Brush your Teeth"];
//telling app to use EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//make public as local folder to store images,sound css etc 
app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  //took it from STackoverflow//to locale date string javascript
  //option is JS object

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //variable day gets todays date in options mentioned
  let day = today.toLocaleDateString("en-US", options);

  //EJS use it looks for list file inside views so, have to create views folder and list file before
  // using it //inside {} is passing object to list.ejs file
  res.render("list", { dayName: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.addedList;
  //dont use 2 render cause 1st render will already traverse an give error for sencond obj passde
  //insted use redirect and mention let/array on top ,pas onj at same render using ,
  //items  is arry we created on top cause item could only hold 1 data and would replace the old list
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
