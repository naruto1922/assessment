var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
//var usersRouter = require('./routes/users');
var router = express.Router();
var mongoose = require('mongoose');
//var userModel = require('./models/userModel');
 var database;
const { stringify } = require("qs");
//var mongoose = require('mongoose');
//const mongoose = require("../database");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL =
// "mongodb://localhost:27017/";
   "mongodb+srv://naruto1922:Vinay123@cluster0.tnpjvpd.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "test";
mongoose.connect(
    CONNECTION_URL
    // ,
    // { useNewUrlParser: true,
    //   useUnifiedTopology: true },
    // (error, client) => {
    //   if (error) {
    //     throw error;
    //   }

    //   database = client.db(DATABASE_NAME);
    //   console.log("Connected to `" + DATABASE_NAME + "`!");
    // }
  );
 


// create an schema
var userSchema = new mongoose.Schema({
            Fullname: { type: String},
            Headline: { type: String},
            companyname: { type: String},
            position: { type: String},
            joiningdate: { type: Date},
            resigningdate: { type: Date},
            workdescription: { type: String},
            usedskills: { type: String},
            projecttitle: { type: String},
            projecturl: { type: String},
            projectdescription:{ type: String},
            projectduration:{ type: Number},
            certificatename: { type: String},
            certificateissuingorganisation: { type: String},
            certificatelink: { type: String},
            certificateissuedate: { type: Date},
            coursename: { type: String},
            courseissuingorganisation: { type: String},
            email: { type: String},
            phone: { type: Number},
            skypeid:{ type: String}
        });


const information=mongoose.model('information',userSchema);
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '123456catr',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
 
app.use(flash());
//app.use('/', usersRouter);


const temp = new information({
  "Fullname":"Hello"
});

// temp.save(function(err) {
//   if(err) console.log(err);
//   else console.log("w");
// });

// app.get("/", async (request, response) => {
//   const users = await User.find({});

//   try {
//     response.render("form",{information:data});
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
 app.get("/", function (req, res) {
//   User.find((err, User) => {
//     if (!err) {
//         res.render("form", {
//             data: User
//         });
//     } else {
//         console.log('Failed to retrieve the Information: ' + err);
//     }
// });




// information.find(function(err,data){
//   console.log(data[0].Fullname);
// });
 res.render("form") ;
// });
// router.get('/', function(req, res, next) {
      
 

});
// app.post("/", function (req, res) {
 
//   res.render("form");
// });
 
// catch 404 and forward to error handler

app.post("/",function(req,res) {
  console.log("hi");
             const tempp = new information({
               "Fullname": req.body.Fullname,
              "Headline":req.body.Headline,
              "companyname":req.body.companyname,
              "position": req.body.position,
              "joiningdate":req.body.joiningdate,
              "resigningdate": req.body.resigningdate,
              "workdescription": req.body.workdescription,
              "usedskills": req.body.usedskills,
              "projecttitle": req.body.projecttitle,
              "projecturl": req.body.projecturl,
              "projectdescription":req.body.projectdescription,
              "projectduration":req.body.projectduration,
              "certificatename": req.body.certificatename,
              "certificateissuingorganisation": req.body.certificateissuingorganisation,
              "certificatelink": req.body.certificatelink,
              "certificateissuedate": req.body.certificateissuedate,
              "coursename": req.body.coursename,
              "courseissuingorganisation": req.body.courseissuingorganisation,
              "email": req.body.email,
              "phone": req.body.phone,
              "skypeid":req.body.skypeid
             });
           
             tempp.save(function(err) {
              if(err) console.log(err);
             });

            
           
             res.render("form",{data:tempp}) ;
});

app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 




            


// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
   
});
 
