//jshint esversion:6
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
// import bcrypt from "bcrypt";
// import md5 from "md5";
// import encrypt from "mongoose-encryption";

dotenv.config();
const saltRounds = 10;
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.CRYPT_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = `mongodb+srv://sales:${process.env.MONGODB_ATLAS}@cluster0.p2nlsvv.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);
// volta mongoose-schema // userSchema.plugin(encrypt, { secret: process.env.CRYPT_SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.get("/register", function(req, res){
    res.render("register.ejs");
});

app.get("/secrets", function(req, res){
    if (req.isAuthenticated()){
        res.render("secrets.ejs");
    } else {
        res.redirect("/login");
    };
});

app.get("/logout", function(req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

app.post("/register", function(req, res){
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        };
    });
    //-----------
    // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //     const newUser = new User({
    //         email: req.body.username,
    //         password: hash
    //     });
    //     newUser.save();
    //     res.render("secrets.ejs");
    // });
    //-----------
    // const newUser = new User({
    //     email: req.body.username,
    //     password: md5(req.body.password)
    // });

    // newUser.save();
    // res.render("secrets.ejs");
});

app.post("/login", function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        };
    });
    // -----------
    // const username = req.body.username;
    // const password = req.body.password;

    // User.findOne({email: username}).then((foundUser) => {
    //     bcrypt.compare(password, foundUser.password, function(err, resp) {
    //         if (resp == true) {
    //             res.render("secrets.ejs");
    //         } else {
    //             res.render("login.ejs")
    //         }
    //     });
    // });    
    //------------
    // const username = req.body.username;
    // const password = md5(req.body.password);

    // User.findOne({email: username}).then((foundUser) => {
    //     if (foundUser.password == password) {
    //         res.render("secrets.ejs");
    //     } else {
    //         res.render("login.ejs")
    //     };
    // });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  