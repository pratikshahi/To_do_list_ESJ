//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//telling app to use EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day="";

    switch (currentDay) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 0:
            day = "Sunday";
            break;

        default:
            break;
    }
    //EJS use it looks for list file inside views so, have to create views folder and list file before
    // using it //inside {} is passing object to list.ejs file
    res.render("list",{dayName:day});

});

app.listen(3000, function () {
    console.log("server running on port 3000");
});