const mongoose = require("mongoose");
// const validator  = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"]
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

// create a new connection using model

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;