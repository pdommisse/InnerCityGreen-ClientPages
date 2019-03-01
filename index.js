var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/user_data", { useNewUrlParser: true });

var app = express();
app.use(require("express-session")({
    secret: "123",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/clientpage/:username", function(req, res) {
    User.find({username: req.params.username}, function(err, foundUser){
        if (err) {
            console.log(err)
        } else {
            res.render("clientpage", {user: foundUser});
        }
    })
});

app.get("/register", function(req, res) {
     res.render("register");
});

app.post("/register", function(req, res) {
     console.log("here");
     req.body.username;
     req.body.password;
     req.body.fullname;
     req.body.titles;
     req.body.textAreas;
     req.body.imgs;
     req.body.videos;
     User.register(new User({username: req.body.username, 
                             name: req.body.fullname,
                             paragraphs: {titles: req.body.titles, textAreas: req.body.textAreas}, 
                             imgs: req.body.imgs, 
                             videos: req.body.videos}), 
                   req.body.password, function(err, user){
         if (err) {
             console.log(err);
             return res.render("register");
         }
         passport.authenticate("local")(req, res, function(){
             console.log("succsessful")
             res.redirect("/register");
         })
     });
});

app.get("/login", function(req, res) {
     res.render("login");
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log("Successful Login");
    res.redirect('/clientpage/' + req.user.username);
});

app.get("/logout", function(req, res) {
   req.logout();
   res.redirect("/login");
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("Server live");
}); 






