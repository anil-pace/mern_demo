const express = require("express");
require("./db/connect.js");
const studentRouter = require("./routers/students");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// register router to expressjs
app.use(studentRouter);

//template engine route
app.get("/", (req, res) => {
    res.send("GET is working 111");
});

//create a new student usign promises syntax
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//         console.log("inside then");

//     }).catch((e) => {
//         res.status(400).send(e);
//         console.log("inside catch" + e);
//     })
// });

app.listen(port, () => {
    console.log("server on NODEJS ===> listening on port 3000")
})
