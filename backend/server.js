const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");
const bcrypt = require("bcryptjs");
const User = require("./model/UserModel");
const generateToken = require("./generateToken");
//dotenv config
dotenv.config();

//Connect to MongoDb Database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

var salt = bcrypt.genSaltSync(10);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (bcrypt.compare(user.password, password)) {
        let token = generateToken(user._id);
        // console.log(user)
        res.send({ message: "Login Success", user: user,token:token });
      } else {
        res.send({ message: "Wrong Credentials" });
      }
    } else {
      res.send({ message: "Not Registered User" });
    }
  });
});
app.post("/signin", (req, res) => {
//   console.log(req.body);
  let { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Exist. Please Login to Continue" });
    } else {
      password = bcrypt.hashSync(password, salt);
      const user = new User({ name, email, password });
    //   console.log(user)
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Regitration Success" });
        }
      });
    }
  });
});

const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} Mode and listening on port 5000`
  );
});
