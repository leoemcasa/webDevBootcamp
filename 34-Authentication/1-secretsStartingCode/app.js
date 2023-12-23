//jshint esversion:6
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import md5 from "md5";
// import encrypt from "mongoose-encryption";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const uri = `mongodb+srv://sales:${process.env.MONGODB_ATLAS}@cluster0.p2nlsvv.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

// volta mongoose-schema // userSchema.plugin(encrypt, { secret: process.env.CRYPT_SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/login", function(req, res){
    res.render("login.ejs");
})

app.get("/register", function(req, res){
    res.render("register.ejs");
})

app.post("/register", function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });

    newUser.save();
    res.render("secrets.ejs");
});

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({email: username}).then((foundUser) => {
        if (foundUser.password == password) {
            res.render("secrets.ejs");
        } else {
            res.render("login.ejs")
        };
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  