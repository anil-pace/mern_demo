const express = require("express");
require("./db/connect.js");
const student = require("./models/students");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

//template engine route
app.get("/", (req, res) => {
    res.send("GET is working 111");
});
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
        console.log("inside then");

    }).catch((e) => {
        res.status(400).send(e);
        console.log("inside catch");
    })
});
app.listen(port, () => {
    console.log("server on NODEJS ===> listening on port 3000")
})
