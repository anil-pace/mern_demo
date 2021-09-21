const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


//2. define a new router
router.get("/sujata", (req, res) => {
    res.send("hello sujata");
});

//create a new student usign async-await syntax
router.post("/students", async (req, res) => {
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

router.get("/students", async (req, res) => {
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
router.get("/students/:id", async (req, res) => {
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


// update a student by id
router.patch("/students/:id", async (req, res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(updateStudent);
    } catch (e) {
        console.log("error ==> " + e);
        res.status(500).send(e);
    }
});

// delete a student by id
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        console.log("error ==> " + e);
        res.status(500).send(e);
    }
});


module.exports = router;