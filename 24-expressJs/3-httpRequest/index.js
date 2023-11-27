import express from "express";
var app=express();
const port = 3030;

app.get("/", (req, res) => {
    res.send("Hello!");
})

app.listen(port, () => {
    console.log(`running on ${port}`);
})