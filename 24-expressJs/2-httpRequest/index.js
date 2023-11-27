import express from "express";
const app = express();
const port = 3030;

app.get("/", (req, res) => {
    res.send(
        "<h1>Hello!</h1> ou sem tag" +
        "<a href='/about'>About</a>" +
        "<a href='/contact'>Contact</a>"
        );
})

app.get("/contact", (req, res) => {
    res.send("contato <a href='/'>Home</a>");
})

app.get("/about", (req, res) => {
    res.send("<h1>about</h1><a href='/'>Home</a>");
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})