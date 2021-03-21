//jshint esversion:6

//module.exports allows other js to require date.js and use getDate function
module.exports = getDate;
function getDate() {
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
    return day;
}