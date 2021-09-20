const express = require("express");
require("./db/connect.js");
const Student = require("./models/students");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

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


//create a new student usign async-await syntax
app.post("/students", async (req, res) => {
    try {
        console.log(req.body);
        const user = new student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (e) {
        res.status(400).send(e);
    }
});

app.get("/students", async (req, res) => {
    try {
        console.log("222===> " + req.body);
        const studentsData = await Student.find();
        console.log("===> " + studentsData);
        res.send(studentsData);
    }
    catch (e) {
        res.send(e);
    }
});

//get individual stucdent data
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById({ _id });
        console.log(studentData);
        if (!studentData) {
            return res.status(404).send()
        }
        else {
            res.send(studentData);
        }
    }
    catch (e) {
        res.status(500).send(e);
    }
});


// delete a student by id
app.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if (!id) {
            return res.status(404).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        console.log("error ==> " + e);
        res.status(500).send(e);
    }
});



app.listen(port, () => {
    console.log("server on NODEJS ===> listening on port 3000")
})
