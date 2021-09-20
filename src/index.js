const express = require("express");
const app = express();

const path = require("path");
const port = 3000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// to set view engine
app.set("view engine", "hbs"); // mandatory to write in same format
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
    res.render("main"); // here its 'render' in place of 'send'...'render' means need to render a file
});

//to send some raw text to FE
app.get("/", (req, res) => {
    res.send("alkjdfajsdljf");
});

//to send some HTML tags to FE
app.get("/about", (req, res) => {
    res.send("welcome to my About page");
});

// to send JSON response to FE
app.get("/temp", (req, res) => {
    res.send({
        id: 1,
        name: "anil",
    });
});

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page");
});
app.listen(port, () => {
    console.log("listering to port" + port);
})