//jshint esversion:6
import dotenv from "dotenv";
import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import findOrCreate from "mongoose-findorcreate";
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
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
// volta mongoose-schema // userSchema.plugin(encrypt, { secret: process.env.CRYPT_SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
    // User.findById(id, function(err, user) {
    //     done(err, user);
    // });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
//    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/auth/google", passport.authenticate('google', { scope: ["profile"] }));

app.get("/auth/google/secrets", 
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  });

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.get("/register", function(req, res){
    res.render("register.ejs");
});

app.get("/secrets", function(req, res){
    console.log("getSecrets??");
    User.find({"secret": {$ne: null}}).then((foudUsers) => {
            if (foudUsers) {
                console.log("renderOK?");
                res.render("secrets.ejs", {usersWithSecrets: foudUsers});
            }
    });
    // if (req.isAuthenticated()){
    //     res.render("secrets.ejs");
    // } else {
    //     res.redirect("/login");
    // };
});

app.get("/submit", (req, res) => {
    if (req.isAuthenticated()){
        res.render("submit.ejs");
    } else {
        res.redirect("/login");
    };
});

app.post("/submit", (req, res) => {
    const submittedSecret = req.body.secret;
    console.log(`found ${req.body.secret}`);
    console.log(`found ${req.user.id}`);
    User.findById(req.user.id).then((foundUser) => {
        
        if (foundUser) {
            foundUser.secret = submittedSecret;
            foundUser.save();
            res.redirect("/secrets");
        };
    });
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
  