const mongoose = require("mongoose");


//connection creation
mongoose.connect("mongodb://localhost:27017/students-api", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongoose db ===> connection successful");
}).catch((err) => {
    console.log("mongoose db ===>  connection failed" + err);
});

