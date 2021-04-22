// let mutable_var = 5;
// mutable_var = 6;
// const constant_var = 10;
const express = require("express");
const app = express();

//Get and post routes
app.get("/", (req, res) => {
    console.log("In / route!");
    res.send("Hello world!");
});

// anonymous function
app.listen(3000, () => {
    console.log("Started example server on port 3000");
});