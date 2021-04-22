// let mutable_var = 5;
// mutable_var = 6;
// const constant_var = 10;
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended : true}));

const people = [];      //empty array of people. says const but stil we can modify it

//Get and post routes
app.get("/", (req, res) => {
    console.log("In / route!");
    // res.send("Hello world!");
    res.json(people);
});

//insert endpoint
app.post("/insert", (req, res) => {
    const person_name = req.body.person_name;
    people.push(person_name);
    res.sendStatus(200);
});

// anonymous function
app.listen(port, () => {
    console.log("Started example server on port 3000");
});