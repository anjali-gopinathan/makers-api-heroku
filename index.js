// let mutable_var = 5;
// mutable_var = 6;
// const constant_var = 10;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Get and post routes
app.get("/", (req, res) => {
    console.log("In / route!");
    res.send("Hello world!");
});

// anonymous function
app.listen(port, () => {
    console.log("Started example server on port 3000");
});